import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black h-screen overflow-hidden">
        <main className="">
          <Sidebar />
          {/* Center */}
        </main>
        <div>{/* Player */}</div>
      </div>
    </div>
  );
}
