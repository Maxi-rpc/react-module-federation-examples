import React, { useState } from 'react';
import { useFederatedComponent } from './hooks/useFederatedComponent';

const Main = ({ data }) => {
  const [{ module, scope, url }, setSystem] = useState({});

  const loadRemoteWidget = () => {
    setSystem({
      url: 'http://localhost:3001/remoteEntry.js',
      scope: 'remote',
      module: './Table',
    });
  };

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(url, scope, module);

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic System Host</h1>
      <h2>Host</h2>
      <p>
        The Dynamic System will take advantage Module Federation <strong>remotes</strong> and <strong>exposes</strong>.
        It will not load components that have been loaded already.
      </p>
      <button
        className="font-bold rounded-lg text-lg  w-48 h-16 bg-[#374151] text-[#ffffff] justify-center"
        onClick={loadRemoteWidget}
      >
        Load Remote Widget
      </button>
      <div className="w-full" style={{ marginTop: '2em' }}>
        <React.Suspense fallback="Loading System">
          {errorLoading ? `Error loading module "${module}"` : FederatedComponent && <FederatedComponent />}
        </React.Suspense>
      </div>
    </div>
  );
};

export default Main;
