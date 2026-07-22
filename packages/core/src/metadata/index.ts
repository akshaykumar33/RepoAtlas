import fs from 'node:fs/promises';
import { getExtension } from '@repo-atlas/utils';
import { DirectoryMetadata, FileMetadata } from '../types/tree';

export class MetadataResolver {
  async resolveFileMetadata(filePath: string, filename: string): Promise<FileMetadata> {
    const stats = await fs.stat(filePath);
    return {
      sizeBytes: stats.size,
      extension: getExtension(filename),
      modifiedAt: stats.mtime.toISOString(),
      createdAt: stats.birthtime.toISOString(),
    };
  }

  async resolveDirectoryMetadata(dirPath: string): Promise<DirectoryMetadata> {
    const stats = await fs.stat(dirPath);
    return {
      modifiedAt: stats.mtime.toISOString(),
    };
  }
}
