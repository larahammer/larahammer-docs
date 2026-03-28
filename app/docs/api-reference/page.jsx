import CodeBlock from '../../components/CodeBlock'
import Link from 'next/link'

export const metadata = {
  title: 'API Reference — Larahammer',
  description: 'Complete API reference for Larahammer Generator command and options',
}

export default function ApiReference() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 docs-content">
      <h1>API Reference</h1>
      <p className="text-zinc-400 text-lg mb-10">
        Complete documentation of the larahammer:make command and all available options.
      </p>

      <h2>Command Syntax</h2>
      <CodeBlock code="php artisan larahammer:make {name} {fields*} [options]" language="bash" />

      <h2>Arguments</h2>
      <div className="space-y-6 my-8">
        <div className="border-l-2 border-blue-500 pl-5 py-2">
          <h3 className="font-semibold text-base text-white"><code>name</code></h3>
          <p className="text-zinc-500 text-sm">Model name in StudlyCase (e.g., Product, BlogPost, UserProfile)</p>
          <CodeBlock code="php artisan larahammer:make Product" language="bash" />
        </div>

        <div className="border-l-2 border-blue-500 pl-5 py-2">
          <h3 className="font-semibold text-base text-white"><code>fields*</code></h3>
          <p className="text-zinc-500 text-sm">Field definitions for the migration. Multiple fields supported.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal status:enum(active,inactive)" language="bash" />
          <p className="text-zinc-500 text-sm mt-2"><strong>Supported types:</strong> string, text, integer, boolean, date, datetime, decimal, enum, json, longText, mediumText, uuid, and more.</p>
        </div>
      </div>

      <h2>Target Options</h2>
      <p className="mb-4">Choose your UI presentation layer (required — prompted if omitted):</p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">
            <code>--target=blade</code>
          </h3>
          <p className="text-zinc-500 text-sm">Blade views + controller + routes</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --target=blade" language="bash" />
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">
            <code>--target=filament</code>
          </h3>
          <p className="text-zinc-500 text-sm">Filament admin resource + routes</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --target=filament" language="bash" />
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">
            <code>--target=api</code>
          </h3>
          <p className="text-zinc-500 text-sm">REST API controller + JSON resource</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --target=api" language="bash" />
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">
            <code>--target=all</code>
          </h3>
          <p className="text-zinc-500 text-sm">Blade + Filament + API</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --target=all" language="bash" />
        </div>
      </div>

      <h2>Feature Flags</h2>

      <h3>Phase 1: Role System & UI Enhancements</h3>
      <div className="space-y-3 my-6">
        {[
          { flag: '--with-roles', desc: 'Generate role-based access control system with migration, model, and seeder.' },
          { flag: '--with-landing', desc: 'Generate Tailwind-styled landing page.' },
          { flag: '--with-admin', desc: 'Generate complete Filament admin panel.' },
          { flag: '--with-security-middleware', desc: 'Generate CheckRole and AdminPanelProtection middleware.' },
        ].map((item, idx) => (
          <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
            <span className="font-mono text-sm text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">{item.flag}</span>
            <p className="text-zinc-500 text-sm mt-3 mb-0">{item.desc}</p>
          </div>
        ))}
      </div>

      <h3>Phase 2: Testing & Advanced Features</h3>
      <div className="space-y-3 my-6">
        {[
          { flag: '--with-factories', desc: 'Generate model factory with Faker data.' },
          { flag: '--with-soft-deletes', desc: 'Add soft delete support to model and migration.' },
          { flag: '--with-policies', desc: 'Generate authorization policy class for all actions.' },
          { flag: '--with-api-auth', desc: 'Generate API authentication with Sanctum middleware.' },
          { flag: '--with-tests', desc: 'Generate feature and unit tests for all CRUD operations.' },
          { flag: '--with-audit-log', desc: 'Generate activity logging with observer pattern.' },
        ].map((item, idx) => (
          <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
            <span className="font-mono text-sm text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">{item.flag}</span>
            <p className="text-zinc-500 text-sm mt-3 mb-0">{item.desc}</p>
          </div>
        ))}
      </div>

      <h3>Convenience & Utility</h3>
      <div className="space-y-3 my-6">
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
          <span className="font-mono text-sm text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">--all</span>
          <p className="text-emerald-400 text-sm font-medium mt-3 mb-1">Generate everything: all targets + all advanced features</p>
          <p className="text-zinc-500 text-xs mb-0">Equivalent to: <code>--target=all --with-roles --with-admin --with-landing --with-security-middleware --with-factories --with-soft-deletes --with-policies --with-api-auth --with-tests --with-audit-log</code></p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
          <span className="font-mono text-sm text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">--force</span>
          <p className="text-zinc-500 text-sm mt-3 mb-0">Overwrite existing files without confirmation.</p>
        </div>
      </div>

      <h2>Examples</h2>

      <h3>Simple CRUD with Blade Views</h3>
      <CodeBlock code="php artisan larahammer:make Post title:string slug:string content:text --target=blade" language="bash" />

      <h3>Admin Panel with Filament</h3>
      <CodeBlock code="php artisan larahammer:make BlogCategory name:string description:text --target=filament" language="bash" />

      <h3>REST API with Authentication</h3>
      <CodeBlock code="php artisan larahammer:make Article title:string content:text --target=api --with-api-auth" language="bash" />

      <h3>Complete Application</h3>
      <CodeBlock code="php artisan larahammer:make Order order_number:string total:decimal status:enum(pending,processing,completed,cancelled) --all" language="bash" />

      <h3>Combination of Specific Features</h3>
      <CodeBlock code="php artisan larahammer:make Product name:string price:decimal --target=all --with-factories --with-tests --with-policies" language="bash" />

      <div className="mt-8 p-5 bg-blue-500/5 border border-blue-500/20 rounded-xl">
        <p className="text-blue-400 text-sm mb-0">
          <strong>Tip:</strong> You can combine any target with any combination of feature flags. 
          Only the features you request will be generated.
        </p>
      </div>

      <h2>Generated File Structure</h2>
      <p className="my-4">When you run <code>php artisan larahammer:make Product --all</code>, you'll get:</p>
      
      <CodeBlock code={`app/
├── Models/
│   └── Product.php
├── Http/
│   ├── Controllers/
│   │   ├── ProductController.php (Blade)
│   │   └── Api/ProductController.php (API)
│   ├── Requests/
│   │   ├── StoreProductRequest.php
│   │   └── UpdateProductRequest.php
│   └── Resources/
│       └── ProductResource.php
├── Filament/
│   ├── Resources/
│   │   └── ProductResource.php
│   └── Pages/
│       ├── CreateProduct.php
│       └── EditProduct.php
├── Observers/
│   └── ProductObserver.php
├── Policies/
│   └── ProductPolicy.php
└── Models/Role.php, Activity.php (if applicable)

database/
├── migrations/
│   ├── create_products_table.php
│   └── (other migrations)
├── factories/
│   └── ProductFactory.php
└── seeders/
    ├── ProductSeeder.php
    └── RoleSeeder.php

routes/
├── web.php (Blade routes)
└── api.php (API routes)

resources/
└── views/
    └── products/
        ├── index.blade.php
        ├── create.blade.php
        ├── edit.blade.php
        └── show.blade.php

tests/
├── Feature/
│   └── ProductTest.php
└── Unit/
    └── ProductTest.php`} language="text" />

      <h2>Next Steps</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <Link href="/docs/features" className="block p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors no-underline">
          <h3 className="font-semibold text-base mb-2 text-white">Features Showcase</h3>
          <p className="text-zinc-500 text-sm mb-0">See detailed examples of each feature.</p>
        </Link>
        <Link href="/docs/faq" className="block p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors no-underline">
          <h3 className="font-semibold text-base mb-2 text-white">FAQ</h3>
          <p className="text-zinc-500 text-sm mb-0">Common questions and troubleshooting.</p>
        </Link>
      </div>
    </div>
  )
}
