import { createEngine } from '../src/index.js';

describe('server test', function () {
  it('should create a server', async () => {
    const engine = await createEngine();
    await engine.close();
  });
});
