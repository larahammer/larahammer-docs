'use client'

export default function CodeBlock({ code, language = 'bash' }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-zinc-800">
      <div className="bg-zinc-800/50 text-zinc-500 px-4 py-2 text-xs font-mono flex justify-between items-center border-b border-zinc-800">
        <span>{language}</span>
        <button 
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs text-zinc-500 hover:text-zinc-300 bg-zinc-700/50 hover:bg-zinc-700 px-3 py-1 rounded-md transition-colors border-0 cursor-pointer"
        >
          Copy
        </button>
      </div>
      <pre className="bg-zinc-900 text-zinc-300 p-5 overflow-x-auto m-0 rounded-none border-0">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  )
}
