import CodeBlock from '@/app/components/CodeBlock.jsx'
import Link from 'next/link'

export const metadata = {
  title: 'API Reference - Larahammer',
  description: 'Complete API reference for Larahammer Generator command and options',
}

export default function ApiReference() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1>API Reference</h1>
      <p className="text-gray-600 text-lg mb-8">
        Complete documentation of the larahammer:make command and all available options.
      </p>

      <h2>Command Syntax</h2>
      <CodeBlock code="php artisan larahammer:make {name} {fields*} [options]" language="bash" />

      <h2>Arguments</h2>
      <div className="space-y-6 my-8">
        <div className="border-l-4 border-blue-600 pl-4 py-2">
          <h3 className="font-bold text-lg"><code>name</code></h3>
          <p className="text-gray-600">Model name in StudlyCase (e.g., Product, BlogPost, UserProfile)</p>
          <CodeBlock code="php artisan larahammer:make Product" language="bash" />
        </div>

        <div className="border-l-4 border-blue-600 pl-4 py-2">
          <h3 className="font-bold text-lg"><code>fields*</code></h3>
          <p className="text-gray-600">Field definitions for the migration. Multiple fields supported.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal status:enum(active,inactive)" language="bash" />
          <p className="text-gray-600 mt-2"><strong>Supported types:</strong> string, text, integer, boolean, date, datetime, decimal, enum, json, longText, mediumText, uuid, and more.</p>
        </div>
      </div>

      <h2>Target Options</h2>
      <p className="mb-4">Choose your UI presentation layer (required - prompted if omitted):</p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">
            <code>--target=blade</code>
          </h3>
          <p className="text-gray-600">Blade views + controller + routes</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --target=blade" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">
            <code>--target=filament</code>
          </h3>
          <p className="text-gray-600">Filament admin resource + routes</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --target=filament" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">
            <code>--target=api</code>
          </h3>
          <p className="text-gray-600">REST API controller + JSON resource</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --target=api" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">
            <code>--target=all</code>
          </h3>
          <p className="text-gray-600">Blade + Filament + API</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --target=all" language="bash" />
        </div>
      </div>

      <h2>Feature Flags</h2>

      <h3>Phase 1: Role System & UI Enhancements</h3>
      <div className="space-y-4 my-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-roles</span>
          </div>
          <p className="text-gray-600 mt-2">Generate role-based access control system with migration, model, and seeder.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-roles" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-landing</span>
          </div>
          <p className="text-gray-600 mt-2">Generate Tailwind-styled landing page.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-landing" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-admin</span>
          </div>
          <p className="text-gray-600 mt-2">Generate complete Filament admin panel.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-admin" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-security-middleware</span>
          </div>
          <p className="text-gray-600 mt-2">Generate CheckRole and AdminPanelProtection middleware.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-security-middleware" language="bash" />
        </div>
      </div>

      <h3>Phase 2: Testing & Advanced Features</h3>
      <div className="space-y-4 my-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-factories</span>
          </div>
          <p className="text-gray-600 mt-2">Generate model factory with Faker data.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-factories" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-soft-deletes</span>
          </div>
          <p className="text-gray-600 mt-2">Add soft delete support to model and migration.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-soft-deletes" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-policies</span>
          </div>
          <p className="text-gray-600 mt-2">Generate authorization policy class for all actions.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-policies" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-api-auth</span>
          </div>
          <p className="text-gray-600 mt-2">Generate API authentication with Sanctum middleware.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-api-auth" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-tests</span>
          </div>
          <p className="text-gray-600 mt-2">Generate feature and unit tests for all CRUD operations.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-tests" language="bash" />
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--with-audit-log</span>
          </div>
          <p className="text-gray-600 mt-2">Generate activity logging with observer pattern.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --with-audit-log" language="bash" />
        </div>
      </div>

      <h3>Convenience & Utility</h3>
      <div className="space-y-4 my-6">
        <div className="border border-gray-200 rounded-lg p-4 bg-green-50 border-green-200">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-green-100 text-green-700 px-2 py-1 rounded">--all</span>
          </div>
          <p className="text-green-800 font-semibold mt-2">Generate everything: all targets + all advanced features</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --all" language="bash" />
          <p className="text-gray-600 mt-2">Equivalent to: <code>--target=all --with-roles --with-admin --with-landing --with-security-middleware --with-factories --with-soft-deletes --with-policies --with-api-auth --with-tests --with-audit-log</code></p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-pink-100 text-pink-700 px-2 py-1 rounded">--force</span>
          </div>
          <p className="text-gray-600 mt-2">Overwrite existing files without confirmation.</p>
          <CodeBlock code="php artisan larahammer:make Product name:string --force" language="bash" />
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

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800">
          💡 <strong>Tip:</strong> You can combine any target with any combination of feature flags. 
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
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Link href="/docs/features" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2">📚 Features Showcase</h3>
          <p className="text-gray-600">See detailed examples of each feature.</p>
        </Link>
        <Link href="/docs/faq" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2">❓ FAQ</h3>
          <p className="text-gray-600">Common questions and troubleshooting.</p>
        </Link>
      </div>
    </div>
  )
}
