import React, { Suspense, useState } from 'react';
import './App.css';

import NoRerender from './components/NoRerender';
import RightClick from './components/RightClick';
import Count from './components/ErrorInReactNeedExplain';
import AppContextProvider, { useAppContext } from './components/Context';
// import Posts from 'pages/posts/Posts';

const Effect = React.lazy(() => import('./components/Effect'));

function App() {
  const [name, setName] = useState('A');
  const [components, setComponents] = useState<any[]>([]);

  const handleClick = () => {
    setName((prev) => `${prev}N`);
  };

  const handleImport = async () => {
    const Effect = await import('./components/Effect');
    setComponents([Effect]);
  };
  return (
    <div className='App'>
      {/* <Posts /> */}
      {/* <Count isUseLayout={false} />
      <Count isUseLayout />
      <RightClick defaultName={name} /> */}
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Effect />
      </Suspense> */}
      {/* <NoRerender /> */}
      {/* <button onClick={handleClick}>Click</button>
      {components.map((c) => c)} */}
      {/* <AppContextProvider>
        <Effect />
      </AppContextProvider> */}
      {/* <button onClick={handleImport}>Dynamic Import</button> */}
    </div>
  );
}

export default App;
