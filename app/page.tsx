import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">
        College Parking Management System
      </h1>

      <div className="flex gap-4">
        <Link href="/sign-in" className="px-4 py-2 bg-black text-white">
          Sign In
        </Link>
        <Link href="/sign-up" className="px-4 py-2 border">
          Sign Up
        </Link>
      </div>
    </main>
  );
}
