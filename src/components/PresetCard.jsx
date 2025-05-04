// src/components/PresetCard.jsx

export default function PresetCard({ title, description, prompt }) {
  const copyPrompt = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(prompt)
      alert("✅ Prompt copied to clipboard.")
    } else {
      console.error("Clipboard API not supported.")
    }
  }

  return (
    <div className="bg-zinc-800 p-6 rounded-xl shadow-lg text-left border border-zinc-700">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <button
        onClick={copyPrompt}
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-semibold"
      >
        Copy Prompt
      </button>
    </div>
  )
}
