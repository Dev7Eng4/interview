import React, { useEffect, useRef, useState } from 'react';

const NoRerender = () => {
  const [count, setCount] = useState(0);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const countRef = useRef(0);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = `Content ${count}`;
    }
  }, [countRef.current]);

  const handleChange = () => {
    setInterval(() => {
      // setCount((prevCount) => prevCount + 1);
      if (countRef.current) {
        countRef.current += 1;
      }
    }, 2000);
  };

  console.log('re-render');

  return (
    <div>
      <p ref={contentRef}>Content</p>
      <p>Count: {count}</p>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default NoRerender;
