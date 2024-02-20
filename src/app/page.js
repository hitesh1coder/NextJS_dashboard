import LeftNavBar from "@/Components/LeftNavBar";
import Dashboard from "@/Components/Dashboard/Dashboard";

export default function Home() {
  return (
    <main className="flex w-full h-screen items-center justify-between space-x-7 p-3">
      <LeftNavBar />
      <Dashboard />
    </main>
  );
}
