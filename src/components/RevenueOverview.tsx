import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { MoreHorizontal } from 'lucide-react'
import { revenueOverview } from '../data'

export default function RevenueOverview() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex-1">
      <div className="flex items-start justify-between mb-1">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Revenue Overview</h2>
          <p className="text-sm text-gray-400">Monthly revenue vs target vs last year</p>
        </div>
        <MoreHorizontal size={18} className="text-gray-400 mt-1" />
      </div>

      <div className="flex items-center gap-4 my-4 text-xs text-gray-600">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-500" /> Revenue
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gray-300" /> Target
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" /> Last Year
        </span>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={revenueOverview}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
          <YAxis
            axisLine={false}
            tickLine={false}
            fontSize={12}
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#cbd5e1"
            strokeWidth={1.5}
            strokeDasharray="3 3"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#10b981"
            strokeWidth={1.5}
            strokeDasharray="5 3"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
