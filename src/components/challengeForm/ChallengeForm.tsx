'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ChallengeInfo from './ChallengeInfo';
import ChallengeTitle from './ChallengeTitle';
import ChallengeDescription from './ChallengeDescription';
import PriceInput from './PriceInput';
import DatePicker from './DatePicker';
import VisibilitySelector from './VisibilitySelector';
import ActionButtons from './ActionButtons';

const fetchChallengeData = async (id: string) => {
  // 실제로는 API 호출이 들어갈 자리
  // 여기서는 더미 데이터를 반환
  return {
    id,
    title: '매일 운동 챌린지',
    description: '하루 30분씩 운동하고 인증샷 올리기',
    price: '50000',
    date: '2025. 04. 13',
    visibility: 'friends',
  };
};

export default function ChallengeForm() {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    date: '',
    visibility: '',
  });

  useEffect(() => {
    const loadChallengeData = async () => {
      if (id) {
        setIsLoading(true);
        try {
          const data = await fetchChallengeData(id as string);
          setFormData({
            title: data.title,
            description: data.description,
            price: data.price,
            date: data.date,
            visibility: data.visibility,
          });
        } catch (error) {
          console.error('Failed to load challenge data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadChallengeData();
  }, [id]);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // router.push('/challenges');
  };

  const handleDelete = () => {
    // Handle challenge deletion logic here
    console.log('Challenge deleted');
    // router.push('/challenges');
  };

  if (isLoading) {
    return <div className="p-4 text-center">데이터를 불러오는 중...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <button onClick={() => router.back()} className="mr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="text-lg font-medium text-center flex-1 mr-6">
            챌린지 수정
          </h1>
        </div>

        <ChallengeInfo />

        <ChallengeTitle
          value={formData.title}
          onChange={(value) => handleChange('title', value)}
        />

        <ChallengeDescription
          value={formData.description}
          onChange={(value) => handleChange('description', value)}
        />

        <PriceInput
          value={formData.price}
          onChange={(value) => handleChange('price', value)}
        />

        <DatePicker
          value={formData.date}
          onChange={(value) => handleChange('date', value)}
        />

        <VisibilitySelector
          value={formData.visibility}
          onChange={(value) => handleChange('visibility', value)}
        />

        <ActionButtons onSubmit={handleSubmit} onDelete={handleDelete} />
      </div>
    </div>
  );
}
