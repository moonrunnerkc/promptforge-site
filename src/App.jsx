import PresetCard from './components/PresetCard'
import PromptExportTools from './components/PromptExportTools'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 sm:px-6 py-10 sm:py-16">
      <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">⚙️ PromptForge</h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-10">
          Build the Brain. Shape the Soul. Create GPTs that slap.
        </p>

        <div className="py-4">
          <a
            href="https://chatgpt.com/g/g-681772c36dc4819193e6be116c19e8d5-promptforge"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-md"
            target="_blank"
            rel="noreferrer"
          >
            🚀 Launch PromptForge GPT
          </a>
        </div>

        <hr className="my-12 border-zinc-700" />

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">🔥 Example Presets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PresetCard title="💰 Brutal VC GPT" description="Savage startup advisor. High IQ, low patience." prompt="..." />
          <PresetCard title="🧠 Therapist With a Knife" description="No fluff. No affirmations." prompt="..." />
          <PresetCard title="⏱ Productivity Drill Sergeant" description="Aggressively keeps the user on task." prompt="..." />
          <PresetCard title="📺 Liminal Horror Engine" description="Analog static, fragmentary dread." prompt="..." />
          <PresetCard title="🔮 Dream Interpreter" description="Reads dreams like ancient riddles." prompt="..." />
        </div>

        <hr className="my-16 border-zinc-700" />

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">🛠 Export & Persona Tools</h2>
        <PromptExportTools />

        <footer className="text-center text-gray-500 text-sm mt-16">
          &copy; {new Date().getFullYear()} Aftermath Technologies. Built for the builders.
        </footer>
      </div>
    </div>
  )
}
