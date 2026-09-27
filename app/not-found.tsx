import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0c1013] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="font-display font-bold text-4xl mb-3">404 - Page Not Found</h2>
      <p className="text-slate-400 mb-6 text-sm max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-teal-400 text-[#0c1013] font-semibold text-sm hover:bg-teal-300 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
