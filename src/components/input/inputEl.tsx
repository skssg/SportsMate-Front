import React from 'react';
import {Descriptor, InputWrap} from "../../styles/common/LoginPageStyled";
import TextField from "@mui/material/TextField";

interface InputElProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputEl:React.FC<InputElProps> = ({label, value, onChange}) => {
    return (
        <InputWrap width={'100%'}>
            <Descriptor>{label}</Descriptor>
            <TextField id="filled-basic" label="이메일" variant="filled"
                       value={value}
                       onChange={onChange}
            />
        </InputWrap>
    );
};

export default InputEl;