import styled from 'styled-components';

export const mainModal = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    zIndex: 100,
  },
  content: {
    padding: 0,
    border: 'none',
    borderRadius: '10px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
  },
};

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 35px;
  right: 43px;
  background-color: transparent;
  font-size: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    color: #ff5600;
  }
`;

export const ModalContainer = styled.div`
  padding: 45px 44px 25px 34px;
  width: 416px;
`;

export const ModalTitle = styled.p`
  padding-left: 8px;
  margin-bottom: 35px;
  font-size: 20px;
  font-weight: bold;
`;

export const CategoryList = styled.li`
  margin-bottom: 15px;
  padding: 15px 10px;
  border-radius: 5px;
  list-style: none;
  font-size: 15px;
  color: #1a1a1a;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: #ff5600;
    background-color: #ffe8dc;
  }
`;
