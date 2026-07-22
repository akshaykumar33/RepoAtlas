import * as vscode from 'vscode';
import path from 'node:path';
import { scanRepository, TreeNode } from '@repo-atlas/core';
import { RendererRegistry } from '@repo-atlas/renderers';
import { ExporterRegistry } from '@repo-atlas/exporters';
import { getWebviewContent } from './previewWebview';

export async function generateStructure(
  targetPath?: string,
  themePreset = 'vscode'
): Promise<{ tree: TreeNode; rendered: string }> {
  const rootDir = targetPath || vscode.workspace.workspaceFolders?.[0]?.uri.fsPath || process.cwd();

  const config = vscode.workspace.getConfiguration('repoAtlas');
  const maxDepth = config.get<number>('maxDepth') ?? 4;
  const respectGitIgnore = config.get<boolean>('respectGitIgnore') ?? true;

  const tree = await scanRepository({
    rootDir,
    maxDepth,
    respectGitIgnore,
  });

  const rendererRegistry = RendererRegistry.getInstance();
  const renderedOutput = await rendererRegistry.render(themePreset, tree, {
    showIcons: true,
  });

  return { tree, rendered: renderedOutput.content };
}

export function activate(context: vscode.ExtensionContext): void {
  // Command 1: Generate Structure in New Editor
  const generateCmd = vscode.commands.registerCommand(
    'repo-atlas.generate',
    async (uri?: vscode.Uri) => {
      try {
        const targetPath = uri?.fsPath;
        const { rendered } = await generateStructure(targetPath);
        const doc = await vscode.workspace.openTextDocument({
          content: rendered,
          language: 'plaintext',
        });
        await vscode.window.showTextDocument(doc);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`RepoAtlas Error: ${msg}`);
      }
    }
  );

  // Command 2: Live Webview Preview inside VSCode
  const previewCmd = vscode.commands.registerCommand(
    'repo-atlas.preview',
    async (uri?: vscode.Uri) => {
      try {
        const targetPath = uri?.fsPath;
        const { tree, rendered } = await generateStructure(targetPath);

        const panel = vscode.window.createWebviewPanel(
          'repoAtlasPreview',
          `RepoAtlas Preview - ${tree.name}`,
          vscode.ViewColumn.One,
          { enableScripts: true }
        );

        panel.webview.html = getWebviewContent(tree, rendered, 'VSCode');
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`RepoAtlas Preview Error: ${msg}`);
      }
    }
  );

  // Command 3: Copy Tree to Clipboard
  const copyCmd = vscode.commands.registerCommand(
    'repo-atlas.copyTree',
    async (uri?: vscode.Uri) => {
      try {
        const targetPath = uri?.fsPath;
        const { rendered } = await generateStructure(targetPath);
        await vscode.env.clipboard.writeText(rendered);
        vscode.window.showInformationMessage('RepoAtlas: Tree structure copied to clipboard!');
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`Copy Failed: ${msg}`);
      }
    }
  );

  // Command 4: Export Structure to File
  const exportCmd = vscode.commands.registerCommand(
    'repo-atlas.exportTree',
    async (uri?: vscode.Uri) => {
      try {
        const targetPath = uri?.fsPath;
        const { tree, rendered } = await generateStructure(targetPath);

        const format = await vscode.window.showQuickPick(
          [
            'txt',
            'md',
            'html',
            'json',
            'yaml',
            'xml',
            'csv',
            'docx',
            'pdf',
            'svg',
            'mermaid',
            'plantuml',
          ],
          { placeHolder: 'Select export format' }
        );

        if (!format) return;

        const exporterRegistry = ExporterRegistry.getInstance();
        const exportResult = await exporterRegistry.export(format, tree, rendered);

        const saveUri = await vscode.window.showSaveDialog({
          defaultUri: vscode.Uri.file(
            path.join(targetPath || process.cwd(), exportResult.filename)
          ),
        });

        if (saveUri) {
          const contentBuffer =
            typeof exportResult.content === 'string'
              ? Buffer.from(exportResult.content, 'utf-8')
              : exportResult.content;
          await vscode.workspace.fs.writeFile(saveUri, contentBuffer);
          vscode.window.showInformationMessage(
            `RepoAtlas: Exported successfully to ${saveUri.fsPath}`
          );
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`Export Failed: ${msg}`);
      }
    }
  );

  // Command 5: Generate Markdown
  const markdownCmd = vscode.commands.registerCommand(
    'repo-atlas.generateMarkdown',
    async (uri?: vscode.Uri) => {
      try {
        const targetPath = uri?.fsPath;
        const { tree, rendered } = await generateStructure(targetPath, 'markdown');
        const exporterRegistry = ExporterRegistry.getInstance();
        const result = await exporterRegistry.export('md', tree, rendered);

        const doc = await vscode.workspace.openTextDocument({
          content: result.content.toString(),
          language: 'markdown',
        });
        await vscode.window.showTextDocument(doc);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`Markdown Generation Failed: ${msg}`);
      }
    }
  );

  // Command 6: Generate Mermaid Diagram
  const mermaidCmd = vscode.commands.registerCommand(
    'repo-atlas.generateMermaid',
    async (uri?: vscode.Uri) => {
      try {
        const targetPath = uri?.fsPath;
        const { tree, rendered } = await generateStructure(targetPath);
        const exporterRegistry = ExporterRegistry.getInstance();
        const result = await exporterRegistry.export('mermaid', tree, rendered);

        const doc = await vscode.workspace.openTextDocument({
          content: result.content.toString(),
          language: 'mermaid',
        });
        await vscode.window.showTextDocument(doc);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`Mermaid Generation Failed: ${msg}`);
      }
    }
  );

  context.subscriptions.push(generateCmd, previewCmd, copyCmd, exportCmd, markdownCmd, mermaidCmd);
}

export function deactivate(): void {}
