import { getHelloMessage } from "@/lib/hello";

export default async function Home() {
  const data = getHelloMessage();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black w-full">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center px-6 bg-white dark:bg-black sm:px-16">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {data.message}
        </h1>
      </main>
    </div>
  );
}
