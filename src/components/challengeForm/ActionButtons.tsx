interface ActionButtonsProps {
  onSubmit: () => void;
  onDelete: () => void;
}

export default function ActionButtons({
  onSubmit,
  onDelete,
}: ActionButtonsProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <button
        onClick={onSubmit}
        className="w-full py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
      >
        챌린지 수정 저장
      </button>
      <button
        onClick={onDelete}
        className="w-full py-3 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-50 transition"
      >
        챌린지 삭제
      </button>
    </div>
  );
}
