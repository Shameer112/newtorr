import path from 'node:path';
import { createRequire } from 'node:module';
import { execa, Options as ExecaOptions } from 'execa';

// @ts-expect-error
import { BINARY } from './binding.mjs';

const require = createRequire(import.meta.url);

export function run(args: string[], options: ExecaOptions = {}) {
  const pkg = require.resolve(BINARY + '/package.json');
  const { platform } = process;
  const binary = path.join(path.dirname(pkg), platform === 'win32' ? 'aria2c.exe' : 'aria2c');
  return execa(binary, args, options);
}
