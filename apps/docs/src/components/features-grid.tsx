import { Cpu, FileCode2, Gauge, Layers, ShieldCheck, Zap } from 'lucide-react';

const FEATURES = [
  {
    icon: Gauge,
    title: 'High-Throughput Engine',
    desc: 'Asynchronous recursive scanner capable of processing repositories with over 100,000+ files in sub-millisecond execution times.',
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Layers,
    title: 'Multi-Theme Renderers',
    desc: 'Render tree structures in VSCode, Material, Unicode, Nerd Font, ASCII, Markdown, JSON, and Mermaid formats out of the box.',
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: FileCode2,
    title: '13+ Exporter Plugins',
    desc: 'Export repository trees to Markdown, HTML, JSON, YAML, XML, CSV, DOCX, PDF, SVG, PNG, Mermaid, and PlantUML diagrams.',
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Cpu,
    title: 'AI Context Compression',
    desc: 'Compress repo structures into token-optimized LLM prompts for ChatGPT, Claude 3.5, and Gemini Pro architecture analysis.',
    color: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Smart .gitignore Parsing',
    desc: 'Automatically respects `.gitignore` rules, `.ignore` patterns, node_modules, and custom exclusion filters.',
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Zap,
    title: 'VSCode & GitHub Actions',
    desc: 'Seamlessly generate and auto-commit `PROJECT_STRUCTURE.md` in CI/CD pipelines or visualize in VS Code Explorer context menus.',
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Engineered For Enterprise Repositories
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
          Built according to strict SOLID principles, pure functions, zero mutable global state, and
          maximum performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-lg hover:border-border transition-all hover:translate-y-[-2px]"
          >
            <div
              className={`h-10 w-10 rounded-xl flex items-center justify-center border ${f.color} mb-4`}
            >
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
