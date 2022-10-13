import React, { useState, useEffect } from 'react';
import ClassListProperty from './components/ClassListProperty';
import Class from './components/Class';
import styled from 'styled-components';

import MOCK from './mockData/classLists';

function ClassList() {
  const [classListArr, setClassListArr] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.168:3000/classes/`, {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NjU1NDkyNTN9.sMNrT8dL5pYAuAKFi3HTPzd9b51xvXJEbZmYANxxrxM',
      },
    })
      .then(response => response.json())
      .then(result => {
        const acc = [];
        result.classes.map(item => {
          if (acc.length !== 0) {
            acc.every((accs, index) => {
              if (item.classId < accs.classId) {
                acc.splice(index, 0, item);
                return false;
              }
              return true;
            });
          } else if (acc.length === 0) {
            acc.push(item);
          }
        });
        setClassListArr(acc);
      });
  }, []);

  console.log('classListArr : ', classListArr);

  return (
    <ClassListContainer>
      <ClassListProperty />
      {classListArr?.map((classItem, index) => {
        return (
          <Class
            key={classItem.classId}
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
