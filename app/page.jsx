import Link from 'next/link'
import CodeBlock from './components/CodeBlock'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            🔨 Larahammer Generator
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Complete CRUD scaffolding for Laravel in seconds
          </p>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Generate migrations, models, controllers, views, factories, tests, and more from a single command. 
            Support for Blade, Filament, and REST APIs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/docs/getting-started" className="btn btn-primary text-lg">
              Get Started →
            </Link>
            <a 
              href="https://github.com/larahammer/generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Larahammer?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
              <p>Generate complete CRUD scaffolding in seconds, not hours. Save days of repetitive work.</p>
            </div>
            <div className="feature-card">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">Flexible Targets</h3>
              <p>Support for Blade views, Filament admin panels, and REST APIs. Choose what you need.</p>
            </div>
            <div className="feature-card">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold mb-2">Production Ready</h3>
              <p>Includes factories, migrations, soft deletes, policies, and testing - everything you need.</p>
            </div>
            <div className="feature-card">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-2">Security Built In</h3>
              <p>Role-based access control, authorization policies, and API authentication out of the box.</p>
            </div>
            <div className="feature-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-2">Audit & Logging</h3>
              <p>Track all activity changes with activity logging observer. Know who changed what.</p>
            </div>
            <div className="feature-card">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">Modern Stubs</h3>
              <p>Clean, well-organized code stubs following Laravel conventions and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Quick Start</h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">1. Install the Package</h3>
            <CodeBlock code="composer require larahammer/generator" language="bash" />

            <h3 className="text-2xl font-bold mb-4 mt-8">2. Generate Your CRUD</h3>
            <CodeBlock code="php artisan larahammer:make Product name:string price:decimal description:text --all" language="bash" />

            <h3 className="text-2xl font-bold mb-4 mt-8">3. Run Migrations</h3>
            <CodeBlock code="php artisan migrate" language="bash" />

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">
                ✨ <strong>That's it!</strong> Your complete CRUD application with migrations, models, controllers, 
                views, factories, tests, and more is ready to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Generated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What You Get</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span> Core Files
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Database migration</li>
                <li>✓ Eloquent model</li>
                <li>✓ Form request validation</li>
                <li>✓ Database seeder</li>
                <li>✓ Routes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎨</span> Views & Controllers
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Blade views (index, create, edit, show)</li>
                <li>✓ Filament resource & admin panel</li>
                <li>✓ REST API controller & resource</li>
                <li>✓ All with proper error handling</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🔐</span> Security & Auth
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Authorization policies</li>
                <li>✓ Role-based access control</li>
                <li>✓ API authentication middleware</li>
                <li>✓ Admin panel protection</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🧪</span> Testing & More
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Model factories with Faker</li>
                <li>✓ Feature & unit tests</li>
                <li>✓ Activity logging observer</li>
                <li>✓ Soft deletes support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* All Flags */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Available Options</h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-blue-600">UI Targets</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <code className="text-pink-600">--target=blade</code>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-pink-600">--target=filament</code>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-pink-600">--target=api</code>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-pink-600">--target=all</code>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-blue-600">Advanced Features</h3>
                <ul className="space-y-2 text-sm">
                  <li><code className="text-pink-600">--with-roles</code> - Role system</li>
                  <li><code className="text-pink-600">--with-admin</code> - Filament admin</li>
                  <li><code className="text-pink-600">--with-landing</code> - Landing page</li>
                  <li><code className="text-pink-600">--with-security-middleware</code> - RBAC</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-blue-600">Phase 2 Features</h3>
                <ul className="space-y-2 text-sm">
                  <li><code className="text-pink-600">--with-factories</code> - Model factories</li>
                  <li><code className="text-pink-600">--with-soft-deletes</code> - Soft delete support</li>
                  <li><code className="text-pink-600">--with-policies</code> - Authorization</li>
                  <li><code className="text-pink-600">--with-api-auth</code> - Sanctum auth</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-blue-600">Phase 3 & More</h3>
                <ul className="space-y-2 text-sm">
                  <li><code className="text-pink-600">--with-tests</code> - Tests suite</li>
                  <li><code className="text-pink-600">--with-audit-log</code> - Activity logging</li>
                  <li><code className="text-pink-600">--all</code> - Everything!</li>
                  <li><code className="text-pink-600">--force</code> - Overwrite files</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">
                💡 Use <code className="text-pink-600">--all</code> to generate all targets and all features with a single command!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scaffold Faster?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Learn everything about Larahammer in our comprehensive documentation
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/docs/getting-started" className="btn btn-secondary text-lg">
              Get Started
            </Link>
            <Link href="/docs/features" className="btn btn-secondary text-lg">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
