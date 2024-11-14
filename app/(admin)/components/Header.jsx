import {
  Bell,
  ChevronDown,
  History,
  Plus,
  Settings,
  User2,
  Users2,
} from "lucide-react";
import React from "react";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 h-12 bg-slate-100">
      <div className="flex gap-3">
        <button>
          <History className="w-6 h-6" />
        </button>
        <HeaderSearch />
      </div>
      <div className="flex items-center gap-3">
        <div className="pr-2 border-r border-gray-300">
          <button className="bg-blue-600 p-1 rounded-md">
            <Plus className="text-slate-50 w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-2 px-2 border-r border-gray-300">
          <button className="hover:bg-slate-200 p-1 rounded-md">
            <Users2 className="text-slate-900 w-4 h-4" />
          </button>
          <button className="hover:bg-slate-200 p-1 rounded-md">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
          <button className="hover:bg-slate-200 p-1 rounded-md">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-6">
          <button className="flex items-center gap-1 hover:bg-slate-200 p-1 rounded-md">
            <span>ORG</span>
            <ChevronDown className="text-slate-900 w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
