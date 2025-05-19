import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface DonutChartData {
  name: string;
  value: number;
  color?: string;
}

export function DonutChart({ data }: { data: DonutChartData[] }) {
  return (
    <div className="w-full aspect-square max-w-xs mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
