import PresetCard from './components/PresetCard'
import PromptExportTools from './components/PromptExportTools'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 sm:px-6 py-10 sm:py-16">
      
      
        <div className="w-full max-w-5xl mx-auto text-center px-4 sm:px-6">
  <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
    ⚙️ PromptForge
  </h1>
  <p className="text-lg sm:text-xl text-gray-300 mb-10 sm:mb-12 leading-relaxed">
    A visual system prompt builder that helps you design, test, and export structured GPT logic with style.
  </p>

  <div className="flex justify-center mb-14">
    <a
      href="https://chatgpt.com/g/g-681772c36dc4819193e6be116c19e8d5-promptforge"
      target="_blank"
      rel="noreferrer"
      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105"
    >
      🚀 Launch PromptForge Now
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
