import { defineConfig } from 'tsup';
import { dependencies } from './package.json';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  bundle: true,
  minify: !options.watch,
  dts: true,
  external: [...Object.keys(dependencies)],
  clean: !options.watch,
}));
