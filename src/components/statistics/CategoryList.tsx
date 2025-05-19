import { CategoryColor } from '@/constants/categories';

interface Category {
  name: string;
  value: number;
  color: CategoryColor;
}

interface StatsDataProps {
  statsData: Category[];
}

export function CategoryList({ statsData }: StatsDataProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">전체 카테고리</h2>
      <div className="space-y-2">
        {statsData.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: category.color }}
              ></div>
              <span>{category.name}</span>
            </div>
            <span className="font-semibold">
              {category.value.toLocaleString()}원
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
