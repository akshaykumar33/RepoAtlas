import { Command } from 'commander';
import { generateCommand } from './commands/generate';
import { doctorCommand } from './commands/doctor';
import { initCommand } from './commands/init';

export function createCli(): Command {
  const program = new Command();

  program
    .name('repo-atlas')
    .description('Transform any repository into beautiful, configurable visual project structures')
    .version('0.1.0');

  program
    .command('generate [dir]')
    .alias('gen')
    .description('Generate visualization for target repository directory')
    .option(
      '-f, --format <format>',
      'Output format (unicode, ascii, markdown, json, mermaid)',
      'unicode'
    )
    .option('-d, --depth <depth>', 'Maximum directory scan depth', (val) => parseInt(val, 10))
    .option('-i, --icon-pack <pack>', 'Icon pack (emoji, unicode, plain)', 'emoji')
    .option('-s, --show-size', 'Display file sizes')
    .option('-o, --output <file>', 'Save output to specified file path')
    .action(async (dir, options) => {
      try {
        const output = await generateCommand(dir || '.', options);
        console.log(output);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Error generating repository structure:', msg);
        process.exitCode = 1;
      }
    });

  program
    .command('doctor')
    .description('Check CLI setup, environment, and registered renderer plugins')
    .action(async () => {
      try {
        const result = await doctorCommand();
        console.log(result);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Doctor check failed:', msg);
        process.exitCode = 1;
      }
    });

  program
    .command('init [dir]')
    .description('Create a default repo-atlas.config.json file')
    .action(async (dir) => {
      try {
        const message = await initCommand(dir);
        console.log(message);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Initialization failed:', msg);
        process.exitCode = 1;
      }
    });

  return program;
}
