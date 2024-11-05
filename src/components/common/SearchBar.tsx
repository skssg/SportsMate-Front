import React from 'react';
import searchBtn from '../../images/search-btn.png'
import '../../styles/common/SearchBar.css'
import {SearchBarWrap} from "../../styles/common/MainPageStyled";

interface SearchBarProps{
    isPC:boolean,
    width ?: string,
}

const SearchBar:React.FC<SearchBarProps> = ({isPC}) => {
    return (
        <SearchBarWrap  width={'100%'}>
            <form action="#" id={"search-bar-from"}>
                <input type="text" placeholder={'구장명을 입력하세요.'}/>
                <button><img src={searchBtn} alt=""/></button>
            </form>
        </SearchBarWrap>
    );
};

export default SearchBar;