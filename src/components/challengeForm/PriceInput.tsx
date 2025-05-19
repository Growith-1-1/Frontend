interface PriceInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PriceInput({ value, onChange }: PriceInputProps) {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2">목표 금액 채우기</label>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="금액을 직접 입력하세요"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <span className="ml-2 text-gray-600">원</span>
      </div>
    </div>
  );
}
