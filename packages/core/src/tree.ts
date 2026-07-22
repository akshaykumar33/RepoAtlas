import { TreeNode } from './types/tree';

export function createTreeNode(node: TreeNode): TreeNode {
  return {
    ...node,
    children: node.type === 'directory' ? node.children || [] : undefined,
  };
}

export function sortTreeNodes(nodes: TreeNode[]): TreeNode[] {
  return [...nodes].sort((a, b) => {
    // Directories first
    if (a.type === 'directory' && b.type !== 'directory') return -1;
    if (a.type !== 'directory' && b.type === 'directory') return 1;
    return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
  });
}

export function filterTree(
  node: TreeNode,
  predicate: (node: TreeNode) => boolean
): TreeNode | null {
  if (!predicate(node)) return null;

  if (node.type === 'directory' && node.children) {
    const filteredChildren = node.children
      .map((child) => filterTree(child, predicate))
      .filter((child): child is TreeNode => child !== null);

    return {
      ...node,
      children: filteredChildren,
    };
  }

  return { ...node };
}
