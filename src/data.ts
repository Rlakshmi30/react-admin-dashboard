
export type SparkPoint = {
  value: number
}
export const revenueSpark: SparkPoint[] = [
  { value: 30 }, { value: 32 }, { value: 31 }, { value: 35 },
  { value: 33 }, { value: 38 }, { value: 40 }, { value: 39 },
  { value: 42 }, { value: 45 },
]

export const ordersSpark: SparkPoint[] = [
  { value: 20 }, { value: 21 }, { value: 19 }, { value: 22 },
  { value: 23 }, { value: 22 }, { value: 24 }, { value: 25 },
  { value: 24 }, { value: 26 },
]

export const customersSpark: SparkPoint[] = [
  { value: 10 }, { value: 12 }, { value: 11 }, { value: 14 },
  { value: 16 }, { value: 18 }, { value: 20 }, { value: 22 },
  { value: 24 }, { value: 28 },
]

export const aovSpark: SparkPoint[] = [
  { value: 40 }, { value: 39 }, { value: 41 }, { value: 38 },
  { value: 37 }, { value: 39 }, { value: 38 }, { value: 36 },
  { value: 37 }, { value: 35 },
]

export type RevenuePoint = {
  month: string
  revenue: number
  target: number
  lastYear: number
}

export const revenueOverview: RevenuePoint[] = [
  { month: 'Jan', revenue: 28000, target: 22000, lastYear: 18000 },
  { month: 'Feb', revenue: 32000, target: 25000, lastYear: 20000 },
  { month: 'Mar', revenue: 38000, target: 28000, lastYear: 23000 },
  { month: 'Apr', revenue: 45000, target: 32000, lastYear: 27000 },
  { month: 'May', revenue: 52000, target: 36000, lastYear: 30000 },
  { month: 'Jun', revenue: 58000, target: 40000, lastYear: 33000 },
  { month: 'Jul', revenue: 65000, target: 44000, lastYear: 36000 },
  { month: 'Aug', revenue: 72000, target: 48000, lastYear: 39000 },
  { month: 'Sep', revenue: 84632, target: 52000, lastYear: 42000 },
]


export type TrafficSource = {
  name: string
  value: number
  color: string
}

export const trafficSources: TrafficSource[] = [
  { name: 'Organic Search', value: 38, color: '#6366f1' },
  { name: 'Direct', value: 24, color: '#10b981' },
  { name: 'Social Media', value: 18, color: '#f59e0b' },
  { name: 'Email', value: 12, color: '#ec4899' },
  { name: 'Referral', value: 8, color: '#38bdf8' },
]

export type CategorySales = {
  category: string
  online: number
  inStore: number
}

export const categorySales: CategorySales[] = [
  { category: 'Electronics', online: 45, inStore: 22 },
  { category: 'Apparel', online: 40, inStore: 20 },
  { category: 'Home', online: 28, inStore: 14 },
  { category: 'Beauty', online: 25, inStore: 12 },
  { category: 'Sports', online: 16, inStore: 8 },
  { category: 'Books', online: 10, inStore: 5 },
]

export type Product = {
  rank: string
  name: string
  category: string
  sold: string
  amount: string
  change: string
  changeUp: boolean
}

export const topProducts: Product[] = [
  { rank: '01', name: 'Wireless Noise-Cancel Headphones', category: 'Electronics', sold: '1,284 sold', amount: '$89,880', change: '+12.4%', changeUp: true },
  { rank: '02', name: 'Organic Cotton Hoodie', category: 'Apparel', sold: '982 sold', amount: '$49,100', change: '+8.2%', changeUp: true },
  { rank: '03', name: 'Smart Fitness Watch Pro', category: 'Electronics', sold: '847 sold', amount: '$76,230', change: '-3.1%', changeUp: false },
  { rank: '04', name: 'Ceramic Plant Pot Set', category: 'Home', sold: '623 sold', amount: '$18,690', change: '+24.7%', changeUp: true },
  { rank: '05', name: 'Vitamin C Serum 30ml', category: 'Beauty', sold: '591 sold', amount: '$23,640', change: '+15.3%', changeUp: true },
]

export type Order = {
  id: string
  customer: string
  email: string
  product: string
  amount: string
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Pending'
}

export const recentOrders: Order[] = [
  {
    id: "#1021",
    customer: "Shreya Sinha",
    email:"Shreya@gmail.com",
    product: "Wireless Headphones",
    amount: "$4,299",
    status: "Delivered",
  },
  {
    id: "#1021",
    customer: "Ripu Daman",
    email:"Ripu@gmail.com",
    product: "Smart Watch Pro",
    amount: "$8,990",
    status: "Processing",
  },
  {
    id: "#1021",
    customer: "Shrishti",
    email:"Shrishti@gmail.com",
    product: "Cotton Hoodie",
    amount: "$2,499",
    status: "Shipped",
  },
  {
    id: "#1021",
    customer: "Shingar Singh",
    email:"Shingar@gmail.com",
    product: "Plant Pot Set",
    amount: "$1,899",
    status: "Delivered",
  },
  {
    id: "#1021",
    customer: "Palak Aggrawal",
    email:"Palak@gmail.com",
    product: "Bluetooth Speaker",
    amount: "$1,299",
    status: "Pending",
  },
  {
    id: "#1021",
    customer: "Karan",
    email:"Karan@gmail.com",
    product: "Fitness Watch",
    amount: "$7,899",
    status: "Delivered",
  },
];


export type LocationStat = {
  country: string
  flag: string
  count: string
  percent: number 
}

export const TopLocation: LocationStat[] = [
  { country: 'United States', flag: '🇺🇸', count: '12,840 · 32.5%', percent: 100 },
  { country: 'India', flag: '🇮🇳', count: '8,920 · 22.6%', percent: 70 },
  { country: 'United Kingdom', flag: '🇬🇧', count: '4,210 · 10.7%', percent: 33 },
  { country: 'Germany', flag: '🇩🇪', count: '3,180 · 8%', percent: 25 },
  { country: 'Australia', flag: '🇦🇺', count: '2,840 · 7.2%', percent: 22 },
  { country: 'Canada', flag: '🇨🇦', count: '2,120 · 5.4%', percent: 16 },
]
