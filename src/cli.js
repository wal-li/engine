import process from 'node:process';
import yargs from 'yargs';
import { resolve } from 'node:path';
import { hideBin } from 'yargs/helpers';
import { createEngine } from './index.js';

export async function execute() {
  const argv = yargs(hideBin(process.argv)).usage('Usage: $0 [options]').option('cwd', {
    alias: 'c',
    type: 'string',
    description: 'Current project directory'
  }).argv;

  const cwd = resolve(argv.cwd || '');
  await createEngine(cwd);
}
