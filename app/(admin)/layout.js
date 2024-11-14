import React from "react";
import { Footer, Header, Sidebar } from "./components";

export default function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full bg-slate-100 min-h-screen">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
