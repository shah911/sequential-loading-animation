import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loading Animation</title>
      </Head>
      <main className="flex items-center justify-center w-full h-screen">
        <h1 className="text-[5vw] tracking-[0.3em] uppercase font-semibold">
          Loading animation
        </h1>
      </main>
    </>
  );
}
