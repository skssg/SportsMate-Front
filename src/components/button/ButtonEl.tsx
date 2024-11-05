import React from 'react';
import {Btn} from "../../styles/common/LoginPageStyled";

interface BtnProps {
    label: string,
}

const ButtonEl: React.FC<BtnProps> = ({label}) => {
    return (
        <>
            <Btn color={'white'} type={"submit"}>
                {label}
            </Btn>
        </>
    );
};

export default ButtonEl;