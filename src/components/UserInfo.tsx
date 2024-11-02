import styled from 'styled-components';

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
`;

const UserInfoField = styled.div`
  margin: 5px 0;
`;

interface UserInfoProps {
    name: string;
    address: string;
    email: string;
    gender: string;
    age: number;
    rating: number;
}


const UserInfo: React.FC<UserInfoProps> = ({ name, address, email, gender, age, rating }) => {
    return (
        <UserInfoContainer>
            <UserInfoField>이름: {name}</UserInfoField>
            <UserInfoField>주소: {address}</UserInfoField>
            <UserInfoField>이메일: {email}</UserInfoField>
            <UserInfoField>성별: {gender}</UserInfoField>
            <UserInfoField>나이: {age}</UserInfoField>
            <UserInfoField>평점: {rating}</UserInfoField>
        </UserInfoContainer>
    );
};

export default UserInfo