import React from 'react';
import styled from 'styled-components';
import InputForm from '../../ClassRegist/components/InputForm';
import VIDEO_INFO_LIST from '../constData/VIDEO_INFO_LIST';

function VideoInfo({ title, classInfo, setClassInfo, recordingFlag }) {
  return (
    <InfoContainer>
      <InfoTitle>{title}</InfoTitle>
      {VIDEO_INFO_LIST.map(
        ({ type, title, isMultiple, subject, description }) => {
          return (
            <InputForm
              key={subject}
              type={type}
              title={title}
              isMultiple={isMultiple}
              subject={subject}
              description={description}
              classInfo={classInfo}
              setClassInfo={setClassInfo}
              recordingFlag={recordingFlag}
            />
          );
        }
      )}
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  margin-top: 20px;
  min-width: 440px;
  width: 55%;
  max-width: 800px;
  border: 1px solid #e5e5e5;
  border-radius: 7px;
`;

const InfoTitle = styled.div`
  margin: 21px 0px 7px 14px;
  font-size: 18px;
  font-weight: 700;
`;

export default VideoInfo;
