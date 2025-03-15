import React, { useState } from 'react';
import { useFederatedComponent } from './hooks/useFederatedComponent';

const Main = () => {
  const [{ module, scope, url }, setSystem] = useState({});

  const loadRemoteWidget = () => {
    setSystem({
      url: 'http://localhost:3001/remoteEntry.js',
      scope: 'remote',
      module: './Button',
    });
  };

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(url, scope, module);

  return (
    <>
      <div className="flex flex-col
      ">
        <h1>Dynamic System Host</h1>
        <p>Click para cargar widget remote</p>
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
    </>
  );
};

export default Main;
