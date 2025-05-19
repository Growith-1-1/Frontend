interface MyChallengeCardProps {
  title: string;
  progress: number;
  goal: number;
  daysLeft?: number;
  isCompleted?: boolean;
  isFailed?: boolean;
}

export function MyChallengeCard({
  title,
  progress,
  goal,
  daysLeft,
  isCompleted,
  isFailed,
}: MyChallengeCardProps) {
  const progressPercentage = Math.min(100, (progress / goal) * 100);

  let statusColor = 'bg-green-500';
  let statusIcon = '✓';

  if (isFailed) {
    statusColor = 'bg-red-500';
    statusIcon = '!';
  }

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="text-gray-500 text-sm">
          {daysLeft && `${daysLeft}일 남았어요`}
        </div>
        <div className="flex items-center">
          <span className="text-green-500 font-medium">
            {progress.toLocaleString()}원
          </span>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-400">{goal.toLocaleString()}원</span>
        </div>
      </div>

      <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div
        className={`mt-2 p-4 rounded-lg ${isCompleted ? 'bg-green-100' : isFailed ? 'bg-red-100' : 'bg-white'} shadow-sm`}
      >
        {(isCompleted || isFailed) && (
          <div
            className={`float-right w-6 h-6 rounded-full ${statusColor} text-white flex items-center justify-center text-xs`}
          >
            {statusIcon}
          </div>
        )}
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {isCompleted
            ? '챌린지를 성공했어요'
            : isFailed
              ? '챌린지를 실패했어요'
              : '진행 중인 챌린지'}
        </p>
      </div>
    </div>
  );
}
