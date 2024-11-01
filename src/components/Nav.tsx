import styled from 'styled-components';

const NavContainer = styled.div`
   .nav-container {
        display: flex;
        justify-content: center;
        gap: 50px;
        margin-bottom: 15px;

        @media (max-width: 768px) {
            position: fixed;
            bottom: 0;
            z-index: 10;
            width: 100%;
            height: 60px;
            margin-bottom: 0px;
            padding-top: 15px;
            background-color: rgb(212, 212, 212);
        }
        
    }

    .nav-three {
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }
`;

const Nav = () => {
    return (
        <NavContainer>
            <div className="nav-container">
                <div className="nav-one">구장</div>
                <div className="nav-two">구단메뉴</div>
                <div className="nav-three">홈</div>
                <div className="nav-four">커뮤니티</div>
                <div className="nav-five">랭킹</div>
            </div>
        </NavContainer>
    )
}

export default Nav