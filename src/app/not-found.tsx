import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-block"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 rounded-lg border border-cyan-500/50 text-white font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-block"
          >
            View Projects
          </Link>
        </div>

        {/* Illustration */}
        <div className="mt-12 text-6xl">🔍</div>
      </div>
    </div>
  );
}
