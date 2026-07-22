import fs from 'node:fs';
import path from 'node:path';
import { generateCommand, GenerateCmdOptions } from './generate';

export async function previewCommand(
  targetDir: string,
  options: GenerateCmdOptions
): Promise<void> {
  const absoluteTarget = path.resolve(targetDir || process.cwd());

  async function render() {
    console.clear();
    console.log(
      `\x1b[36m[RepoAtlas Preview]\x1b[0m Watching \x1b[1m${absoluteTarget}\x1b[0m for changes... (Press Ctrl+C to stop)\n`
    );
    try {
      const output = await generateCommand(absoluteTarget, options);
      console.log(output);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('\x1b[31mError generating preview:\x1b[0m', msg);
    }
  }

  await render();

  let debounceTimer: NodeJS.Timeout | null = null;
  fs.watch(absoluteTarget, { recursive: true }, (_eventType, filename) => {
    if (
      filename &&
      (filename.includes('node_modules') || filename.includes('.git') || filename.includes('dist'))
    ) {
      return;
    }
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      render();
    }, 300);
  });
}
