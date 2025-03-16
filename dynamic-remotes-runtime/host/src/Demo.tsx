import React, { useContext, useState, Suspense } from 'react';
import { useFederatedComponent } from './hooks/useFederatedComponent';

const Demo = () => {
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
      <button
        className="font-bold rounded-lg text-base uppercase w-full p-3 bg-blue-600 text-white justify-center cursor-pointer"
        onClick={loadRemoteWidget}
      >
        Load Remote Widget
      </button>
      <div className="my-3"></div>
      <Suspense fallback="Loading System">
        {errorLoading ? `Error loading module "${module}"` : FederatedComponent && <FederatedComponent />}
      </Suspense>
    </>
  );
};

export default Demo;
