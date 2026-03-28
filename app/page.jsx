import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-32 md:py-44 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6">
            <span className="badge badge-primary">Laravel CRUD Generator</span>
          </div>
          
          <h1 className="text-white mb-6">
            larahammer
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-zinc-300 max-w-3xl mx-auto leading-snug">
            Scaffold production-ready CRUD<br />
            <span className="text-gradient">in a single command.</span>
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Migrations, models, controllers, views, factories, tests — everything generated and ready to deploy. Stop writing boilerplate.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Link href="/docs/getting-started" className="btn btn-primary text-base">
              Get Started
            </Link>
            <a 
              href="https://github.com/larahammer/generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary text-base"
            >
              View on GitHub
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-zinc-800">
              <div className="bg-zinc-800/50 text-zinc-500 px-4 py-2 text-xs font-mono border-b border-zinc-800">
                terminal
              </div>
              <div className="bg-zinc-900 p-5 text-left">
                <code className="text-sm text-zinc-300 font-mono bg-transparent border-0 p-0">
                  <span className="text-zinc-500">$</span> php artisan larahammer:make Product name:string price:decimal --all
                </code>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center gap-12 items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-mono">10x</div>
              <p className="text-zinc-500 text-sm mb-0">Faster</p>
            </div>
            <div className="w-px h-10 bg-zinc-800"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-mono">100%</div>
              <p className="text-zinc-500 text-sm mb-0">Production Ready</p>
            </div>
            <div className="w-px h-10 bg-zinc-800"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-mono">0</div>
              <p className="text-zinc-500 text-sm mb-0">Config Needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">Why Larahammer</p>
            <h2 className="text-white">
              Build better. Ship faster.
            </h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              Everything you need to scaffold modern Laravel applications in one powerful package.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Lightning Fast', desc: 'Generate complete CRUD in seconds. Save weeks of repetitive boilerplate work.' },
              { title: 'Pick Your Stack', desc: 'Blade, Filament, REST APIs, or all three. Full control over your targets.' },
              { title: 'Everything Included', desc: 'Migrations, models, controllers, views, factories, tests — all generated.' },
              { title: 'Security Built-In', desc: 'Policies, RBAC, API auth, and authorization configured out of the box.' },
              { title: 'Audit Logging', desc: 'Track every change with observer-based activity logging.' },
              { title: 'Best Practices', desc: 'Clean code following Laravel conventions and industry standards.' },
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="feature-card"
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-0">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-28 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">Get Started in 3 Steps</p>
            <h2 className="text-white">
              No configuration needed.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Install the package',
                code: 'composer require larahammer/generator',
              },
              {
                step: '02',
                title: 'Generate your CRUD',
                code: 'php artisan larahammer:make Product name:string price:decimal --all',
              },
              {
                step: '03',
                title: 'Run migrations',
                code: 'php artisan migrate',
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-zinc-900/80 rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-zinc-600 font-mono text-sm font-bold">{item.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                    <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
                      <code className="text-zinc-300 font-mono text-sm bg-transparent border-0 p-0">
                        <span className="text-zinc-600">$</span> {item.code}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
            <p className="text-lg font-semibold text-zinc-300 mb-2">That's it.</p>
            <p className="text-zinc-500 mb-0">
              Your complete CRUD application with migrations, models, controllers, views, factories, and tests is ready to deploy.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-28 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">Complete Toolkit</p>
            <h2 className="text-white">
              Everything out of the box.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Core Files',
                items: ['Database migration', 'Eloquent model', 'Form request validation', 'Database seeder', 'Route definitions']
              },
              {
                title: 'Views & Controllers',
                items: ['Blade views (CRUD)', 'Filament resource', 'REST API controller', 'Error handling', 'JSON resources']
              },
              {
                title: 'Security & Auth',
                items: ['Authorization policies', 'Role-based access', 'API authentication', 'Admin protection', 'CSRF tokens']
              },
              {
                title: 'Testing & More',
                items: ['Model factories', 'Feature tests', 'Activity logging', 'Soft deletes', 'Event listeners']
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800">
                <h3 className="text-xl font-bold mb-5 text-white">{section.title}</h3>
                <ul className="space-y-3 list-none ml-0">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm mb-0">
                      <span className="text-blue-400 text-xs">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flags & Options */}
      <section className="py-28 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">Powerful Options</p>
            <h2 className="text-white">
              Customize everything.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/80 rounded-xl p-8 border border-zinc-800">
              <h3 className="text-xl font-bold mb-6 text-white">UI Targets</h3>
              <div className="space-y-3">
                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-sm text-zinc-400">--target=blade</div>
                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-sm text-zinc-400">--target=filament</div>
                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-sm text-zinc-400">--target=api</div>
                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-sm text-zinc-400">--target=all</div>
              </div>
            </div>

            <div className="bg-zinc-900/80 rounded-xl p-8 border border-zinc-800">
              <h3 className="text-xl font-bold mb-6 text-white">Advanced Features</h3>
              <div className="space-y-3">
                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-sm text-zinc-400">--with-roles</div>
                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-sm text-zinc-400">--with-admin</div>
                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-sm text-zinc-400">--with-factories</div>
                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-sm text-zinc-400">--all</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-28 relative border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stop scaffolding manually.
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of Laravel developers shipping 10x faster with Larahammer.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/docs/getting-started" className="btn btn-primary">
              Get Started
            </Link>
            <Link href="/docs/features" className="btn btn-secondary">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
