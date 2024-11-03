import styled from "styled-components";

export const SearchDiv = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchInput = styled.input.attrs({
    type: "text",
    placeholder : "구장명을 검색해주세요."
})`
    width: 340px;
    height: 40px;
    border-color: #1D87FA;
    border-radius: 8px;
    padding: 0px 20px;

    &:focus {
        outline: none;
    }
`