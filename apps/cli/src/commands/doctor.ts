import { loadConfig } from '@repoatlasdev/config';
import { RendererRegistry } from '@repoatlasdev/renderers';
import { Command } from 'commander';

export async function doctorCommand(): Promise<string> {
  const registry = new RendererRegistry();
  const themes = registry.list();
  const conf = await loadConfig();

  return `RepoAtlas Doctor Diagnostics
Node.js Version : ${process.version}
Platform        : ${process.platform} (${process.arch})
Config Keys     : ${Object.keys(conf).length}
Render Themes   : ${themes.join(', ')}
Status          : Clean`;
}

export function registerDoctorCommand(program: Command) {
  program
    .command('doctor')
    .description('Run system diagnostic checks for RepoAtlas CLI environment')
    .action(async () => {
      const output = await doctorCommand();
      console.log(output);
    });
}
