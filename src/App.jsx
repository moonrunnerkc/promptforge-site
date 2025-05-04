// PromptForge Landing Page - Enhanced Version
// Modularized Components + Feature Extensions
import PresetCard from './components/PresetCard'
import PromptExportTools from './components/PromptExportTools'


export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6">⚙️ PromptForge</h1>
        <p className="text-xl text-gray-400 mb-12">
          Build the Brain. Shape the Soul. Create GPTs that slap.
        </p>

        <div className="py-[15px]">
          <a
            href="https://chatgpt.com/g/g-681772c36dc4819193e6be116c19e8d5-promptforge"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-2xl font-semibold shadow-xl transition mb-8"
            target="_blank"
            rel="noreferrer"
          >
            🚀 Click Here to Launch PromptForge
          </a>
        </div>

        <hr className="border-zinc-700 mb-16" />

        <h2 className="text-3xl font-bold mb-8">🔥 Example Presets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <h2 className="text-3xl font-bold mb-8">🛠 Export & Persona Tools</h2>
        <PromptExportTools />

        <footer className="text-center text-gray-500 text-sm mt-16">
          &copy; {new Date().getFullYear()} Aftermath Technologies. Built for the builders.
        </footer>
      </div>
    </div>
  );
}


