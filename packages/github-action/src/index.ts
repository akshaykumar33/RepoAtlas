import { runAction } from './action';

export * from './action';

runAction().catch((err) => {
  console.error('RepoAtlas GitHub Action failed:', err);
  process.exitCode = 1;
});
