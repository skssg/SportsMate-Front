import styled from 'styled-components';

const FooterContainer = styled.div`
   .footer {
        display: block;
        margin-top: 50px;
        background-color: #3C3636;
        height: 230px;
        color: white;
        padding-left: 15px;
        padding-top: 10px;
        position: relative;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .footer p {
        font-size: 10px;
    }

    .footer h3 {
        font-size: 20px;
    }

    .sixall-mem {
        position: absolute;
        right: 2%;
    }
`;

const Footer = () => {
    return (
        <FooterContainer >
            <div className="footer">
                <p className="sixall-mem">TEAM: 6ALL | 조장 이철규 | DBA 김민재 | 형상관리자 이명건 | 이슈관리자 김현준 | 일정관리자 강주원</p>
                <h3>SportsMate.com</h3>
                <p>팀 스포츠의 시작, 온라인으로 쉽고 빠르게!</p><br />
                <p>SportMate | 서울 강남구 테헤란로14길 6 남도빌딩  3층 | 대표 메일 contact@sportsmate.com | 마케팅 제안 admin@sportsmate.com</p>
                <p>언론, 연구 team@sportsmate.com | 02-123-4567 | 주식회사 KH정보교육원 | 사업자번호 123-45-67890 | 대표 이철규 | 통신판매업 신고 2024-서울강남-1234</p><br />
                <p>Copyright SportsMate All rights reserved.</p>
            </div>
        </FooterContainer>
    )
}

export default Footer