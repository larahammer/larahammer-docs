'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Larahammer</h3>
            <p className="text-sm text-gray-400">Complete CRUD scaffolding for Laravel applications.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Documentation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs/getting-started" className="text-gray-400 hover:text-white">Getting Started</Link></li>
              <li><Link href="/docs/features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="/docs/api-reference" className="text-gray-400 hover:text-white">API Reference</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/larahammer/generator" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">GitHub</a></li>
              <li><a href="https://packagist.org/packages/larahammer/generator" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Packagist</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">License</h4>
            <p className="text-sm text-gray-400">MIT License - Free for personal & commercial use</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Larahammer. Built for Laravel developers.</p>
        </div>
      </div>
    </footer>
  )
}
