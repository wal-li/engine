import { Server } from '@wal-li/server';
import { DEFAULT_PORT } from './constants.js';

export async function createEngine() {
  const server = new Server(DEFAULT_PORT);

  await server.start();

  return {
    async close() {
      await server.stop();
    }
  };
}
