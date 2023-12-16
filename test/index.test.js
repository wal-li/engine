import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { join } from 'node:path';
import { ENGINE_ROOT } from '../src/constants.js';
import { createEngine } from '../src/index.js';

chai.use(chaiHttp);

describe('server test', function () {
  it('should create a server', async () => {
    const engine = await createEngine();
    await engine.close();
  });

  it('should serve the static website', async () => {
    const engine = await createEngine(join(ENGINE_ROOT, 'examples/01-static-website'));

    const res = await chai.request(engine.server.address).get('/');
    expect(res.text).to.include('A Static Website');

    await engine.close();
  });
});
