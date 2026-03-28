'use client'

export default function CodeBlock({ code, language = 'bash' }) {
  return (
    <div className="my-4 rounded-lg overflow-hidden">
      <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono flex justify-between items-center">
        <span>{language}</span>
        <button 
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
        >
          Copy
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}
