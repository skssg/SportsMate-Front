import React, {useState} from 'react';
import {
    LoginWrap,
    FindDiv,
    UnderLine,
    Descriptor,
    InputWrap,
    StyledFormGroup
} from "../styles/common/LoginPageStyled";
import TextField from '@mui/material/TextField';
import {Checkbox, FormControlLabel, FormGroup, Button} from "@mui/material";
import {Form, useNavigate} from "react-router-dom";
import InputEl from "./input/inputEl";
import ButtonEl from "./button/ButtonEl";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');

    const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post('/api/login', {email, password});
            const userData = response.data;

            sessionStorage.setItem('loginUser', JSON.stringify(userData));

            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
        }
    };
    const formStyle:React.CSSProperties = {
        width : '100%',
        textAlign : 'center'
    }
    return (
        <LoginWrap>
            <form onSubmit={handleSubmit} style={formStyle}>
                {/*<FormContainer>*/}
                <FormGroup style={{width: '45%'}}>
                    {/*<StyledFormGroup>*/}
                    {/*<InputEl*/}
                    {/*    label={'이메일'}*/}
                    {/*    value={email}*/}
                    {/*    onChange={handleInputEmail}*/}
                    {/*/>*/}
                    <Descriptor>이메일</Descriptor>
                    <TextField id="filled-basic" label="이메일" variant="filled"
                               value={email}
                               onChange={handleInputEmail}
                    />
                    <Descriptor>비밀번호</Descriptor>
                    <TextField id="filled-basic" label="비밀번호" variant="filled"
                               value={password}
                               onChange={handleInputPassword}
                    />
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="아이디 저장"/>
                    {/*<Button variant="contained" disableElevation>*/}
                    {/*    로그인*/}
                    {/*</Button>*/}
                    <ButtonEl label={'로그인'}/>
                    {/*</StyledFormGroup>*/}
                </FormGroup>
                {/*</FormContainer>*/}
            </form>
            <FindDiv>
                <span onClick={() => navigate('/FindInfo_me')} style={{cursor: 'pointer', padding: '20px 0px'}}>
                    아이디/비밀번호 찾기
                </span>
                <span onClick={() => navigate('/EnrollForm.me')} style={{cursor: 'pointer', padding: '20px 0px'}}>
                    회원가입
                </span>
            </FindDiv>
            <UnderLine/>
        </LoginWrap>
    );
};

export default Login;