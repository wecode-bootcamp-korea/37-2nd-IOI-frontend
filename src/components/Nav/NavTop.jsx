import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import SubscribeModal from '../SubscribeModal/SubscribeModal';
import ProfileModal from './ProfileModal';

function NavTop() {
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

  return (
    <Header>
      <Nav>
        <WrapInfo>
          <Logo>IOI</Logo>
          <Subscribe onClick={() => setSubscribeModalOpen(prev => !prev)}>
            구독
          </Subscribe>
          <Modal
            isOpen={subscribeModalOpen}
            onRequestClose={() => setSubscribeModalOpen(prev => !prev)}
            style={subscribeModal}
            preventScroll={true}
            onAfterOpen={() => {
              document.body.style.overflow = 'hidden';
            }}
            onAfterClose={() => {
              document.body.style.overflow = 'scroll';
            }}
          >
            <SubscribeModal />
            <CloseBtn onClick={() => setSubscribeModalOpen(prev => !prev)}>
              x
            </CloseBtn>
          </Modal>
          <Store>스토어</Store>
          <WrapSearch>
            <Input placeholder="찾으시는 취미가 있나요?" />
            <FaSearch size="13" />
          </WrapSearch>
        </WrapInfo>
        <WrapUser>
          <StyledLink to="/creatorcenter">
            <HeaderLink>크리에이터 센터</HeaderLink>
          </StyledLink>
          <WrapProfile onClick={() => setProfileModalOpen(prev => !prev)}>
            <FaUserCircle size="28" className="icon-user" />
            <FaChevronDown size="15" />
          </WrapProfile>
          {accessToken ? (
            <WrapProfile onClick={() => setProfileModalOpen(prev => !prev)}>
              <FaUserCircle size="28" className="icon-user" />
              <FaChevronDown size="15" />
              <Modal
                isOpen={profileModalOpen}
                style={profileModal}
                onRequestClose={() => setProfileModalOpen(prev => !prev)}
              >
                <ProfileModal />
              </Modal>
            </WrapProfile>
          ) : (
            <StyledLink to="/login">
              <HeaderLink>로그인</HeaderLink>
            </StyledLink>
          )}
          <StyledLink to="/mypage">
            <FaRegHeart size="22" className="icon-like" />
          </StyledLink>
        </WrapUser>
      </Nav>
    </Header>
  );
}

const subscribeModal = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    zIndex: 100,
  },
  content: {
    padding: 0,
    border: 'none',
    borderRadius: '50px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const profileModal = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    zIndex: 100,
  },
  content: {
    position: 'absolute',
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 40px;
  background-color: transparent;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const Header = styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 10;
`;

const Nav = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  margin: 0 auto;
  width: 1140px;
`;

const WrapInfo = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
`;

const Logo = styled.h1`
  margin-right: 35px;
  display: inline-block;
  font-size: 30px;
  font-weight: bold;
`;

const Subscribe = styled.span`
  margin-right: 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const Store = styled(Subscribe)`
  margin-right: 30px;
`;

const WrapSearch = styled.div`
  padding: 10px 20px;
  width: 380px;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
`;

const Input = styled.input`
  width: 327px;
  border: none;
  font-size: 14px;
  line-height: 18px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a2a2a2;
  }
`;

const WrapUser = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  position: relative;
  .icon-like {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const HeaderLink = styled.span`
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #ff5600;
  }
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

const WrapProfile = styled(WrapUser)`
  margin-right: 20px;
  cursor: pointer;
  .icon-user {
    margin-right: 5px;
  }
`;

export default NavTop;
