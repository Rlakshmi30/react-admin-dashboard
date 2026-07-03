import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import type { LucideIcon } from 'lucide-react'
import type{ SparkPoint } from '../data'

type StatCardProps = {
  icon: LucideIcon
  label: string
  value: string
  change: string
  changeUp: boolean
  data: SparkPoint[]
  color: string 
}

export default function Linebar4({
  icon: Icon,
  label,
  value,
  change,
  changeUp,
  data,
  color,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-2 text-sm text-gray-500">
          <Icon size={16} />
          {label}
        </span>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            changeUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
          }`}
        >
          {changeUp ? '↗' : '↘'} {change}
        </span>
      </div>

      <p className="text-3xl font-bold text-gray-900 mb-4">{value}</p>

      <ResponsiveContainer width="100%" height={56}>
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill={color}
            fillOpacity={0.15}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
