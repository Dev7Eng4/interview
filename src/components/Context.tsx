import React, { useCallback, useContext, useMemo, useState } from 'react';

const AppContext = React.createContext({
  name: '',
  updateName: (name: string) => {},
});

const AppContextProvider = ({ children }: any) => {
  const [name, setName] = useState('');

  const updateName = useCallback(
    (name: string) => {
      setName(name);
    },
    [setName]
  );

  const value = useMemo(
    () => ({
      name,
      updateName,
    }),
    [name, setName]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const { name, updateName } = useContext(AppContext);

  return { name, updateName };
};
export default AppContextProvider;
