import { DirectoryMetadata, FileMetadata, SortOption, TreeNode } from './types/tree';

export function createTreeNode(node: TreeNode): TreeNode {
  return {
    ...node,
    children: node.type === 'directory' ? node.children || [] : undefined,
  };
}

export function getNodeSize(node: TreeNode): number {
  if (node.type === 'file') {
    return (node.metadata as FileMetadata)?.sizeBytes ?? 0;
  }
  return (node.metadata as DirectoryMetadata)?.totalSizeBytes ?? 0;
}

export function sortTreeNodes(nodes: TreeNode[], sortBy: SortOption = 'name'): TreeNode[] {
  return [...nodes].sort((a, b) => {
    if (sortBy === 'type') {
      if (a.type === 'directory' && b.type !== 'directory') return -1;
      if (a.type !== 'directory' && b.type === 'directory') return 1;
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    }

    if (sortBy === 'size') {
      const sizeA = getNodeSize(a);
      const sizeB = getNodeSize(b);
      return sizeB - sizeA; // Descending size
    }

    if (sortBy === 'date') {
      const dateA = new Date(a.metadata.modifiedAt).getTime();
      const dateB = new Date(b.metadata.modifiedAt).getTime();
      return dateB - dateA; // Newest first
    }

    // Default 'name' sort (directories first, then alphabetical)
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
