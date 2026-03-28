import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata = {
  title: 'Larahammer Generator | Laravel CRUD Scaffolding',
  description: 'Complete CRUD scaffolding package for Laravel. Generate migrations, models, controllers, views, factories, tests, and more from a single command.',
  keywords: 'Laravel, CRUD, scaffolding, generator, Filament, API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
