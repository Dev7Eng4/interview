import React, { FC, useEffect, useId, useLayoutEffect, useState } from 'react';

interface Props {
  isUseLayout: boolean;
}

const Count: FC<Props> = ({ isUseLayout }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!isUseLayout) {
      // 1
      console.log('in-use-effect', count);

      if (count > 2) {
        setCount(1);
      }
    }
  }, [count]);

  useLayoutEffect(() => {
    if (isUseLayout) {
      // 1
      console.log('in-use-effect', count);

      if (count > 2) {
        setCount(1);
      }
    }
  }, [count]);

  const handleClick = () => {
    // why when click third this component re-render (3 === 3)
    setCount((prevCount) => prevCount + 1);
  };

  // 2
  console.log('re-render', count);

  return (
    <div>
      <p>Count {count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Count;
