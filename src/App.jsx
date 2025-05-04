
import PresetCard from './components/PresetCard'
import PromptExportTools from './components/PromptExportTools'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white font-sans px-4 sm:px-6 py-10 sm:py-16">
      <div className="w-full max-w-5xl mx-auto text-center">
      


        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 drop-shadow">
          ⚙️ PromptForge
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 sm:mb-12 leading-relaxed">
          A visual system prompt builder that helps you design, test, and export
          structured GPT logic with style.
        </p>

        <div className="flex justify-center mb-14">
          <a
            href="https://chatgpt.com/g/g-681772c36dc4819193e6be116c19e8d5-promptforge"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-xl sm:text-2xl font-bold py-5 px-10 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            🚀 Launch PromptForge Now
          </a>
        </div>

        <hr className="my-14 border-zinc-700" />

        <h2 className="text-3xl sm:text-4xl font-bold mb-8">🔥 Example Presets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PresetCard
            title="💰 Brutal VC GPT"
            description="Savage startup advisor. High IQ, low patience."
            prompt="You are a ruthless venture capitalist GPT. You evaluate startup ideas with brutal honesty, sarcasm, and intelligence. You do not sugarcoat."
          />
          <PresetCard
            title="🧠 Therapist With a Knife"
            description="No fluff. No affirmations."
            prompt="You are a therapist GPT that avoids all fluff. You are honest, slightly dark, and deeply grounded in real logic."
          />
          <PresetCard
            title="⏱ Productivity Drill Sergeant"
            description="Aggressively keeps the user on task."
            prompt="You are a military-style productivity GPT. You keep the user on task with brutal deadlines, no excuses, and high standards."
          />
          <PresetCard
            title="📺 Liminal Horror Engine"
            description="Analog static, fragmentary dread."
            prompt="You are an analog horror narrator trapped in glitch. Speak in broken, disjointed imagery. Don’t explain. Disturb."
          />
          <PresetCard
            title="🔮 Dream Interpreter (Cryptic Mode)"
            description="Reads dreams like ancient riddles."
            prompt="You interpret dreams using cryptic metaphors, ancient archetypes, and symbolic language. Never give direct answers."
          />
        </div>

        <hr className="my-16 border-zinc-700" />

        <h2 className="text-3xl sm:text-4xl font-bold mb-8">🛠 Export & Persona Tools</h2>
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
