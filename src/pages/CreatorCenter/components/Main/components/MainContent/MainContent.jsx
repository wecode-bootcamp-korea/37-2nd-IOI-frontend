import React from 'react';
import styled from 'styled-components';
import MainHeader from '../MainHeader/MainHeader';
import ClassListSearchBar from './components/ClassListSearchBar/ClassListSearchBar';
import ClassList from './components/ClassList/ClassList';

function MainContent() {
  return (
    <MainContentContainer>
      <MainHeader />
      <ContentContainer>
        <ClassListSearchBar />
        <ClassList />
      </ContentContainer>
    </MainContentContainer>
  );
}

const MainContentContainer = styled.div`
  width: 90%;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  padding: 10px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
`;

export default MainContent;
