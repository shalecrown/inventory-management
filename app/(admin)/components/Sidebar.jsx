"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BaggageClaim,
  Blocks,
  Bolt,
  Folder,
  House,
  ShoppingBag,
  ShoppingCart,
  Signal,
} from "lucide-react";

// Static links array
const links = [
  { href: "/admin-panel/home", label: "Home", icon: House },
  { href: "/admin-panel/inventory", label: "Inventory", icon: BaggageClaim },
  { href: "/admin-panel/sales", label: "Sales", icon: ShoppingCart },
  { href: "/admin-panel/purchases", label: "Purchases", icon: ShoppingBag },
  { href: "/admin-panel/integrations", label: "Integrations", icon: Blocks },
  { href: "/admin-panel/reports", label: "Reports", icon: Signal },
  { href: "/admin-panel/documents", label: "Documents", icon: Folder },
];

// SidebarLink component for individual link rendering
const SidebarLink = ({ href, label, icon: Icon, isActive }) => {
  return (
    <Link
      href={href}
      className={`${
        isActive ? "bg-blue-600" : ""
      } flex items-center gap-2 rounded-md px-2 py-2`}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="w-4 h-4" />
      {label}
    </Link>
  );
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 w-56 min-h-screen bg-slate-900 text-slate-50">
      <div className="flex gap-2 py-2 border-b border-slate-300/20 px-2">
        <Bolt className="w-8 h-8" />
        <span className="font-semibold text-2xl">IMS</span>
      </div>
      <div className="p-2">
        {links.map(({ href, label, icon }, index) => {
          const isActive = pathname === href;
          return (
            <SidebarLink
              key={index}
              href={href}
              label={label}
              icon={icon}
              isActive={isActive}
            />
          );
        })}
      </div>
    </div>
  );
}
