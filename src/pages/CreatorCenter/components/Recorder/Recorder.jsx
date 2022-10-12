import React, { useRef, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import styled from 'styled-components';
import VideoInfo from './components/VideoInfo';
import { useNavigate } from 'react-router-dom';

function Recorder({ searchParams, setSearchParams }) {
  const preview = useRef();
  const downloader = useRef();
  const videoRegistForm = useRef();
  const recordingFlag = true;
  let streamForRecord;
  let recorder;
  let videoFile;

  const accessToken = localStorage.getItem('token');
  const currentClassId = searchParams.get('classId');
  const navigate = useNavigate();

  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then(stream => {
      streamForRecord = stream;
      let video = preview.current;
      video.srcObject = stream;
      video.play();
    });

  const recordStarter = () => {
    console.log('녹화시작');
    let video = preview.current;
    recorder = new MediaRecorder(streamForRecord);
    recorder.ondataavailable = event => {
      videoFile = URL.createObjectURL(event.data);
      video.srcObject = null;
      video.src = videoFile;
      video.loop = true;
      video.play();
    };
    recorder.start();
  };

  const recordStopoer = () => {
    console.log('녹화종료');
    recorder.stop();
  };

  const recordDownloader = async () => {
    const ffmpeg = createFFmpeg({
      log: true,
    });
    // await ffmpeg.load();
    // ffmpeg.FS('writeFile', 'recording.webm', await fetchFile(videoFile));
    // await ffmpeg.run('-i', 'recording.webm', 'r', '60', 'output.mp4');

    // const mp4File = ffmpeg.FS('readFile', 'output.mp4');
    // const mp4Blob = new Blob([mp4File.buffer], { type: 'video/mp4' });

    const a = document.createElement('a');
    a.href = videoFile;
    a.download = 'downloadVideo.webm';
    document.body.appendChild(a);
    a.click();
  };

  const lectureSubmit = event => {
    event.preventDefault();

    const videoForm = new FormData(videoRegistForm.current);

    for (let key of videoForm.keys()) {
      console.log('key : ', key);
    }
    for (let value of videoForm.values()) {
      console.log('value : ', value);
    }

    fetch(`http://10.58.52.179:3000/video/upload`, {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjU0MDA3Mjh9.fJounHh1M4DEboDn_UHqM8O0Qgu3v3iRzhtv_mrCa0Y',
      },
      body: videoForm,
    }).then(response => {
      if (response.ok) {
        navigate(`?page=classDetail&classId=${currentClassId}`);
      }
    });
  };

  return (
    <RecorderContainer>
      <Video ref={preview} />
      <ButtonContainer>
        <button onClick={recordStarter}>Start Recording</button>
        <button onClick={recordStopoer}>Stop Recording</button>
        <button onClick={recordDownloader} ref={downloader}>
          Download Video
        </button>
      </ButtonContainer>
      <Form ref={videoRegistForm}>
        <Button onClick={lectureSubmit}>
          Submit
          <br /> Lecture
        </Button>
        <VideoInfo recordingFlag={recordingFlag} />

        <Input name="classId" defaultValue={2} />
      </Form>
    </RecorderContainer>
  );
}

const RecorderContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width:100%;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 264px;
`;

const Video = styled.video`
  width: 50%;
  border-radius: 20px;
  transform: rotateY(180deg);
`;

const ButtonContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  margin-top: 25px;
  button {
    border: none;
    border-radius: 10px;
    margin: 5px;
    width: 110px;
    height: 40px;
    font-weight: 700;
    cursor: pointer;

    &:nth-child(4) {
    }
  }
`;

const Form = styled.form`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
`;

const InputContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  margin-top: 20px;
  min-width: 440px;
  width: 33%;
  max-width: 800px;
  /* border: 1px solid #e5e5e5;
  border-radius: 7px; */
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  margin: 5px;
  width: 80%;
  height: 40px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${props => props.theme.style.deepGrey};
  color: white;
`;

const Input = styled.input`
  display: none;
`;

export default Recorder;
