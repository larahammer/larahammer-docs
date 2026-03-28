'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-mono font-bold text-white hover:text-white no-underline tracking-tight">
          larahammer
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/docs/getting-started" className="text-sm text-zinc-400 hover:text-white transition-colors no-underline">
            Docs
          </Link>
          <Link href="/docs/features" className="text-sm text-zinc-400 hover:text-white transition-colors no-underline">
            Features
          </Link>
          <Link href="/docs/api-reference" className="text-sm text-zinc-400 hover:text-white transition-colors no-underline">
            API
          </Link>
          <Link href="/docs/faq" className="text-sm text-zinc-400 hover:text-white transition-colors no-underline">
            FAQ
          </Link>
        </div>

        <a 
          href="https://github.com/larahammer/generator" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-lg transition-all no-underline"
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}
