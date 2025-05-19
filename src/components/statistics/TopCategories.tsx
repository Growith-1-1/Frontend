import { CategoryColor } from '@/constants/categories';

interface Category {
  name: string;
  value: number;
  color?: CategoryColor;
}

interface TopCategoriesProps {
  categories: Category[];
}

export function TopCategories({ categories }: TopCategoriesProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">TOP3 카테고리</h2>
      <div className="space-y-3">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium"
                style={{ backgroundColor: category.color }}
              >
                {index + 1}
              </div>
              <span className="ml-4">{category.name}</span>
            </div>
            <span className="title3">{category.value.toLocaleString()}원</span>
          </div>
        ))}
      </div>
    </div>
  );
}
