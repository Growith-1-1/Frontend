import { ArrowRight, BarChart3, PenLine } from 'lucide-react';

export default function EmptyConsumption() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 relative">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 flex items-center justify-center bg-amber-50 rounded-full shadow-sm border border-white">
            <PenLine className="w-4 h-4 text-amber-500" />
          </div>
        </div>
        <h3 className="title1 text-gray-800 mb-2">아직 소비 기록이 없어요!</h3>
        <p className="title3 text-gray-500 mb-5 max-w-xs">
          소비 내역을 기록하면 동향을 분석하고 더 나은 소비 습관을 만들 수
          있어요.
        </p>
        <button
          className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r bg-green-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          onClick={() => (window.location.href = '/transactions/create')}
        >
          <span>기록 시작하기</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}
