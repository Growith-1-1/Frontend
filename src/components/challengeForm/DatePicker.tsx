interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
}

export default function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2">챌린지 기간</label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          readOnly
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="6"
              width="18"
              height="15"
              rx="2"
              stroke="#CCCCCC"
              strokeWidth="2"
            />
            <path d="M3 10H21" stroke="#CCCCCC" strokeWidth="2" />
            <path
              d="M8 3V7"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 3V7"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
