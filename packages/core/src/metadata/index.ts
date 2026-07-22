import fs from 'node:fs/promises';
import { getExtension } from '@repoatlasdev/utils';
import { DirectoryMetadata, FileMetadata } from '../types/tree';

export class MetadataResolver {
  async resolveFileMetadata(filePath: string, fileName: string): Promise<FileMetadata> {
    const stats = await fs.stat(filePath);
    return {
      sizeBytes: stats.size,
      modifiedAt: stats.mtime.toISOString(),
      extension: getExtension(fileName),
    };
  }

  async resolveDirectoryMetadata(dirPath: string): Promise<DirectoryMetadata> {
    const stats = await fs.stat(dirPath);
    return {
      fileCount: 0,
      directoryCount: 0,
      totalSizeBytes: 0,
      modifiedAt: stats.mtime.toISOString(),
    };
  }
}
