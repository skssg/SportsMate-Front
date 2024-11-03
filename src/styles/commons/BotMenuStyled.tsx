import styled from "styled-components";

export const BotMenu = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 30px);
    height: 60px;
    padding: 10px 15px;
    border: 1px solid #cccccc;
    border-style: solid none none none;
    position: fixed;
    bottom: 0;
    background: white;
`

export const BotBtn = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

export const BotImg = styled.img.attrs(props => ({
    src: props.src
}))`
    padding: 0;
    width: 30px;
    height: 30px;
`