#!/usr/bin/env node

import process from 'node:process';
import yargs from 'yargs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { hideBin } from 'yargs/helpers';
import { createEngine } from './index.js';
import { DEFAULT_WEB_PORT } from './constants.js';

global.require = createRequire(import.meta.url);

export async function execute() {
  const argv = yargs(hideBin(process.argv))
    .usage('Usage: $0 [options]')
    .option('root', {
      alias: 'r',
      type: 'string',
      description: 'Current web root directory'
    })
    .option('port', {
      alias: 'p',
      type: 'number',
      description: 'Current web port to serve.',
      default: DEFAULT_WEB_PORT
    }).argv;

  const webRoot = resolve(argv.root || '');
  await createEngine(webRoot, argv.port);
}

execute();
