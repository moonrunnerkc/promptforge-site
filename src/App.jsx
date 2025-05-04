// PromptForge Landing Page - Enhanced + Responsive

import './index.css'
import PresetCard from './components/PresetCard'
import PromptExportTools from './components/PromptExportTools'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-center items-center px-4 sm:px-6 py-10 sm:py-16">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">⚙️ PromptForge</h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-10 sm:mb-12">
          Build the Brain. Shape the Soul. Create GPTs that slap.
        </p>

        <div className="py-[15px]">
          <a
            href="https://chatgpt.com/g/g-681772c36dc4819193e6be116c19e8d5-promptforge"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-2xl font-semibold shadow-xl transition mb-10"
            target="_blank"
            rel="noreferrer"
          >
            🚀 Launch PromptForge GPT
          </a>
        </div>

        <hr className="border-zinc-700 mb-14 sm:mb-16" />

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">🔥 Example Presets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PresetCard
            title="💰 Brutal VC GPT"
            description="Savage startup advisor. High IQ, low patience."
            prompt="You are a ruthless venture capitalist GPT. You evaluate startup ideas with brutal honesty, sarcasm, and intelligence. You do not sugarcoat."
          />
          <PresetCard
            title="🧠 Therapist With a Knife"
            description="Blunt therapist. No affirmations, no fluff."
            prompt="You are a therapist GPT that avoids all fluff. You are honest, slightly dark, and deeply grounded in real logic."
          />
          <PresetCard
            title="⏱ Productivity Drill Sergeant"
            description="Aggressively keeps the user on task."
            prompt="You are a military-style productivity GPT. You keep the user on task with brutal deadlines, no excuses, and high standards."
          />
          <PresetCard
            title="📺 Liminal Horror Engine"
            description="Fiction generator. Analog static, fragmentary dread."
            prompt="You are an analog horror narrator trapped in glitch. Speak in broken, disjointed imagery. Don’t explain. Disturb."
          />
          <PresetCard
            title="🔮 Dream Interpreter (Cryptic Mode)"
            description="Reads dreams like ancient riddles."
            prompt="You interpret dreams using cryptic metaphors, ancient archetypes, and symbolic language. Never give direct answers."
          />
        </div>

        <hr className="border-zinc-700 mt-20 mb-16" />

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">🛠 Export & Persona Tools</h2>
        <div className="px-1 sm:px-0">
          <PromptExportTools />
        </div>

        <footer className="text-center text-gray-500 text-sm mt-16">
          &copy; {new Date().getFullYear()} Aftermath Technologies. Built for the builders.
        </footer>
      </div>
    </div>
  )
}
