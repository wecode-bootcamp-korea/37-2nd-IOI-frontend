import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function ProfileModal() {
  return (
    <ProfileContainer>
      <UserContainer>
        <FaUserCircle size="28" className="icon-user" />
        <UserBox>
          <UserName>Classmate</UserName>
          <StyledLink to="/mypage">
            <MypageBox>
              <Mypage>마이페이지</Mypage>
              <FaChevronRight color="#ff5600" size="8" />
            </MypageBox>
          </StyledLink>
        </UserBox>
      </UserContainer>
      <Logout>로그아웃</Logout>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  padding: 24px;
`;

const UserContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  width: 152px;
  padding-bottom: 20px;
`;

const UserBox = styled.div`
  margin-left: 10px;
`;

const UserName = styled.p`
  margin-bottom: 2px;
  font-size: 14px;
`;

const MypageBox = styled.div`
  cursor: pointer;
`;

const Mypage = styled.span`
  margin-right: 3px;
  font-size: 11px;
  font-weight: bold;
  color: #ff5600;
`;

const Logout = styled.p`
  padding-top: 20px;
  border-top: 1px solid lightgray;
  font-size: 13px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default ProfileModal;
