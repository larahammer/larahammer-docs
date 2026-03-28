import CodeBlock from '@/app/components/CodeBlock'
import Link from 'next/link'

export const metadata = {
  title: 'FAQ - Larahammer',
  description: 'Frequently asked questions and troubleshooting for Larahammer Generator',
}

export default function FAQ() {
  const faqs = [
    {
      q: "What versions of Laravel does Larahammer support?",
      a: "Larahammer supports Laravel 10, 11, 12, and 13. It requires PHP 8.1 or higher."
    },
    {
      q: "Can I use Larahammer with an existing project?",
      a: "Yes! Larahammer can be added to any existing Laravel project. You can start scaffolding new features whenever you need them."
    },
    {
      q: "Do I need to install Filament to use Larahammer?",
      a: "No, Filament is optional. If you don't use the --target=filament or --with-admin flags, Filament is not required. However, if you want those features, Filament v3 must be installed in your project."
    },
    {
      q: "What happens if I generate the same model twice?",
      a: "By default, Larahammer will ask for confirmation before overwriting existing files. Use --force flag to overwrite without asking: php artisan larahammer:make Product --force"
    },
    {
      q: "Can I customize the generated stubs?",
      a: "Yes! Publish the stubs directory and customize them: php artisan vendor:publish --provider='Larahammer\\Generator\\GeneratorServiceProvider' --tag=stubs"
    },
    {
      q: "What field types are supported?",
      a: "All Laravel migration field types are supported: string, text, integer, boolean, date, datetime, decimal, enum, json, longText, mediumText, uuid, smallIncrements, bigInteger, etc."
    },
    {
      q: "Does --all generate everything at once?",
      a: "Yes! The --all flag generates all 3 targets (Blade, Filament, API) plus all 12 advanced features (roles, landing, admin, security middleware, factories, soft deletes, policies, API auth, tests, audit logging, etc.)"
    },
    {
      q: "How do I set a default target?",
      a: "Publish the config file and set default_target: php artisan vendor:publish --provider='Larahammer\\Generator\\GeneratorServiceProvider' --tag=config"
    },
    {
      q: "Can I mix Blade and Filament in the same project?",
      a: "Yes! Use --target=all to generate both. They work seamlessly together in the same project."
    },
    {
      q: "What testing framework does Larahammer use?",
      a: "Larahammer generates tests using Laravel's PHPUnit testing framework (pest is also compatible)."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1>Frequently Asked Questions</h1>
      <p className="text-gray-600 text-lg mb-8">
        Find answers to common questions about Larahammer Generator.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <details key={idx} className="border border-gray-200 rounded-lg p-6 group cursor-pointer hover:bg-gray-50 transition-colors">
            <summary className="font-semibold text-lg flex justify-between items-center list-none">
              <span>{faq.q}</span>
              <span className="text-xl group-open:rotate-180 transition-transform">▶</span>
            </summary>
            <p className="text-gray-600 mt-4 ml-4">{faq.a}</p>
          </details>
        ))}
      </div>

      <h2 className="mt-12">Troubleshooting</h2>

      <div className="space-y-8 my-8">
        <div className="border-l-4 border-red-600 pl-6">
          <h3 className="text-xl font-bold mb-2">❌ "Namespace not found" error</h3>
          <p className="text-gray-600 mb-4">Make sure to run composer install and check that the package is properly registered.</p>
          <CodeBlock code="composer install && php artisan list" language="bash" />
        </div>

        <div className="border-l-4 border-red-600 pl-6">
          <h3 className="text-xl font-bold mb-2">❌ Migration not found after generation</h3>
          <p className="text-gray-600 mb-4">Make sure you ran the migration and check the database/migrations folder:</p>
          <CodeBlock code="php artisan migrate && php artisan migrate:status" language="bash" />
        </div>

        <div className="border-l-4 border-red-600 pl-6">
          <h3 className="text-xl font-bold mb-2">❌ Views not showing after generation</h3>
          <p className="text-gray-600 mb-4">Check that routes are properly registered and the app.blade.php layout exists:</p>
          <CodeBlock code="php artisan route:list | grep -i product" language="bash" />
        </div>

        <div className="border-l-4 border-red-600 pl-6">
          <h3 className="text-xl font-bold mb-2">❌ Filament resource not appearing</h3>
          <p className="text-gray-600 mb-4">Make sure Filament is installed and the resource is registered in your AdminPanelProvider:</p>
          <CodeBlock code="composer require filament/filament" language="bash" />
        </div>

        <div className="border-l-4 border-red-600 pl-6">
          <h3 className="text-xl font-bold mb-2">❌ API routes returning 404</h3>
          <p className="text-gray-600 mb-4">Check that API routes are properly registered in routes/api.php and middleware is applied:</p>
          <CodeBlock code="php artisan route:list --path=api" language="bash" />
        </div>

        <div className="border-l-4 border-red-600 pl-6">
          <h3 className="text-xl font-bold mb-2">❌ Tests failing after generation</h3>
          <p className="text-gray-600 mb-4">Ensure your database is set up for testing and migrations run:</p>
          <CodeBlock code="php artisan test" language="bash" />
        </div>
      </div>

      <h2>Performance Questions</h2>

      <div className="space-y-6 my-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">⚡ How long does generation take?</h3>
          <p className="text-gray-600">
            Generation typically takes less than 1 second. The --all flag generates 80+ files but still completes in under 2 seconds.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">📦 Will generated code impact performance?</h3>
          <p className="text-gray-600">
            No. Generated code follows Laravel best practices and has zero performance impact. Generated models use appropriate indexes in migrations.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🔄 Can I regenerate a model?</h3>
          <p className="text-gray-600">
            Yes. Use --force to overwrite existing code. It's safe to regenerate - existing data won't be affected. Just re-run migrations if the schema changed.
          </p>
        </div>
      </div>

      <h2>Getting Help</h2>
      
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
          <h3 className="font-bold text-lg mb-2">🐙 GitHub Issues</h3>
          <p className="text-gray-600 mb-4">Found a bug? Report it on GitHub:</p>
          <a 
            href="https://github.com/larahammer/generator/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Report an Issue →
          </a>
        </div>

        <div className="border border-green-200 rounded-lg p-6 bg-green-50">
          <h3 className="font-bold text-lg mb-2">📚 Documentation</h3>
          <p className="text-gray-600 mb-4">Check out our comprehensive docs:</p>
          <Link href="/docs/api-reference" className="text-green-600 hover:text-green-800 font-semibold">
            API Reference →
          </Link>
        </div>

        <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
          <h3 className="font-bold text-lg mb-2">📖 Source Code</h3>
          <p className="text-gray-600 mb-4">Explore the package source:</p>
          <a 
            href="https://github.com/larahammer/generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 font-semibold"
          >
            View on GitHub →
          </a>
        </div>

        <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
          <h3 className="font-bold text-lg mb-2">📦 Packagist</h3>
          <p className="text-gray-600 mb-4">Install and version history:</p>
          <a 
            href="https://packagist.org/packages/larahammer/generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-800 font-semibold"
          >
            View on Packagist →
          </a>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
        <h3 className="font-bold text-lg mb-2">💬 Found the answer?</h3>
        <p className="text-gray-700">
          Great! Now check out the <Link href="/docs/getting-started" className="text-blue-600 hover:text-blue-800 font-semibold">Getting Started</Link> guide 
          to scaffold your first project.
        </p>
      </div>
    </div>
  )
}
