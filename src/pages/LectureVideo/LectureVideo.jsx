import React, { useState, useEffect } from 'react';
import Lecture from './components/Lecture/Lecture';
import LectureList from './components/LectureList/LectureList';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import VIDEOS from './mockData/video';
import Nav from './components/Nav/Nav';

function LectureVideo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedLecture, setSelectedLecture] = useState();
  const [lectureList, setLectureList] = useState();
  const [videoId, setVideoId] = useState(searchParams.get('videoId'));

  useEffect(() => {
    fetch('http://10.58.52.109:3000/video/2', {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjU0MDA3Mjh9.fJounHh1M4DEboDn_UHqM8O0Qgu3v3iRzhtv_mrCa0Y',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setLectureList(result.video);
      });
  }, []);

  useEffect(() => {
    lectureList?.map(video => {
      if (Number(videoId) === Number(video.id)) {
        setSelectedLecture(video);
      }
    });
  }, [videoId, lectureList]);

  return (
    <>
      <Nav />
      <LectureContainer>
        <Lecture selectedLecture={selectedLecture} />
        <LectureList
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          lectureList={lectureList}
          setVideoId={setVideoId}
        />
      </LectureContainer>
    </>
  );
}

const LectureContainer = styled.div`
  ${props => props.theme.variables.flex('row', '', '')}
  margin-top:80px;
  background-color: black;
`;

export default LectureVideo;
