import * as path from 'node:path';
import { scanRepository } from '@repoatlasdev/core';
import { ExporterRegistry } from '@repoatlasdev/exporters';
import { IconPack, IconResolver } from '@repoatlasdev/icons';
import { RendererRegistry } from '@repoatlasdev/renderers';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const generateCmd = vscode.commands.registerCommand('repo-atlas.generate', async () => {
    const targetFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    if (!targetFolder) {
      vscode.window.showErrorMessage('No workspace folder open in VSCode.');
      return;
    }

    try {
      const config = vscode.workspace.getConfiguration('repoAtlas');
      const maxDepth = config.get<number>('maxDepth') || 4;
      const theme = config.get<string>('theme') || 'unicode';
      const iconPack = config.get<string>('iconPack') || 'emoji';

      const tree = await scanRepository({ rootDir: targetFolder, maxDepth });
      const rendererRegistry = new RendererRegistry();
      const iconResolver = new IconResolver(iconPack as IconPack);

      const rendered = rendererRegistry.render(tree, theme, { iconResolver });
      const doc = await vscode.workspace.openTextDocument({
        content: rendered,
        language: 'plaintext',
      });
      await vscode.window.showTextDocument(doc);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      vscode.window.showErrorMessage(`RepoAtlas Error: ${msg}`);
    }
  });

  const previewCmd = vscode.commands.registerCommand('repo-atlas.preview', async () => {
    const targetFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    if (!targetFolder) {
      vscode.window.showErrorMessage('No workspace folder open.');
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      'repoAtlasPreview',
      'RepoAtlas Structure',
      vscode.ViewColumn.Two,
      {
        enableScripts: true,
      }
    );

    const tree = await scanRepository({ rootDir: targetFolder, maxDepth: 3 });
    const rendererRegistry = new RendererRegistry();
    const rendered = rendererRegistry.render(tree, 'unicode');

    panel.webview.html = `<!DOCTYPE html>
      <html>
        <head><style>body { font-family: monospace; padding: 15px; background: #1e1e1e; color: #d4d4d4; white-space: pre; }</style></head>
        <body>${rendered}</body>
      </html>`;
  });

  const copyTreeCmd = vscode.commands.registerCommand('repo-atlas.copyTree', async () => {
    const targetFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    if (!targetFolder) return;

    const tree = await scanRepository({ rootDir: targetFolder });
    const rendererRegistry = new RendererRegistry();
    const rendered = rendererRegistry.render(tree, 'unicode');

    await vscode.env.clipboard.writeText(rendered);
    vscode.window.showInformationMessage('RepoAtlas structure copied to clipboard!');
  });

  const exportTreeCmd = vscode.commands.registerCommand('repo-atlas.exportTree', async () => {
    const targetFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    if (!targetFolder) return;

    const tree = await scanRepository({ rootDir: targetFolder });
    const exporterRegistry = new ExporterRegistry();
    const result = exporterRegistry.export(tree, 'json');

    const uri = await vscode.window.showSaveDialog({
      defaultUri: vscode.Uri.file(path.join(targetFolder, 'PROJECT_STRUCTURE.json')),
    });
    if (uri) {
      await vscode.workspace.fs.writeFile(uri, Buffer.from(String(result.content)));
      vscode.window.showInformationMessage(`Exported to ${uri.fsPath}`);
    }
  });

  const generateMarkdownCmd = vscode.commands.registerCommand(
    'repo-atlas.generateMarkdown',
    async () => {
      const targetFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
      if (!targetFolder) return;

      const tree = await scanRepository({ rootDir: targetFolder });
      const exporterRegistry = new ExporterRegistry();
      const result = exporterRegistry.export(tree, 'md');

      const doc = await vscode.workspace.openTextDocument({
        content: String(result.content),
        language: 'markdown',
      });
      await vscode.window.showTextDocument(doc);
    }
  );

  const generateMermaidCmd = vscode.commands.registerCommand(
    'repo-atlas.generateMermaid',
    async () => {
      const targetFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
      if (!targetFolder) return;

      const tree = await scanRepository({ rootDir: targetFolder });
      const exporterRegistry = new ExporterRegistry();
      const result = exporterRegistry.export(tree, 'mermaid');

      const doc = await vscode.workspace.openTextDocument({
        content: String(result.content),
        language: 'mermaid',
      });
      await vscode.window.showTextDocument(doc);
    }
  );

  context.subscriptions.push(
    generateCmd,
    previewCmd,
    copyTreeCmd,
    exportTreeCmd,
    generateMarkdownCmd,
    generateMermaidCmd
  );
}

export function deactivate() {}
