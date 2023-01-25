import { useEffect, useState } from 'react';

const PREFIX = 'name';

const useLocalStorage = (key: string, initialValue: unknown) => {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState<string>(() => {
    const jsonValue = window.localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
