import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 sm:p-24">
      <div className="flex w-full flex-col gap-3 text-center md:w-7/12">
        <h1 className="text-3xl font-bold ">
          Welcome to Ethan Amato&apos;s Website Copy Hub
        </h1>
        <p className="text-xl">
          Here, you&apos;ll find all of my practice attempting to copy modern
          websites from their layout to their animations and responsive
          design...
        </p>
      </div>
      <div className="flex flex-wrap justify-around md:gap-12">
        <Link href={"/blog"}>
          <button className="rounded-lg border border-slate-200 bg-black px-4 py-2 font-bold tracking-widest text-white transition-colors duration-700 hover:bg-slate-400 hover:text-black">
            Blog!
          </button>
        </Link>
        <Link href={"/sites"}>
          <button className="rounded-lg border border-slate-200 bg-black px-4 py-2 font-bold tracking-widest text-white transition-colors duration-700 hover:bg-slate-400 hover:text-black">
            See the Sites!
          </button>
        </Link>
      </div>
      <div className="flex w-full flex-col gap-3 text-center md:w-7/12">
        <p className="text-xl">
          This website was created using modern web development technologies
          including:
        </p>
        <ul className="flex flex-wrap justify-center">
          <li className="flex h-20 w-40 cursor-pointer items-center justify-center border p-3 transition-colors duration-700 hover:bg-slate-600 hover:text-white">
            Next.js App Router
          </li>
          <li className="flex h-20 w-40 cursor-pointer items-center justify-center border p-3 transition-colors duration-700 hover:bg-slate-600 hover:text-white">
            React Server Components
          </li>
          <li className="flex h-20 w-40 cursor-pointer items-center justify-center border p-3 transition-colors duration-700 hover:bg-slate-600 hover:text-white">
            TailwindCSS
          </li>
          <li className="flex h-20 w-40 cursor-pointer items-center justify-center border p-3 transition-colors duration-700 hover:bg-slate-600 hover:text-white">
            ShadCN/UI
          </li>
        </ul>
      </div>
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
      <CrudShowcase />
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  return <div className="w-full max-w-xs text-center">Welcome, {session.user.name}</div>;
}
