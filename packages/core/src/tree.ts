import { DirectoryMetadata, FileMetadata, SortOption, TreeNode } from './types/tree';

export function sortTreeNodes(nodes: TreeNode[], sortBy: SortOption = 'name'): TreeNode[] {
  return [...nodes].sort((a, b) => {
    // Directories first
    if (a.type === 'directory' && b.type !== 'directory') return -1;
    if (a.type !== 'directory' && b.type === 'directory') return 1;

    if (sortBy === 'size') {
      const sizeA =
        a.type === 'file'
          ? ((a.metadata as FileMetadata)?.sizeBytes ?? 0)
          : ((a.metadata as DirectoryMetadata)?.totalSizeBytes ?? 0);
      const sizeB =
        b.type === 'file'
          ? ((b.metadata as FileMetadata)?.sizeBytes ?? 0)
          : ((b.metadata as DirectoryMetadata)?.totalSizeBytes ?? 0);
      return sizeB - sizeA;
    }

    if (sortBy === 'type') {
      return a.type.localeCompare(b.type) || a.name.localeCompare(b.name);
    }

    return a.name.localeCompare(b.name);
  });
}
