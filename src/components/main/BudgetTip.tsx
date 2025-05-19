import React from 'react';
import { PiggyBank, Lightbulb, Plus } from 'lucide-react';
import { useGetTip } from '@/hooks/useTips'; // 팁 목록 가져오는 훅

export const BudgetTip: React.FC = () => {
  const { data: tips, isLoading, isError } = useGetTip(); // 팁 목록 가져오기

  return (
    <div className="bg-gray-100 rounded-lg p-3 mt-4">
      <div className="flex items-start">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
          <PiggyBank className="text-green-500 text-sm" />
        </div>
        <div>
          <p className="text-black-500 ml-3">소비팁을 공유해봐요!</p>
        </div>
      </div>

      {isLoading && <p>로딩 중...</p>}
      {isError && <p>데이터를 가져오는 데 오류가 발생했습니다.</p>}
      <div className="mt-4">
        {Array.isArray(tips) && tips.length > 0 ? (
          tips.map((tip: { id: number; content: string }) => (
            <div
              key={tip.id}
              className="flex items-start mb-2 p-2 bg-white rounded-md shadow-sm"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                <PiggyBank className="text-green-500 text-sm" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">{tip.content}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-6 my-4 bg-gradient-to-br from-green-50 to-green-50 rounded-lg border border-green-100 shadow-sm">
            <Lightbulb className="text-green-400 mb-3" size={48} />
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              아직 공유된 팁이 없어요!
            </h3>
            <p className="text-gray-500 text-center mb-4">
              첫 번째로 여러분의 유용한 팁을 공유해보세요.
            </p>
            <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200 font-medium">
              <Plus className="mr-1" size={18} />팁 작성하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
