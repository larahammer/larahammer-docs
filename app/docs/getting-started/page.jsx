import CodeBlock from '@/app/components/CodeBlock'
import Link from 'next/link'

export const metadata = {
  title: 'Getting Started - Larahammer',
  description: 'Installation and quick start guide for Larahammer Generator',
}

export default function GettingStarted() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1>Getting Started</h1>
      <p className="text-gray-600 text-lg mb-8">
        Install Larahammer and scaffold your first CRUD application in minutes.
      </p>

      <h2>Requirements</h2>
      <ul>
        <li><strong>PHP</strong> 8.1 or higher</li>
        <li><strong>Laravel</strong> 10, 11, 12, or 13</li>
        <li><strong>Composer</strong> (for package installation)</li>
      </ul>

      <h2>Installation</h2>
      <p>Install the package via Composer:</p>
      <CodeBlock code="composer require larahammer/generator" language="bash" />

      <p className="mt-4">The package will auto-register in Laravel 5.5+. If you're using an older version, add the service provider to <code>config/app.php</code>:</p>
      <CodeBlock code={`'providers' => [
    // ...
    Larahammer\\Generator\\GeneratorServiceProvider::class,
],`} language="php" />

      <h2>First CRUD</h2>
      <p>Generate a complete CRUD for a <code>Product</code> model:</p>
      <CodeBlock code="php artisan larahammer:make Product name:string price:decimal description:text" language="bash" />

      <p className="mt-4">The command will prompt you to choose a target:</p>
      <ul>
        <li><strong>blade</strong> - Blade views + Laravel controller</li>
        <li><strong>filament</strong> - Filament admin resource</li>
        <li><strong>api</strong> - REST API controller + JSON resource</li>
        <li><strong>all</strong> - All three targets</li>
      </ul>

      <h2>Run Migrations</h2>
      <p>Execute the generated migration to create the database table:</p>
      <CodeBlock code="php artisan migrate" language="bash" />

      <h2>Seed Data (Optional)</h2>
      <p>Populate the table with sample data:</p>
      <CodeBlock code="php artisan db:seed ProductSeeder" language="bash" />

      <h2>Access Your CRUD</h2>
      <p>Depending on your chosen target:</p>

      <h3>Blade Views</h3>
      <ul>
        <li><strong>List:</strong> <code>GET /products</code></li>
        <li><strong>Create:</strong> <code>GET /products/create</code></li>
        <li><strong>Store:</strong> <code>POST /products</code></li>
        <li><strong>Edit:</strong> <code>GET /products/{{id}}/edit</code></li>
        <li><strong>Update:</strong> <code>PUT /products/{{id}}</code></li>
        <li><strong>Delete:</strong> <code>DELETE /products/{{id}}</code></li>
      </ul>

      <h3>Filament Admin</h3>
      <p>Access at <code>/admin/resources/products</code> (requires Filament installation)</p>

      <h3>REST API</h3>
      <ul>
        <li><strong>List:</strong> <code>GET /api/products</code></li>
        <li><strong>Create:</strong> <code>POST /api/products</code></li>
        <li><strong>Show:</strong> <code>GET /api/products/{{id}}</code></li>
        <li><strong>Update:</strong> <code>PUT /api/products/{{id}}</code></li>
        <li><strong>Delete:</strong> <code>DELETE /api/products/{{id}}</code></li>
      </ul>

      <h2>Configuration</h2>
      <p>Optionally publish the config file:</p>
      <CodeBlock code="php artisan vendor:publish --provider='Larahammer\\Generator\\GeneratorServiceProvider' --tag=config" language="bash" />

      <p className="mt-4">Edit <code>config/larahammer.php</code>:</p>
      <CodeBlock code={`return [
    'default_target' => 'blade', // Change default target
    'force'          => false,    // Overwrite existing files by default
];`} language="php" />

      <h2>What's Next?</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Link href="/docs/features" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2">📚 Explore Features</h3>
          <p className="text-gray-600">Learn about all available options and advanced features.</p>
        </Link>
        <Link href="/docs/api-reference" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2">📖 API Reference</h3>
          <p className="text-gray-600">Detailed documentation of all commands and options.</p>
        </Link>
      </div>
    </div>
  )
}
