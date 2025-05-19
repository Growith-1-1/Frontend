interface VisibilitySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function VisibilitySelector({
  value,
  onChange,
}: VisibilitySelectorProps) {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2">공개 설정</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="" disabled selected>
            공개 범위를 설정하세요
          </option>
          <option value="public">공개</option>
          <option value="friends">친구만</option>
          <option value="private">비공개</option>
        </select>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
