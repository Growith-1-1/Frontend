interface ChallengeDescriptionProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ChallengeDescription({
  value,
  onChange,
}: ChallengeDescriptionProps) {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2">챌린지 설명</label>
      <textarea
        placeholder="챌린지에 대한 자세한 설명을 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
