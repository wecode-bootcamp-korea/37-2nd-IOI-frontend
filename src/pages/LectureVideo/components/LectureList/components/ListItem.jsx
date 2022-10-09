import React from 'react';
import styled from 'styled-components';
import variables from '../../../../../styles/variables';

function ListItem({
  ListItem: { id, title, description, time, viewCount },
  searchParams,
  setSearchParams,
  setVideoId,
}) {
  const goToLecture = () => {
    searchParams.set('videoId', id);
    setSearchParams(searchParams);
    setVideoId(id);
  };

  return (
    <ItmeContainer onClick={goToLecture}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Time>
        <Img src="https://cdn-icons-png.flaticon.com/512/5910/5910421.png" />
        <Text>{time}</Text>
      </Time>
      <ViewCount>
        <Img src="https://cdn-icons-png.flaticon.com/512/5618/5618479.png" />
        <Text>{viewCount}</Text>
      </ViewCount>
    </ItmeContainer>
  );
}

const ItmeContainer = styled.div`
  margin: 35px;
  cursor: pointer;
`;

const Title = styled.div`
  color: #f3f3f3;
  font-size: 25px;
  margin-bottom: 10px;
`;
const Description = styled.div`
  color: ${props => props.theme.style.lightGray};
`;
const Time = styled.div`
  ${props => props.theme.variables.flex('row', '', 'center')}
  margin-top:5px;
`;

const Img = styled.img`
  height: 10px;
  color: white;
`;
const Text = styled.div`
  margin-left: 5px;
  padding-top: 3px;
`;

const ViewCount = styled.div`
  ${props => props.theme.variables.flex('row', '', 'center')}
  margin-top:5px;
`;

export default ListItem;
