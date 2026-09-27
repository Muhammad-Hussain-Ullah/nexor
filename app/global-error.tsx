'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0c1013] text-white flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h2 className="font-display font-bold text-3xl mb-3">Something went wrong</h2>
        <p className="text-slate-400 mb-6 text-sm">A global application error occurred.</p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-xl bg-teal-400 text-[#0c1013] font-semibold text-sm hover:bg-teal-300 transition-colors"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
