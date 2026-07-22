import path from 'node:path';

/**
 * Normalizes file path separators to standard forward slashes.
 */
export function normalizePath(filePath: string): string {
  return filePath.replace(/\\/g, '/');
}

/**
 * Calculates relative path using forward slashes.
 */
export function relativePath(from: string, to: string): string {
  return normalizePath(path.relative(from, to));
}

/**
 * Returns extension of a path in lowercase.
 */
export function getExtension(filePath: string): string {
  const ext = path.extname(filePath);
  return ext ? ext.substring(1).toLowerCase() : '';
}
