import React from 'react';
import styled from 'styled-components';
import FooterHeader from './components/FooterHeader';
import FooterPromise from './components/FooterPromise';
import FooterContent from './components/FooterContent';

function MainFooter() {
  return (
    <FooterContainer>
      <FooterHeader />
      <FooterPromise />
      <FooterContent />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  border-top:1px solid #e5e5e5;
  width: 100%;
  height: 150px;
`;

export default MainFooter;
