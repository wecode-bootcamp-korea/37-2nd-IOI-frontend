import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NavForCreatorCenter from './components/NavForCreatorCenter/NavForCreatorCenter';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import ClassRegist from './components/ClassRegist/ClassRegist';
import Recorder from './components/Recorder/Recorder';
import ClassDetail from './components/ClassDetail/ClassDetail';

function CreatorCenter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const renderComponent = searchParams.get('page');

  const componentList = {
    classRegist: <ClassRegist />,
    recorder: (
      <Recorder searchParams={searchParams} setSearchParams={setSearchParams} />
    ),
    classDetail: <ClassDetail />,
  };

  return (
    <>
      <NavForCreatorCenter />
      <Aside />
      {renderComponent === null ? <Main /> : componentList[renderComponent]}
    </>
  );
}

export default CreatorCenter;
