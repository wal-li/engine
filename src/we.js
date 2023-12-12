#!/usr/bin/env node

import { createRequire } from "module";

global.require = createRequire(import.meta.url);
(await import("./cli.js")).execute();
