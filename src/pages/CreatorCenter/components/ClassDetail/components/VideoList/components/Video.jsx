import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Video({ videos, setVideos, video }) {
  const navigate = useNavigate();

  const goToLectureVideo = () => {
    navigate(`/lecturevideo?videoId=${video.id}`);
  };

  const videoDeleter = () => {
    let videosForDelete;

    alert(video.id);
    fetch(`http://10.58.52.179:3000/video?videoId=${video.id}`, {
      method: 'DELETE',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjU0MDA3Mjh9.fJounHh1M4DEboDn_UHqM8O0Qgu3v3iRzhtv_mrCa0Y',
      },
    }).then(response => {
      if (response.ok) {
        videosForDelete = videos.filter(item => {
          console.log('item.id: ', item.id);
          console.log('video.id : ', video.id);
          console.log(
            'Number(item.id) !== Number(video.id) :',
            Number(item.id) !== Number(video.id)
          );
          return Number(item.id) !== Number(video.id);
        });
      }
      setVideos([...videosForDelete]);
    });
  };

  return (
    <VideoContatiner key={video.id}>
      <Title onClick={goToLectureVideo}>강의 제목: {video.videoTitle}</Title>
      <Description onClick={goToLectureVideo}>
        강의 설명: {video.videoDescription}
      </Description>
      <Button onClick={videoDeleter}>delete</Button>
    </VideoContatiner>
  );
}

const VideoContatiner = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
`;

const Description = styled.div`
  margin-top: 5px;
  cursor: pointer;
`;

const Button = styled.button`
  margin-top: 5px;
  border: none;
  background-color: ${props => props.theme.style.middleGray};
  height: 25px;
  cursor: pointer;
`;

export default Video;
