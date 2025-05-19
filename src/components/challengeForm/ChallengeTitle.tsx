interface ChallengeTitleProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ChallengeTitle({
  value,
  onChange,
}: ChallengeTitleProps) {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2">챌린지 제목</label>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
