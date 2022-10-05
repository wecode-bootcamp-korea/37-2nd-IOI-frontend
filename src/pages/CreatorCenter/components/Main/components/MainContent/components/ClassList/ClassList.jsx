import React, { useState, useEffect } from 'react';
import ClassListProperty from './components/ClassListProperty';
import Class from './components/Class';
import styled from 'styled-components';

import MOCK from './mockData/classLists';

function ClassList() {
  const [classListArr, setClassListArr] = useState([]);

  useEffect(() => {
    // fetch(`http://10.58.52.168:3000/classes/`, {
    //   method: 'GET',
    //   headers: {
    //     authorization:
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjU0OTQ1ODV9.X8fUzjG8qfteilbZLl2S2Kzl9neM_wjL3zr6qRQSHT8',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log('result', result);
    //     setClassListArr(result);
    //   });
    setClassListArr(MOCK);
  }, [classListArr]);
  return (
    <ClassListContainer>
      <ClassListProperty />
      {classListArr?.map((classItem, index) => {
        return (
          <Class
            key={classItem.id}
            index={index}
            id={classItem.id}
            classItem={classItem}
            classListArr={classListArr}
            setClassListArr={setClassListArr}
          />
        );
      })}
    </ClassListContainer>
  );
}

const ClassListContainer = styled.div`
  overflow-x: scroll;
`;

export default ClassList;
