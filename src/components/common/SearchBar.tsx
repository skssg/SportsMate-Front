import React from 'react';
import searchBtn from '../../images/search-btn.png'
import '../../styles/common/SearchBar.css'
import {SearchBarWrap} from "../../styles/common/MainPageStyled";

interface SearchBarProps{
    isPC:boolean,
}

const SearchBar:React.FC<SearchBarProps> = ({isPC}) => {
    return (
        <SearchBarWrap id={isPC ? 'search-bar' : 'Mobile-search-bar'}>
            <form action="#" id={"search-bar-from"}>
                <input type="text" placeholder={'구장명을 입력하세요.'}/>
                <button><img src={searchBtn} alt=""/></button>
            </form>
        </SearchBarWrap>
    );
};

export default SearchBar;