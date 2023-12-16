import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const DEFAULT_PORT = 8080;
export const ENGINE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../');
