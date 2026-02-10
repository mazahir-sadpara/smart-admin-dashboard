import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ open, toggle }) => {
  const location = useLocation();

  const menuItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      path: "/users",
      label: "Users",
      icon: Users,
    },
  ];

  return (
    <aside
      className={`h-screen bg-slate-900 border-r border-slate-800 transition-all duration-300
      ${open ? "w-64" : "w-20"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5">
        <span
          className={`text-white font-semibold text-lg tracking-wide transition-all ${
            open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
          }`}
        >
          Admin Panel
        </span>

        <button
          onClick={toggle}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-indigo-500 hover:text-white transition"
        >
          {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-1 px-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center gap-3 px-3 py-3 rounded-xl transition-all
              ${
                isActive
                  ? "bg-indigo-500 text-white shadow-md"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {/* Icon */}
              <Icon
                size={20}
                className={`shrink-0 ${
                  isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                }`}
              />

              {/* Label */}
              {open && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
