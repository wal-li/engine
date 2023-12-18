import serveStatic from 'koa-static';
import { Server } from '@wal-li/server';
import { DEFAULT_WEB_PORT } from './constants.js';

export async function createEngine(webRoot, webPort = DEFAULT_WEB_PORT) {
  const server = new Server(webPort, 'engine');

  if (webRoot) server.server.use(serveStatic(webRoot));

  await server.start();

  return {
    server,
    async close() {
      await server.stop();
    }
  };
}
