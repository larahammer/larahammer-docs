'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-white font-mono font-bold text-lg mb-3 tracking-tight">larahammer</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Complete CRUD scaffolding for Laravel applications. Production-ready code in seconds.
            </p>
          </div>
          <div>
            <h4 className="text-zinc-300 font-semibold text-sm uppercase tracking-wider mb-4">Documentation</h4>
            <ul className="space-y-3 list-none ml-0">
              <li className="mb-0"><Link href="/docs/getting-started" className="text-sm text-zinc-500 hover:text-white transition-colors no-underline">Getting Started</Link></li>
              <li className="mb-0"><Link href="/docs/features" className="text-sm text-zinc-500 hover:text-white transition-colors no-underline">Features</Link></li>
              <li className="mb-0"><Link href="/docs/api-reference" className="text-sm text-zinc-500 hover:text-white transition-colors no-underline">API Reference</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-300 font-semibold text-sm uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-3 list-none ml-0">
              <li className="mb-0"><a href="https://github.com/larahammer/generator" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-white transition-colors no-underline">GitHub</a></li>
              <li className="mb-0"><a href="https://packagist.org/packages/larahammer/generator" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-white transition-colors no-underline">Packagist</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-300 font-semibold text-sm uppercase tracking-wider mb-4">License</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">MIT License. Free for personal and commercial use.</p>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-zinc-600 mb-0">&copy; 2026 Larahammer. Built for Laravel developers.</p>
        </div>
      </div>
    </footer>
  )
}
