import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const mainCategoryTable = {
  1: '취미, 특기',
  2: '외국어',
};

const subCategoryTable = {
  1: '스포츠',
  2: '예절',
  3: '예술',
  4: '패션',
  5: '영어',
  6: '중국어',
  7: '일본어',
  8: '아랍어',
};

function Class({
  index,
  classItem,
  classItem: {
    id,
    coverImage,
    classTitle,
    mainCategory,
    subCategory,
    createdAt,
  },
  classListArr,
  setClassListArr,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const classDeleter = event => {
    classListArr.splice(index, 1);
    setClassListArr([...classListArr]);
  };

  const goToClassDetail = () => {
    searchParams.set('page', 'classDetail');
    searchParams.set('classId', id);
    setSearchParams(searchParams);
  };

  const mainCategoryText = mainCategoryTable[mainCategory];
  const subCategoryText = subCategoryTable[subCategory];

  return (
    <ClassContainer>
      <input type="checkbox" />
      <Image src={coverImage} alt="강의커버이미지" onClick={goToClassDetail} />
      <Property onClick={goToClassDetail}>{classTitle}</Property>
      <Property onClick={goToClassDetail}>{mainCategoryText}</Property>
      <Property onClick={goToClassDetail}>{subCategoryText}</Property>
      <Property onClick={goToClassDetail}>{createdAt}</Property>
      <DeleteButton onClick={classDeleter}>삭제</DeleteButton>
    </ClassContainer>
  );
}

const ClassContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  width:1200px;
  margin: 20px 3px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f2f2f2;
`;

const Image = styled.img`
  width: 100px;
  padding: 5px;
  margin-left: 3%;
  margin-right: 3%;
  font-weight: 700;
  cursor: pointer;
`;

const Property = styled.div`
  width: 170px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  margin-left: 210px;
  padding-top: 3px;
  background-color: white;
  border: 1px solid #ececec;
  width: 70px;
  height: 38px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export default Class;
