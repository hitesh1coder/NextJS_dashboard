import LeftNavBar from "@/Components/LeftNavBar";
import Dashboard from "@/Components/Dashboard/Dashboard";

export default function Home() {
  return (
    <main className="md:flex w-full md:h-screen items-center justify-between md:space-x-7 md:px-3 py-2">
      <LeftNavBar />
      <Dashboard />
    </main>
  );
}
