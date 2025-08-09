import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-28 text-center">
      <h1 className="text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 text-white/70">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-flex rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20">Go home</Link>
    </main>
  );
} 