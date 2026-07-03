import { TrendingUp, ShoppingBag, Users, CreditCard, ShoppingBagIcon } from 'lucide-react'
import StatCard from './LinebarBox'
import { revenueSpark, ordersSpark, customersSpark, aovSpark } from '../data'

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StatCard
        icon={TrendingUp}
        label="Total Revenue"
        value="$84,632"
        change="12.4%"
        changeUp={true}
        data={revenueSpark}
        color="#2E1437"
      />
      <StatCard
        icon={ShoppingBag}
        label="Orders"
        value="1,847"
        change="8.2%"
        changeUp={true}
        data={ordersSpark}
        color="#185a9d"
      />
      <StatCard
        icon={Users}
        label="New Customers"
        value="394"
        change="24.7%"
        changeUp={true}
        data={customersSpark}
        color="#A83279"
      />
      <StatCard
        icon={CreditCard}
        label="Avg. Order Value"
        value="$45.82"
        change="2.1%"
        changeUp={false}
        data={aovSpark}
        color="#FFA17F"
      />
    </div>
  )
}
