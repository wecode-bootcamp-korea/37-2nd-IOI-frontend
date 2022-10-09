import React, { useRef } from 'react';
import styled from 'styled-components';

function Video({ videoSrc }) {
  const videoSrcTest = '/data/LectureVideo/ddabong1.webm';

  return <VideoContainer controls={true} src={videoSrc} />;
}

const VideoContainer = styled.video`
  height: 700px;
`;

export default Video;
