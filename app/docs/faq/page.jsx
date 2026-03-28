import CodeBlock from '../../components/CodeBlock'
import Link from 'next/link'

export const metadata = {
  title: 'FAQ — Larahammer',
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
      a: "Larahammer generates tests using Laravel's PHPUnit testing framework (Pest is also compatible)."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 docs-content">
      <h1>Frequently Asked Questions</h1>
      <p className="text-zinc-400 text-lg mb-10">
        Find answers to common questions about Larahammer Generator.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 group cursor-pointer hover:border-zinc-700 transition-colors">
            <summary className="font-semibold text-base flex justify-between items-center list-none text-zinc-200">
              <span>{faq.q}</span>
              <span className="text-zinc-600 text-sm ml-4 flex-shrink-0 group-open:rotate-90 transition-transform">&#9654;</span>
            </summary>
            <p className="text-zinc-500 text-sm mt-4 mb-0 leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>

      <h2>Troubleshooting</h2>

      <div className="space-y-4 my-8">
        {[
          {
            title: '"Namespace not found" error',
            desc: 'Make sure to run composer install and check that the package is properly registered.',
            code: 'composer install && php artisan list'
          },
          {
            title: 'Migration not found after generation',
            desc: 'Make sure you ran the migration and check the database/migrations folder:',
            code: 'php artisan migrate && php artisan migrate:status'
          },
          {
            title: 'Views not showing after generation',
            desc: 'Check that routes are properly registered and the app.blade.php layout exists:',
            code: 'php artisan route:list | grep -i product'
          },
          {
            title: 'Filament resource not appearing',
            desc: 'Make sure Filament is installed and the resource is registered in your AdminPanelProvider:',
            code: 'composer require filament/filament'
          },
          {
            title: 'API routes returning 404',
            desc: 'Check that API routes are properly registered in routes/api.php and middleware is applied:',
            code: 'php artisan route:list --path=api'
          },
          {
            title: 'Tests failing after generation',
            desc: 'Ensure your database is set up for testing and migrations run:',
            code: 'php artisan test'
          }
        ].map((item, idx) => (
          <div key={idx} className="border-l-2 border-red-500/50 pl-6">
            <h3 className="text-base font-semibold mb-2 text-zinc-200">{item.title}</h3>
            <p className="text-zinc-500 text-sm mb-3">{item.desc}</p>
            <CodeBlock code={item.code} language="bash" />
          </div>
        ))}
      </div>

      <h2>Performance</h2>

      <div className="space-y-3 my-8">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">How long does generation take?</h3>
          <p className="text-zinc-500 text-sm mb-0">
            Generation typically takes less than 1 second. The --all flag generates 80+ files but still completes in under 2 seconds.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Will generated code impact performance?</h3>
          <p className="text-zinc-500 text-sm mb-0">
            No. Generated code follows Laravel best practices and has zero performance impact. Generated models use appropriate indexes in migrations.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Can I regenerate a model?</h3>
          <p className="text-zinc-500 text-sm mb-0">
            Yes. Use --force to overwrite existing code. It's safe to regenerate — existing data won't be affected. Just re-run migrations if the schema changed.
          </p>
        </div>
      </div>

      <h2>Getting Help</h2>
      
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">GitHub Issues</h3>
          <p className="text-zinc-500 text-sm mb-3">Found a bug? Report it on GitHub.</p>
          <a 
            href="https://github.com/larahammer/generator/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium no-underline"
          >
            Report an Issue &rarr;
          </a>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Documentation</h3>
          <p className="text-zinc-500 text-sm mb-3">Check out our comprehensive docs.</p>
          <Link href="/docs/api-reference" className="text-blue-400 hover:text-blue-300 text-sm font-medium no-underline">
            API Reference &rarr;
          </Link>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Source Code</h3>
          <p className="text-zinc-500 text-sm mb-3">Explore the package source.</p>
          <a 
            href="https://github.com/larahammer/generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium no-underline"
          >
            View on GitHub &rarr;
          </a>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Packagist</h3>
          <p className="text-zinc-500 text-sm mb-3">Install and version history.</p>
          <a 
            href="https://packagist.org/packages/larahammer/generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium no-underline"
          >
            View on Packagist &rarr;
          </a>
        </div>
      </div>

      <div className="mt-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
        <h3 className="font-semibold text-base mb-2 text-white">Ready to start?</h3>
        <p className="text-zinc-500 text-sm mb-0">
          Check out the <Link href="/docs/getting-started" className="text-blue-400 hover:text-blue-300 font-medium no-underline">Getting Started</Link> guide 
          to scaffold your first project.
        </p>
      </div>
    </div>
  )
}
