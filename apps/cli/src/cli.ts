import { Command, Option } from 'commander';
import { configCommand } from './commands/configCmd';
import { doctorCommand } from './commands/doctor';
import { generateCommand, GenerateCmdOptions } from './commands/generate';
import { initCommand } from './commands/init';
import { previewCommand } from './commands/preview';

export function createCli(): Command {
  const program = new Command();

  program
    .name('repo-atlas')
    .description(
      'Transform any repository into beautiful, configurable, documentation-ready visual project structures'
    )
    .version('0.1.0')
    .argument('[dir]', 'Target repository directory', '.')
    .action(async (dir, options) => {
      // If root command is invoked without subcommands, run generate by default
      try {
        const output = await generateCommand(dir, options);
        console.log(output);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Error generating repository structure:', msg);
        process.exitCode = 1;
      }
    });

  // Reusable Option Definitions
  const sharedOptions = [
    new Option('-e, --exclude <patterns...>', 'Exclude glob patterns (e.g. *.log, temp/)'),
    new Option('-i, --include <patterns...>', 'Include glob patterns'),
    new Option('--only <type>', 'Limit display to node type').choices([
      'files',
      'directories',
      'all',
    ]),
    new Option('-d, --depth <depth>', 'Maximum directory scan depth').argParser((val) => {
      const parsed = parseInt(val, 10);
      if (isNaN(parsed) || parsed < 0) {
        throw new Error('Depth must be a non-negative integer');
      }
      return parsed;
    }),
    new Option('-o, --output <file>', 'Target output destination file path'),
    new Option('-t, --theme <theme>', 'Theme preset').choices([
      'ascii',
      'unicode',
      'vscode',
      'material',
      'nerd-font',
      'markdown',
      'json',
      'mermaid',
    ]),
    new Option('--icons <pack>', 'Icon pack').choices([
      'emoji',
      'unicode',
      'plain',
      'ascii',
      'vscode',
      'material',
      'nerd',
    ]),
    new Option('-s, --sort <field>', 'Sort order').choices(['name', 'size', 'type', 'date']),
    new Option('--gitignore', 'Respect .gitignore rules').default(true),
    new Option('--no-gitignore', 'Ignore .gitignore files'),
    new Option('-c, --config <path>', 'Path to custom configuration file'),
    new Option('-w, --watch', 'Watch repository changes and re-render live'),
    new Option('--compact', 'Collapse single-child directory chains'),
    new Option('--color', 'Enable colored terminal output'),
    new Option('--show-size', 'Display file and directory sizes'),
  ];

  // Attach shared options to root program
  sharedOptions.forEach((opt) => program.addOption(opt));

  // --- COMMAND: generate ---
  const generate = program
    .command('generate [dir]')
    .alias('gen')
    .description('Generate repository tree visualization');

  sharedOptions.forEach((opt) => generate.addOption(opt));

  generate.action(async (dir, options: GenerateCmdOptions) => {
    try {
      if (options.watch) {
        await previewCommand(dir || '.', options);
        return;
      }
      const output = await generateCommand(dir || '.', options);
      console.log(output);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('Error generating repository structure:', msg);
      process.exitCode = 1;
    }
  });

  generate.addHelpText(
    'after',
    `
Examples:
  $ repo-atlas generate
  $ repo-atlas generate ./my-app --theme vscode --sort size
  $ repo-atlas generate --only directories --depth 2
  $ repo-atlas generate -o PROJECT_STRUCTURE.md --theme markdown
  $ repo-atlas generate --exclude "*.test.ts" "dist/"
  $ repo-atlas generate --watch
`
  );

  // --- COMMAND: preview ---
  const preview = program
    .command('preview [dir]')
    .description('Live interactive watcher that re-renders tree on file modifications');

  sharedOptions.forEach((opt) => preview.addOption(opt));

  preview.action(async (dir, options: GenerateCmdOptions) => {
    try {
      await previewCommand(dir || '.', options);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('Preview failed:', msg);
      process.exitCode = 1;
    }
  });

  preview.addHelpText(
    'after',
    `
Examples:
  $ repo-atlas preview
  $ repo-atlas preview ./packages --theme material
`
  );

  // --- COMMAND: init ---
  program
    .command('init [dir]')
    .description('Create a default repo-atlas.config.json configuration file')
    .action(async (dir) => {
      try {
        const message = await initCommand(dir);
        console.log(message);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Initialization failed:', msg);
        process.exitCode = 1;
      }
    })
    .addHelpText(
      'after',
      `
Examples:
  $ repo-atlas init
  $ repo-atlas init ./apps/cli
`
    );

  // --- COMMAND: doctor ---
  program
    .command('doctor')
    .description('Check CLI setup, environment health, and registered renderer plugins')
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

  // --- COMMAND: config ---
  const config = program.command('config').description('Manage repo-atlas configuration settings');

  config
    .command('list [dir]')
    .description('List all current configuration settings')
    .action(async (dir) => {
      try {
        const result = await configCommand('list', undefined, undefined, dir);
        console.log(result);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Config error:', msg);
        process.exitCode = 1;
      }
    });

  config
    .command('get <key> [dir]')
    .description('Get a configuration value by key')
    .action(async (key, dir) => {
      try {
        const result = await configCommand('get', key, undefined, dir);
        console.log(result);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Config error:', msg);
        process.exitCode = 1;
      }
    });

  config
    .command('set <key> <value> [dir]')
    .description('Set a configuration value')
    .action(async (key, value, dir) => {
      try {
        const result = await configCommand('set', key, value, dir);
        console.log(result);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Config error:', msg);
        process.exitCode = 1;
      }
    });

  return program;
}
