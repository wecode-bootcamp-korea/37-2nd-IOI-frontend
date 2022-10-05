const FORM_TEXT_LIST = [
  {
    type: 'file',
    isMultiple: false,
    subject: '커버 이미지',
    title: 'coverImage',
    description: '커버로 사용할 이미지를 추가해주세요',
  },
  {
    type: 'file',
    isMultiple: true,
    subject: '커버 갤러리',
    title: 'coverGallery',
    description:
      '페이지 상단 커버 영역에 사용할 이미지 또는 영상을 1개 이상 추가해주세요.',
  },
  {
    type: 'text',
    subject: '클래스 제목',
    title: 'classTitle',
    description: '클래스를 대표할 수 있는 제목을 추가해주세요',
  },
  {
    type: 'listCategory1',
    subject: '카테고리 1',
    title: 'mainCategory',
    description: '대분류를 추가해주세요',
  },
  {
    type: 'listCategory2',
    subject: '카테고리 2',
    title: 'subCategory',
    description: '소분류를 추가해주세요',
  },
  {
    type: 'text',
    subject: '카테고리 상세 설명',
    title: 'categoryDetail',
    description: '커리큘럼을 모두 포괄하는 하나의 카테고리를 작성해주세요.',
  },
  {
    type: 'listLevel',
    subject: '클래스 난이도',
    title: 'classLevel',
    borderUnUse: true,
    description: '어느 역량의 수강생을 위한 클래스인지 선택해주세요.',
  },
];

export default FORM_TEXT_LIST;
