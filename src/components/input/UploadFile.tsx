import React, { useState } from 'react';
import styled from 'styled-components';


const UploadFileContainer = styled.input`
   padding: 8px;
`;

const UploadFile = () => {
    return (
        <UploadFileContainer type='file'/>
    );
};

export default UploadFile;