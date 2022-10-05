import React from 'react';
import styled from 'styled-components';

function FooterHeader() {
  return (
    <Container>
      ©CLASS101 Instagram ･ Facebook ･ Youtube ･ Naverblog Naverpost ･ Playstore
      ･ Appstore CLASS101 USA ･ CLASS101 Japan
    </Container>
  );
}

const Container = styled.div`
  margin-top: 15px;
  margin-left: 10px;
`;

export default FooterHeader;
