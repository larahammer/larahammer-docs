import Link from 'next/link'
import CodeBlock from './components/CodeBlock'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Extra Dramatic */}
      <section className="hero-gradient text-white py-40 md:py-56 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDuration: '8s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDuration: '10s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDuration: '12s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-in-down mb-6 inline-block">
            <span className="text-7xl">🔨</span>
          </div>
          
          <h1 className="animate-slide-in-down text-white mb-6 leading-tight" style={{animationDelay: '0.1s'}}>
            Larahammer
          </h1>
          
          <p className="animate-fade-in-up text-4xl md:text-5xl font-black mb-8 text-white leading-tight max-w-5xl mx-auto" style={{animationDelay: '0.2s'}}>
            CRUD Scaffolding<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200">
              That Saves You Days
            </span>
          </p>
          
          <p className="animate-fade-in-up text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed" style={{animationDelay: '0.3s'}}>
            Generate migrations, models, controllers, views, factories, tests, and more with a single command. Production-ready code in seconds, not hours.
          </p>

          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/docs/getting-started" className="btn btn-primary text-lg font-bold flex items-center gap-2">
              <span>🚀</span> Start Building
            </Link>
            <a 
              href="https://github.com/larahammer/generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg font-bold flex items-center gap-2"
            >
              <span>⭐</span> GitHub
            </a>
          </div>

          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <p className="text-blue-200 text-sm mb-4">Trusted by Laravel developers worldwide</p>
            <div className="flex justify-center gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-black text-white">10x</div>
                <p className="text-blue-200 text-sm">Faster Development</p>
              </div>
              <div className="w-px h-12 bg-blue-300/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">100%</div>
                <p className="text-blue-200 text-sm">Production Ready</p>
              </div>
              <div className="w-px h-12 bg-blue-300/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">0</div>
                <p className="text-blue-200 text-sm">Configuration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview - Grid Style */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-lg font-bold mb-4">WHY DEVELOPERS LOVE LARAHAMMER</p>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Build Better. Faster. Smarter.
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to scaffold modern Laravel applications in one powerful package
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Generate complete CRUD in seconds. Save weeks of repetitive work.' },
              { icon: '🎯', title: 'Pick Your Stack', desc: 'Blade, Filament, REST APIs, or all three. Full control over your targets.' },
              { icon: '📦', title: 'Everything Included', desc: 'Migrations, models, controllers, views, factories, tests, and more.' },
              { icon: '🔒', title: 'Security Built-In', desc: 'Policies, RBAC, API auth, and authorization out of the box.' },
              { icon: '📊', title: 'Audit Logging', desc: 'Track every change with activity logging observers.' },
              { icon: '✨', title: 'Best Practices', desc: 'Clean code following Laravel conventions and industry standards.' },
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="feature-card group"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start - Bold Design */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-lg font-bold mb-4">GET STARTED IN 3 STEPS</p>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">
              No Configuration Needed
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Install the Package',
                code: 'composer require larahammer/generator',
                color: 'from-blue-600 to-cyan-600'
              },
              {
                step: '2',
                title: 'Generate Your CRUD',
                code: 'php artisan larahammer:make Product name:string price:decimal --all',
                color: 'from-purple-600 to-pink-600'
              },
              {
                step: '3',
                title: 'Run Migrations',
                code: 'php artisan migrate',
                color: 'from-pink-600 to-red-600'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-r ${item.color} rounded-2xl p-10 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300`}
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30">
                      <span className="text-3xl font-black">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <div className="bg-black/30 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                      <code className="text-white font-mono text-lg">{item.code}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-blue-50 border-2 border-blue-200 rounded-2xl text-center">
            <p className="text-2xl font-black text-blue-900 mb-4">✨ That's It!</p>
            <p className="text-lg text-blue-800">
              Your complete CRUD application with migrations, models, controllers, views, factories, tests, and everything else is ready to deploy.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-lg font-bold mb-4">COMPLETE TOOLKIT</p>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Everything Out of the Box
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '📋',
                title: 'Core Files',
                items: ['Database migration', 'Eloquent model', 'Form request validation', 'Database seeder', 'Routes']
              },
              {
                icon: '🎨',
                title: 'Views & Controllers',
                items: ['Blade views (CRUD)', 'Filament resource', 'REST API controller', 'Error handling', 'JSON resources']
              },
              {
                icon: '🔐',
                title: 'Security & Auth',
                items: ['Authorization policies', 'Role-based access', 'API authentication', 'Admin protection', 'CSRF tokens']
              },
              {
                icon: '🧪',
                title: 'Testing & More',
                items: ['Model factories', 'Feature tests', 'Activity logging', 'Soft deletes', 'Event listeners']
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 border border-gray-200 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-6">{section.icon}</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 text-lg">
                      <span className="text-2xl font-bold text-blue-600">✓</span>
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
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-lg font-bold mb-4">POWERFUL OPTIONS</p>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">
              Customize Everything
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-900 rounded-2xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">🎯 UI Targets</h3>
              <div className="space-y-4">
                <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-400/30 font-mono text-lg">--target=blade</div>
                <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-400/30 font-mono text-lg">--target=filament</div>
                <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-400/30 font-mono text-lg">--target=api</div>
                <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-400/30 font-mono text-lg">--target=all</div>
              </div>
            </div>

            <div className="bg-purple-900 rounded-2xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">⚙️ Advanced Features</h3>
              <div className="space-y-4">
                <div className="bg-purple-800/50 rounded-lg p-4 border border-purple-400/30 font-mono text-lg">--with-roles</div>
                <div className="bg-purple-800/50 rounded-lg p-4 border border-purple-400/30 font-mono text-lg">--with-admin</div>
                <div className="bg-purple-800/50 rounded-lg p-4 border border-purple-400/30 font-mono text-lg">--with-factories</div>
                <div className="bg-purple-800/50 rounded-lg p-4 border border-purple-400/30 font-mono text-lg">--all (everything!)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Dramatic */}
      <section className="hero-gradient text-white py-40 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
            Stop Scaffolding Manually
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join hundreds of Laravel developers who are shipping 10x faster with Larahammer
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/docs/getting-started" className="btn btn-primary text-xl font-bold">
              🚀 Start Now
            </Link>
            <Link href="/docs/features" className="btn btn-secondary text-xl font-bold">
              📚 Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
