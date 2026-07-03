import {
  LayoutGrid,
  BarChart,
  ShoppingBag,
  Package,
  Users,
  CreditCard,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavItem = {
  label: string;
  icon: ComponentType<LucideProps>;
  active?: boolean;
  path: string;
  badge?: number;
};

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutGrid, active: true, path:"/" },
  { label: "Analytics", icon: BarChart, path:"analytics" },
  { label: "Orders", icon: ShoppingBag, badge: 12, path:"orders" },
  { label: "Products", icon: Package, path:"products" },
  { label: "Customers", icon: Users, path:"customers" },
  { label: "Payments", icon: CreditCard, path:"payments" },
  { label: "Reports", icon: FileText, path:"reports" },
];

export default function Sidebar() {
  return (
      <aside className="w-full lg:w-64 shrink-0 bg-[#16161a] text-gray-300 flex flex-col lg:h-screen">

      <div className="flex items-center gap-3 px-6 py-6">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
          S
        </div>
        <span className="text-white text-lg font-semibold">DashBoard</span>
      </div>

      <div className="px-4">
        <p className="px-3 text-xs font-medium text-gray-500 tracking-wider mb-2">
          WORKSPACE
        </p>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            

            return (
              <NavLink
  key={item.label}
  to={item.path}
  className={({ isActive }) =>
    `flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
      isActive
        ? "bg-white/10 text-white"
        : "hover:bg-white/5 hover:text-white"
    }`
  }
>
  <span className="flex items-center gap-3">
    <Icon size={18} />
    {item.label}
  </span>

  {item.badge && (
    <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full">
      {item.badge}
    </span>
  )}
</NavLink>
            
            );
          })}
        </nav>
      </div>

      <div className="flex-1" />


      <div className="px-4 pb-2">
        <NavLink 
        to = "/settings"
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm w-full hover:bg-white/5 hover:text-white">
          <Settings size={18} />
          Settings
        </NavLink>

        <NavLink 
        to = "/help"
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm w-full hover:bg-white/5 hover:text-white">
          <HelpCircle size={18} />
          Help &amp; Docs
        </NavLink>
      </div>

      <div className="flex items-center gap-3 px-6 py-4 border-t border-white/10">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-sm font-semibold">
          A
        </div>

        <div className="flex-1">
          <p className="text-sm text-white font-medium">
            Shrishti
          </p>

          <p className="text-xs text-gray-500">
            Admin
          </p>
        </div>

        <LogOut size={16} className="text-gray-500" />
      </div>
    </aside>
  );
}