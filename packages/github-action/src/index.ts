import { runAction } from './action';

export * from './action';

runAction({})
  .then(({ structurePath, mermaidPath }) => {
    console.log(`Successfully generated structure at ${structurePath}`);
    if (mermaidPath) {
      console.log(`Successfully generated mermaid diagram at ${mermaidPath}`);
    }
  })
  .catch((err) => {
    console.error('RepoAtlas GitHub Action failed:', err);
    process.exitCode = 1;
  });
