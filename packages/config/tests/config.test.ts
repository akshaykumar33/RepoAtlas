import { describe, expect, it } from 'vitest';
import { DEFAULT_CONFIG, loadConfig } from '../src/index';

describe('Config Loader', () => {
  it('returns default options when no config file exists', async () => {
    const config = await loadConfig();
    expect(config.format).toBe(DEFAULT_CONFIG.format);
    expect(config.iconPack).toBe('emoji');
  });

  it('allows CLI options to override defaults', async () => {
    const config = await loadConfig(process.cwd(), { format: 'mermaid', showSize: true });
    expect(config.format).toBe('mermaid');
    expect(config.showSize).toBe(true);
  });
});
