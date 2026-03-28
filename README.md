# Larahammer Generator Documentation

Modern, comprehensive documentation site for the Larahammer Generator Laravel package.

## 📖 About

This is the official documentation website for [Larahammer Generator](https://github.com/larahammer/generator), a complete CRUD scaffolding package for Laravel that generates migrations, models, controllers, views, factories, tests, and more from a single command.

**Live Site:** [docs.larahammer.dev](https://docs.larahammer.dev)

## 🏗️ Built With

- **Next.js 14** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **React** - JavaScript library for user interfaces

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/larahammer/docs.git
cd larahammer-docs

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
larahammer-docs/
├── app/
│   ├── components/          # Reusable React components
│   ├── docs/               # Documentation pages
│   │   ├── getting-started/
│   │   ├── features/
│   │   ├── api-reference/
│   │   └── faq/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Home page
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 📄 Documentation Sections

1. **Home** - Overview and features showcase
2. **Getting Started** - Installation guide and quick start
3. **Features** - Detailed feature showcase with examples
4. **API Reference** - Complete command reference and options
5. **FAQ** - Common questions and troubleshooting

## 🔧 Development

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

### Linting

```bash
npm run lint
```

## 📝 Content Guidelines

- Use clear, concise language
- Include code examples for every feature
- Organize content logically
- Keep formatting consistent
- Use proper markdown syntax

## 🌐 Deployment

This site is configured for deployment on:
- Vercel (recommended)
- GitHub Pages
- Any Node.js hosting

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit (`git commit -am 'Add improvement'`)
5. Push (`git push origin feature/improvement`)
6. Open a Pull Request

## 📄 License

MIT License - See LICENSE file for details

## 🔗 Links

- **Larahammer Generator** - https://github.com/larahammer/generator
- **Packagist** - https://packagist.org/packages/larahammer/generator
- **Issues** - https://github.com/larahammer/generator/issues

## 📧 Support

For issues and questions:
- GitHub Issues: https://github.com/larahammer/generator/issues
- Email: support@larahammer.dev

---

Made with ❤️ for Laravel developers
