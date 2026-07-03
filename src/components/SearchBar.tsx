import { Search, Bell, Calendar } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">

      <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5">

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search orders, products, customers..."
          className="w-full sm:flex-1 outline-none text-sm placeholder:text-gray-400"
        />
      </div>

      <button className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200">

        <Bell
          size={18}
          className="text-gray-500"
        />

        <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>

      </button>

      <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700">

        <Calendar size={16} />

        Last 30 days

      </button>

    </div>
  );
}