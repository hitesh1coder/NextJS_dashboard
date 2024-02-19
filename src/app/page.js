import LeftNavBar from "@/Components/LeftNavBar";
import MainContainer from "@/Components/MainContainer/MainContainer";

export default function Home() {
  return (
    <main className="flex w-full h-screen items-center justify-between space-x-7 p-5">
      <LeftNavBar />
      <MainContainer />
    </main>
  );
}
