import serveStatic from 'koa-static';
import { Server } from '@wal-li/server';
import { DEFAULT_PORT } from './constants.js';

export async function createEngine(cwd) {
  const server = new Server(DEFAULT_PORT);

  if (cwd) server.server.use(serveStatic(cwd));

  await server.start();

  return {
    server,
    async close() {
      await server.stop();
    }
  };
}
