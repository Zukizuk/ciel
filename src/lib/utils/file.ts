import fs from "fs/promises";
import path, { join } from "path";
import { existsSync, mkdirSync, statSync } from "fs";

/**
 * Checks if a path exists (file or directory).
 */
export async function pathExists(targetPath: string): Promise<boolean> {
  return existsSync(targetPath);
}

export function createDirectories(basePath: string, dirs: string[]) {
  for (const dir of dirs) {
    const fullPath = join(basePath, dir);
    if (!existsSync(fullPath)) {
      mkdirSync(fullPath, { recursive: true });
    }
  }
}

/**
 * Reads and returns the contents of a file.
 */
export async function readFile(
  filePath: string,
  encoding: BufferEncoding = "utf-8"
): Promise<string> {
  return await fs.readFile(filePath, encoding);
}

/**
 * Writes content to a file, creating directories if needed.
 */
export async function writeFile(
  filePath: string,
  content: string
): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, "utf-8");
}

/**
 * Deletes a file if it exists.
 */
export async function deleteFile(filePath: string): Promise<void> {
  if (existsSync(filePath)) {
    await fs.unlink(filePath);
  }
}

/**
 * Creates a directory if it doesn’t exist.
 */
export async function ensureDir(dirPath: string): Promise<void> {
  if (!existsSync(dirPath)) {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

/**
 * Lists files in a directory.
 */
export async function listFilesInDir(dirPath: string): Promise<string[]> {
  if (!existsSync(dirPath)) return [];
  const entries = await fs.readdir(dirPath);
  return entries;
}

/**
 * Checks if a path is a directory.
 */
export function isDirectory(targetPath: string): boolean {
  return existsSync(targetPath) && statSync(targetPath).isDirectory();
}

/**
 * Checks if a path is a file.
 */
export function isFile(targetPath: string): boolean {
  return existsSync(targetPath) && statSync(targetPath).isFile();
}
