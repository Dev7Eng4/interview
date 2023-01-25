import React, { useCallback, useMemo, useState } from 'react';
import RightClick from './RightClick';

const OrderHook = () => {
  const [count, setCount] = useState(() => {
    console.log('in useState');
    const initialCount = 0;
    return 0;
  });

  const getDoubleCount = useMemo(() => {
    console.log('in useMemo');
    return count * 2;
  }, [count]);

  const getTripleCount = useCallback(() => {
    console.log('in useCallback');
    return count * 3;
  }, [count]);

  console.log('in component');

  return (
    <div>
      Count: {count}
      Double: {getDoubleCount}
      Triple: {getTripleCount()}
    </div>
  );
};

export default React.memo(OrderHook);
