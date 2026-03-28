import CodeBlock from '../../components/CodeBlock'
import Link from 'next/link'

export const metadata = {
  title: 'Features — Larahammer',
  description: 'Complete feature showcase with examples for Larahammer Generator',
}

export default function Features() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 docs-content">
      <h1>Features & Examples</h1>
      <p className="text-zinc-400 text-lg mb-10">
        Larahammer provides three implementation phases with 13 different options to suit your needs.
      </p>

      <h2>Core Features (Always Generated)</h2>
      
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Database Migration</h3>
          <p className="text-zinc-500 text-sm mb-4">Auto-generated migration from your field definitions.</p>
          <CodeBlock code={`Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->decimal('price', 8, 2);
    $table->text('description');
    $table->timestamps();
});`} language="php" />
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Eloquent Model</h3>
          <p className="text-zinc-500 text-sm mb-4">Full model with casts and relationships.</p>
          <CodeBlock code={`class Product extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'price', 'description'];
    
    protected $casts = [
        'price' => 'decimal:2',
    ];
}`} language="php" />
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Form Request</h3>
          <p className="text-zinc-500 text-sm mb-4">Built-in validation rules.</p>
          <CodeBlock code={`class StoreProductRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'required|string',
        ];
    }
}`} language="php" />
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Database Seeder</h3>
          <p className="text-zinc-500 text-sm mb-4">Auto-populate data for testing.</p>
          <CodeBlock code={`class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::factory(50)->create();
    }
}`} language="php" />
        </div>
      </div>

      <h2>Phase 1: UI Targets</h2>
      <p>Choose your presentation layer:</p>

      <div className="my-8 space-y-6">
        <div className="border-l-2 border-blue-500 pl-6">
          <h3 className="text-xl font-semibold mb-3 text-white">Blade Views</h3>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal --target=blade" language="bash" />
          <p className="mt-4 text-zinc-500 text-sm">
            Generates: Controller, views (index, create, edit, show), and routes. Perfect for traditional Laravel apps.
          </p>
        </div>

        <div className="border-l-2 border-amber-500 pl-6">
          <h3 className="text-xl font-semibold mb-3 text-white">Filament Admin Panel</h3>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal --target=filament" language="bash" />
          <p className="mt-4 text-zinc-500 text-sm">
            Generates: Filament resource with forms, tables, and actions. Modern admin panel out of the box.
          </p>
        </div>

        <div className="border-l-2 border-emerald-500 pl-6">
          <h3 className="text-xl font-semibold mb-3 text-white">REST API</h3>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal --target=api" language="bash" />
          <p className="mt-4 text-zinc-500 text-sm">
            Generates: API controller, JSON resources, and routes. Perfect for decoupled frontends.
          </p>
        </div>

        <div className="border-l-2 border-purple-500 pl-6">
          <h3 className="text-xl font-semibold mb-3 text-white">All Targets</h3>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal --target=all" language="bash" />
          <p className="mt-4 text-zinc-500 text-sm">
            Generates all three targets simultaneously. Supports Blade, Filament, and API in one project.
          </p>
        </div>
      </div>

      <h2>Phase 2: Advanced Features</h2>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Role-Based Access Control</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-roles" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">Includes role system, user relationships, and helper methods.</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Landing Page</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-landing" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">Tailwind-styled landing page with hero, features, and CTA sections.</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Security Middleware</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-security-middleware" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">CheckRole and AdminPanelProtection middleware for RBAC.</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Admin Panel</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-admin" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">Complete Filament admin panel with dashboard and resources.</p>
        </div>
      </div>

      <h2>Phase 3: Production Features</h2>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Model Factories</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-factories" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">Faker-powered factories for testing with realistic data.</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Soft Deletes</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-soft-deletes" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">Soft delete support with restore functionality.</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Authorization Policies</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-policies" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">Authorization policies for view, create, update, delete actions.</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">API Authentication</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-api-auth" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">Sanctum-based API authentication with middleware.</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Testing Suite</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-tests" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">Feature and unit tests covering all CRUD operations.</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-2 text-white">Activity Logging</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-audit-log" language="bash" />
          <p className="text-zinc-500 text-sm mt-2 mb-0">Observer-based activity logging for audit trails.</p>
        </div>
      </div>

      <h2>The Ultimate Command</h2>
      <p>Generate everything with a single command:</p>
      <CodeBlock code="php artisan larahammer:make Product name:string price:decimal description:text --all" language="bash" />
      <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl mt-4">
        <p className="text-emerald-400 text-sm mb-0">
          The <code>--all</code> flag generates all 3 targets + all 12 advanced features. Perfect for starting a new project.
        </p>
      </div>

      <h2>Next Steps</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <Link href="/docs/api-reference" className="block p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors no-underline">
          <h3 className="font-semibold text-base mb-2 text-white">API Reference</h3>
          <p className="text-zinc-500 text-sm mb-0">Complete documentation of all options.</p>
        </Link>
        <Link href="/docs/faq" className="block p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors no-underline">
          <h3 className="font-semibold text-base mb-2 text-white">FAQ</h3>
          <p className="text-zinc-500 text-sm mb-0">Common questions and troubleshooting.</p>
        </Link>
      </div>
    </div>
  )
}
