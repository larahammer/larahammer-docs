'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          🔨 Larahammer
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link href="/docs/getting-started" className="text-gray-700 hover:text-blue-600 font-medium">
            Getting Started
          </Link>
          <Link href="/docs/features" className="text-gray-700 hover:text-blue-600 font-medium">
            Features
          </Link>
          <Link href="/docs/api-reference" className="text-gray-700 hover:text-blue-600 font-medium">
            API Reference
          </Link>
          <Link href="/docs/faq" className="text-gray-700 hover:text-blue-600 font-medium">
            FAQ
          </Link>
        </div>

        <a 
          href="https://github.com/larahammer/generator" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}
