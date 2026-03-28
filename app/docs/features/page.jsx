import CodeBlock from '../../components/CodeBlock'
import Link from 'next/link'

export const metadata = {
  title: 'Features - Larahammer',
  description: 'Complete feature showcase with examples for Larahammer Generator',
}

export default function Features() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1>Features & Examples</h1>
      <p className="text-gray-600 text-lg mb-8">
        Larahammer provides three implementation phases with 13 different options to suit your needs.
      </p>

      <h2>Core Features (Always Generated)</h2>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">📋 Database Migration</h3>
          <p className="text-gray-600 mb-4">Auto-generated migration from your field definitions.</p>
          <CodeBlock code={`Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->decimal('price', 8, 2);
    $table->text('description');
    $table->timestamps();
});`} language="php" />
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🏛️ Eloquent Model</h3>
          <p className="text-gray-600 mb-4">Full model with casts and relationships.</p>
          <CodeBlock code={`class Product extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'price', 'description'];
    
    protected $casts = [
        'price' => 'decimal:2',
    ];
}`} language="php" />
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">✅ Form Request</h3>
          <p className="text-gray-600 mb-4">Built-in validation rules.</p>
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

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🌱 Database Seeder</h3>
          <p className="text-gray-600 mb-4">Auto-populate data for testing.</p>
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

      <div className="my-8 space-y-8">
        <div className="border-l-4 border-blue-600 pl-6">
          <h3 className="text-2xl font-bold mb-4">Blade Views</h3>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal --target=blade" language="bash" />
          <p className="mt-4 text-gray-600">
            Generates: Controller, views (index, create, edit, show), and routes. Perfect for traditional Laravel apps.
          </p>
        </div>

        <div className="border-l-4 border-orange-600 pl-6">
          <h3 className="text-2xl font-bold mb-4">Filament Admin Panel</h3>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal --target=filament" language="bash" />
          <p className="mt-4 text-gray-600">
            Generates: Filament resource with forms, tables, and actions. Modern admin panel out of the box.
          </p>
        </div>

        <div className="border-l-4 border-green-600 pl-6">
          <h3 className="text-2xl font-bold mb-4">REST API</h3>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal --target=api" language="bash" />
          <p className="mt-4 text-gray-600">
            Generates: API controller, JSON resources, and routes. Perfect for decoupled frontends.
          </p>
        </div>

        <div className="border-l-4 border-purple-600 pl-6">
          <h3 className="text-2xl font-bold mb-4">All Targets</h3>
          <CodeBlock code="php artisan larahammer:make Product name:string price:decimal --target=all" language="bash" />
          <p className="mt-4 text-gray-600">
            Generates all three targets simultaneously. Supports Blade, Filament, and API in one project.
          </p>
        </div>
      </div>

      <h2>Phase 2: Advanced Features</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🎭 Role-Based Access Control</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-roles" language="bash" />
          <p className="text-gray-600 mt-2">Includes role system, user relationships, and helper methods.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🚀 Landing Page</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-landing" language="bash" />
          <p className="text-gray-600 mt-2">Tailwind-styled landing page with hero, features, and CTA sections.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🔐 Security Middleware</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-security-middleware" language="bash" />
          <p className="text-gray-600 mt-2">CheckRole and AdminPanelProtection middleware for RBAC.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">⚙️ Admin Panel</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-admin" language="bash" />
          <p className="text-gray-600 mt-2">Complete Filament admin panel with dashboard and resources.</p>
        </div>
      </div>

      <h2>Phase 3: Production Features</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🏭 Model Factories</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-factories" language="bash" />
          <p className="text-gray-600 mt-2">Faker-powered factories for testing with realistic data.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🗑️ Soft Deletes</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-soft-deletes" language="bash" />
          <p className="text-gray-600 mt-2">Soft delete support with restore functionality.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🔒 Authorization Policies</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-policies" language="bash" />
          <p className="text-gray-600 mt-2">Authorization policies for view, create, update, delete actions.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🔑 API Authentication</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-api-auth" language="bash" />
          <p className="text-gray-600 mt-2">Sanctum-based API authentication with middleware.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">🧪 Testing Suite</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-tests" language="bash" />
          <p className="text-gray-600 mt-2">Feature and unit tests covering all CRUD operations.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">📊 Activity Logging</h3>
          <CodeBlock code="php artisan larahammer:make Product --with-audit-log" language="bash" />
          <p className="text-gray-600 mt-2">Observer-based activity logging for audit trails.</p>
        </div>
      </div>

      <h2>The Ultimate Command</h2>
      <p className="mb-4">Generate everything with a single command:</p>
      <CodeBlock code="php artisan larahammer:make Product name:string price:decimal description:text --all" language="bash" />
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg mt-4">
        <p className="text-green-800">
          The <code>--all</code> flag generates all 3 targets + all 12 advanced features. Perfect for starting a new project!
        </p>
      </div>

      <h2>Next Steps</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Link href="/docs/api-reference" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2">📖 API Reference</h3>
          <p className="text-gray-600">Complete documentation of all options.</p>
        </Link>
        <Link href="/docs/faq" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2">❓ FAQ</h3>
          <p className="text-gray-600">Common questions and troubleshooting.</p>
        </Link>
      </div>
    </div>
  )
}
