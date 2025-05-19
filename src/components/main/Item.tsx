import React from 'react';

export interface ChallengeItemProps {
  title: string;
  progress: number;
  daysLeft: number;
}

export const ChallengeItem: React.FC<ChallengeItemProps> = ({
  title,
  progress,
  daysLeft,
}) => {
  return (
    <div className="bg-white rounded-lg p-3.5 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-green-500">✓</span>
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <div className="w-32 bg-gray-200 rounded-full h-1.5 mt-1">
            <div
              className="bg-green-400 h-1.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      <span className="text-gray-500">D-{daysLeft}</span>
    </div>
  );
};
