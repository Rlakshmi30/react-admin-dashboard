import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Electronics", online: 43, store: 22 },
  { name: "Apparel", online: 38, store: 29 },
  { name: "Home", online: 32, store: 19 },
  { name: "Beauty", online: 28, store: 15 },
  { name: "Sports", online: 22, store: 12 },
  { name: "Books", online: 18, store: 8 },
];

export default function SalesByCategory() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">


      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-xl font-semibold">
            Sales by Category
          </h2>

          <p className="text-sm text-gray-500">
            Online vs In-store breakdown
          </p>
        </div>


        <div className="flex gap-5 text-sm">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#0A2A88]"></div>
            <span>Online</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
            <span>In-Store</span>
          </div>

        </div>

      </div>


      <div className="h-72 w-full">

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="online"
              stackId="a"
              fill="#0A2A88"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="store"
              stackId="a"
              fill="#C7D2FE"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}