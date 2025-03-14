import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { dependencies } from './package.json';

const deps = dependencies;

export default defineConfig({
  server: {
    port: 3000,
  },
  source: {
    tsconfigPath: './tsconfig.json',
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      filename: 'remoteEntry.js',
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
});
