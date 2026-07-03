import Topbar from "../components/SearchBar";
import Greeting from "../components/Greetings";
import StatsGrid from "../components/Linebar4";
import RevenueOverview from "../components/RevenueOverview";
import TrafficSources from "../components/Traffic";
import SalesByCategory from "../components/SalesByCategory";
import TopProducts from "../components/TopProducts";
import RecentOrders from "../components/RecentOrders";
import TopLocations from "../components/TopLocation";

export default function Dashboard() {
  return (
    <main className="px-4 md:px-6 lg:px-8 py-6">
      <Topbar />
      <Greeting />
      <StatsGrid />

      <div className="flex gap-6 mb-6">
        <RevenueOverview />
        <TrafficSources />
      </div>

      <SalesByCategory />
      <TopProducts />

      <div className="flex gap-6 mb-6">
        <RecentOrders />
        <TopLocations />
      </div>

      <p className="text-center text-xs text-gray-400 pb-6">
        Saga Commerce Dashboard · Reference Design
      </p>
    </main>
  );
}