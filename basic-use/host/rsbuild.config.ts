import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { dependencies } from './package.json';

const deps = dependencies;

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      remotes: {
        remote: 'remote@http://localhost:3001/remoteEntry.js',
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
