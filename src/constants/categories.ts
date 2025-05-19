export const CATEGORIES = [
  { id: 1, korean: '식비', english: 'food', color: '#FF9AA2' },
  { id: 2, korean: '카페 / 간식', english: 'cafe_snack', color: '#FFB347' },
  {
    id: 3,
    korean: '편의점 / 마트 / 잡화',
    english: 'convenience_store',
    color: '#A8E6CF',
  },
  {
    id: 4,
    korean: '술 / 유흥',
    english: 'alcohol_entertainment',
    color: '#81C7D4',
  },
  { id: 5, korean: '쇼핑', english: 'shopping', color: '#F8A978' },
  { id: 6, korean: '취미 / 여가', english: 'hobby', color: '#C7B8EA' },
  {
    id: 7,
    korean: '의료 / 건강 / 피트니스',
    english: 'health',
    color: '#93DBD8',
  },
  {
    id: 8,
    korean: '주거 / 통신',
    english: 'housing_communication',
    color: '#B19CD9',
  },
  {
    id: 9,
    korean: '보험 / 세금 / 기타금융',
    english: 'finance',
    color: '#FDCB6E',
  },
  { id: 10, korean: '미용', english: 'beauty', color: '#D5ECC2' },
  {
    id: 11,
    korean: '교통 / 자동차',
    english: 'transportation',
    color: '#98C1D9',
  },
  { id: 12, korean: '여행 / 숙박', english: 'travel', color: '#FA897B' },
  { id: 13, korean: '교육', english: 'education', color: '#84B1ED' },
  { id: 14, korean: '생활', english: 'living', color: '#CCE2CB' },
  { id: 15, korean: '기부 / 후원', english: 'donation', color: '#FFAAA6' },
  { id: 16, korean: '카드대금', english: 'card_payment', color: '#8FCACA' },
  {
    id: 17,
    korean: '후불결제대금',
    english: 'deferred_payment',
    color: '#F3C4FB',
  },
  { id: 18, korean: '이체', english: 'transfer', color: '#FFF7AE' },
  { id: 19, korean: '급여', english: 'salary', color: '#67C8FF' },
  {
    id: 20,
    korean: '저축 / 투자',
    english: 'saving_investment',
    color: '#96DED1',
  },
  { id: 21, korean: '카테고리 미설정', english: 'none', color: '#DCDCDC' },
] as const;

// 카테고리 ID 타입
export type CategoryId = (typeof CATEGORIES)[number]['id'];
// 카테고리 COLOR 타입
export type CategoryColor = (typeof CATEGORIES)[number]['color'];

// 유틸리티 함수 - ID로 카테고리 찾기
export const getCategoryById = (id: CategoryId) => {
  return CATEGORIES.find((category) => category.id === id);
};

export const getCategoryByKorean = (korean: string) => {
  return CATEGORIES.find((category) => category.korean === korean);
};
export const getCategoryByEnglish = (english: string) => {
  return CATEGORIES.find((category) => category.english === english);
};
export const getCategoryColorByKorean = (korean: string) => {
  return CATEGORIES.find((category) => category.korean === korean);
};
