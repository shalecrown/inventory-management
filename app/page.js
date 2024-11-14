import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center justify-center min-h-screen">
      <h2 className="text-3xl">Inventory Management</h2>
      <Link href="/admin-panel/home/overview">Dashboard</Link>
    </main>
  );
}
