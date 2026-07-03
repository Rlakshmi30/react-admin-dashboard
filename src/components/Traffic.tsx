import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

type TrafficSource = {
  name: string;
  value: number;
  color: string;
};

const trafficSources: TrafficSource[] = [
  {
    name: "Organic Search",
    value: 38,
    color: "#6366F1",
  },
  {
    name: "Direct",
    value: 24,
    color: "#10B981",
  },
  {
    name: "Social Media",
    value: 18,
    color: "#F59E0B",
  },
  {
    name: "Email",
    value: 12,
    color: "#EC4899",
  },
  {
    name: "Referral",
    value: 8,
    color: "#06B6D4",
  },
];

export default function TrafficSources() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 w-[380px]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold">
            Traffic Sources
          </h2>
          <p className="text-sm text-gray-500">
            Where your visitors come from
          </p>
        </div>

        <button className="text-gray-400 text-xl font-bold hover:text-gray-600">
          ...
        </button>
      </div>


      <div className="relative h-60 w-full">

        <ResponsiveContainer width="100%" height="100%">
      <PieChart width={300} height={240}>
  <Pie
    data={trafficSources}
    dataKey="value"
    innerRadius={60}
    outerRadius={82}
  >
    {trafficSources.map((item) => (
      <Cell key={item.name} fill={item.color} />
    ))}
  </Pie>
</PieChart>
        </ResponsiveContainer>

      </div>


      <div className="space-y-3 mt-4">

        {trafficSources.map((item) => (

          <div
            key={item.name}
            className="flex justify-between items-center"
          >

            <div className="flex items-center gap-3">

              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />
              <span className="text-sm text-gray-600">
                {item.name}
              </span>
            </div>

            <span className="text-sm font-semibold text-gray-700">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}