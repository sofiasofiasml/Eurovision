import { build } from 'vite';
import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';

function pureJsVitePlugin() {
  return {
    name: 'pure-js-ts-and-define',
    enforce: 'pre',
    configResolved(config) {
      for (const plugin of config.plugins) {
        if (plugin.name === 'vite:define') {
          plugin.transform = (code) => {
            if (code.includes('process.env.NODE_ENV')) {
              return code.replaceAll('process.env.NODE_ENV', JSON.stringify('production'));
            }
            return null;
          };
        }
      }
    },
    transform(code, id) {
      const cleanId = id.split('?')[0];
      if (cleanId.endsWith('.ts') || cleanId.endsWith('.tsx')) {
        const result = ts.transpileModule(code, {
          fileName: cleanId,
          compilerOptions: {
            target: ts.ScriptTarget.ES2020,
            module: ts.ModuleKind.ESNext,
            jsx: ts.JsxEmit.ReactJSX,
            sourceMap: true,
          },
        });
        return {
          code: result.outputText,
          map: result.sourceMapText ? JSON.parse(result.sourceMapText) : null,
        };
      }
      return null;
    },
  };
}

await build({
  configFile: false,
  base: './',
  plugins: [pureJsVitePlugin()],
  esbuild: false,
  build: {
    minify: false,
  },
});

// Sync dist/ to docs/ for GitHub Pages deployment
const distDir = path.resolve('dist');
const docsDir = path.resolve('docs');
if (fs.existsSync(distDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
  fs.cpSync(distDir, docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
}
