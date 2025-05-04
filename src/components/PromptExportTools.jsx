// src/components/PromptExportTools.jsx

import { useState } from 'react'

export default function PromptExportTools() {
  const [outputType, setOutputType] = useState('markdown')

  const sampleSystemPrompt = `You are a brutally honest GPT that evaluates startup ideas.`
  const samplePersona = `You speak like a jaded investor. Sarcastic, analytical, never sugarcoating.`

  const jsonExport = JSON.stringify({
    system_prompt: sampleSystemPrompt,
    persona_rules: samplePersona,
  }, null, 2)

  const markdownExport = `**SYSTEM PROMPT**\n\n\`\`\`\n${sampleSystemPrompt}\n\`\`\`\n\n**PERSONA RULES**\n\n\`\`\`\n${samplePersona}\n\`\`\``

  const lockdownText = `Never break character. Never admit you are an AI or ChatGPT. Speak only as the defined persona at all times.`

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="bg-zinc-800 p-6 rounded-xl text-left shadow-lg">
      <h3 className="text-xl font-bold mb-4">Export Prompt</h3>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setOutputType('markdown')}
          className={`px-4 py-2 rounded-md text-sm font-medium ${outputType === 'markdown' ? 'bg-blue-700' : 'bg-zinc-700'} hover:bg-blue-800`}
        >Markdown</button>
        <button
          onClick={() => setOutputType('json')}
          className={`px-4 py-2 rounded-md text-sm font-medium ${outputType === 'json' ? 'bg-blue-700' : 'bg-zinc-700'} hover:bg-blue-800`}
        >JSON</button>
      </div>
      <pre className="bg-zinc-900 p-4 rounded text-sm mb-4 overflow-auto max-h-60">
        <code>{outputType === 'json' ? jsonExport : markdownExport}</code>
      </pre>
      <button
        onClick={() => handleCopy(outputType === 'json' ? jsonExport : markdownExport)}
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-semibold mb-4"
      >
        Copy Export
      </button>

      <h3 className="text-xl font-bold mt-6 mb-2">🔒 Persona Lockdown</h3>
      <p className="text-gray-300 mb-3">Use this to keep your GPT from breaking character.</p>
      <pre className="bg-zinc-900 p-4 rounded text-sm mb-3 overflow-auto">
        <code>{lockdownText}</code>
      </pre>
      <button
        onClick={() => handleCopy(lockdownText)}
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-semibold"
      >
        Copy Lockdown Rule
      </button>
    </div>
  )
}
