import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen scaffold-bg flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-[10rem] leading-none text-amber-500/20">404</p>
        <h1 className="font-display text-4xl md:text-5xl text-white tracking-wide mt-4 mb-3">
          PAGE NOT FOUND
        </h1>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-display text-xl tracking-widest px-8 py-4 transition-colors duration-200"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
