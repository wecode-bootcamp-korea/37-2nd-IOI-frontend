import React from 'react';
import styled from 'styled-components';

function FooterContent() {
  return (
    <Container>
      주식회사 클래스101 | 대표 공대선 | 서울특별시 강남구 테헤란로 302, 1-11층,
      13층(역삼동, 위워크타워) | ask@101.inc | 전화번호: 1800-2109 | 클라우드
      호스팅: Amazon Web Services Korea LLC | 사업자등록번호: 457-81-00277 |
      통신판매업신고: 2022-서울강남-02525 | 클래스101은 통신판매중개자로서
      중개하는 거래에 대하여 책임을 부담하지 않습니다.
    </Container>
  );
}
const Container = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  color: gray;
`;
export default FooterContent;
