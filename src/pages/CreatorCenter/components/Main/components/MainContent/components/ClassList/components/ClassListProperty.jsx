import React from 'react';
import styled from 'styled-components';

function ClassListProperty() {
  return (
    <PropertyContainer>
      <input type="checkbox" />
      <Property />
      <Property>제목</Property>
      <Property>카테고리1</Property>
      <Property>카테고리2</Property>
      <Property>생성일</Property>
    </PropertyContainer>
  );
}

const PropertyContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  width:1200px;
  margin: 20px 3px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f2f2f2;
`;

const Property = styled.div`
  width: 170px;
  font-weight: 700;
`;

export default ClassListProperty;
