import React from 'react';
import styled from 'styled-components';
import AsideItem from './components/AsideItem';
import asideItems from './constData/AsideItems';

function Aside() {
  return (
    <AsideContainor>
      {asideItems.map(item => {
        return <AsideItem item={item} key={item.name} />;
      })}
    </AsideContainor>
  );
}

const AsideContainor = styled.aside`
  position: fixed;
  top: 80px;
  width: 264px;
  height: 100vh;
  border-right: 1px solid #e5e5e5;
`;

export default Aside;
