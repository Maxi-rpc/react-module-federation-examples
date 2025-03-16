import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { dependencies } from './package.json';

const deps = dependencies;

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/ui/Button',
      },
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
