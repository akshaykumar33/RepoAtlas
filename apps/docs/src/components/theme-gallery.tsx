'use client';

import { Check, Sparkles } from 'lucide-react';
import { useState } from 'react';

const THEME_PREVIEWS = [
  {
    id: 'vscode',
    name: 'VSCode Theme',
    iconPack: 'VSCode Icons',
    badge: 'Popular',
    color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    preview: `my-project
├─ 📁 apps
│  ├─ 📋 package.json
│  └─ 🌐 index.html
└─ 📁 packages
   └─ 🔷 core.ts`,
  },
  {
    id: 'material',
    name: 'Material Design',
    iconPack: 'Material Theme',
    badge: 'Vibrant',
    color: 'from-cyan-500/20 to-teal-600/10 border-cyan-500/30',
    preview: `my-project
├── 📁 apps
│   ├── 📋 package.json
│   └── 🌐 index.html
└── 📁 packages
    └── 🔷 core.ts`,
  },
  {
    id: 'unicode',
    name: 'Unicode Tree',
    iconPack: 'Emoji Pack',
    badge: 'Default',
    color: 'from-purple-500/20 to-pink-600/10 border-purple-500/30',
    preview: `my-project
├── 📂 apps
│   ├── 📋 package.json
│   └── 🌐 index.html
└── 📂 packages
    └── 🔷 core.ts`,
  },
  {
    id: 'nerd-font',
    name: 'Nerd Fonts',
    iconPack: 'Nerd Font Glyphs',
    badge: 'Terminal Pro',
    color: 'from-amber-500/20 to-orange-600/10 border-amber-500/30',
    preview: `my-project
├── 📁 apps
│   ├──  package.json
│   └──  index.html
└── 📁 packages
    └──  core.ts`,
  },
  {
    id: 'markdown',
    name: 'Markdown Doc',
    iconPack: 'Clean Text',
    badge: 'Docs Ready',
    color: 'from-emerald-500/20 to-green-600/10 border-emerald-500/30',
    preview: `- 📁 **my-project**
  - 📂 **apps**
    - 📋 **package.json**
  - 📂 **packages**
    - 🔷 **core.ts**`,
  },
  {
    id: 'mermaid',
    name: 'Mermaid Diagram',
    iconPack: 'Flowchart',
    badge: 'Diagrams',
    color: 'from-indigo-500/20 to-purple-600/10 border-indigo-500/30',
    preview: `graph TD
  my_project["my-project"] --> apps["apps"]
  apps --> package_json["package.json"]
  my_project --> packages["packages"]
  packages --> core_ts["core.ts"]`,
  },
];

export function ThemeGallery() {
  const [selectedTheme, setSelectedTheme] = useState('vscode');

  return (
    <section id="themes" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold">
          <Sparkles className="h-3.5 w-3.5" /> High Precision Themes
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Visual Aesthetics That Impress
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
          Choose from curated presets matching your terminal, documentation site, or IDE setup.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {THEME_PREVIEWS.map((item) => {
          const isSelected = selectedTheme === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedTheme(item.id)}
              className={`relative rounded-2xl border p-6 transition-all cursor-pointer bg-card/90 backdrop-blur-xl shadow-lg hover:scale-[1.02] ${
                isSelected
                  ? `border-2 bg-gradient-to-br ${item.color} ring-2 ring-primary/40`
                  : 'border-border/60 hover:border-border'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base tracking-tight">{item.name}</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-muted text-muted-foreground border border-border">
                    {item.badge}
                  </span>
                </div>
                {isSelected && (
                  <div className="h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>

              <div className="font-mono text-xs text-muted-foreground mb-3">
                Icon Pack: <span className="text-foreground font-medium">{item.iconPack}</span>
              </div>

              {/* Code Box */}
              <pre className="p-4 rounded-xl bg-black/90 text-neutral-100 font-mono text-xs leading-relaxed border border-white/10 overflow-x-auto">
                {item.preview}
              </pre>
            </div>
          );
        })}
      </div>
    </section>
  );
}
