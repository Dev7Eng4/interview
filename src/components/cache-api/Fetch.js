import React, { useEffect, useState } from 'react';

const Fetch = () => {
  const [data, setData] = useState();
  const [id, setId] = useState(1);

  useEffect(() => {
    fetchData(id);
  }, []);

  const fetchData = async (postId) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${postId}`,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'force-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        }
      ).then((_) => _.json());

      setData(res);
    } catch (err) {}
  };

  const handleReset = () => {
    fetchData(id + 1);
    setId((prevId) => prevId + 1);
  };

  const handleCache = () => {
    fetchData(id);
  };

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleCache}>Cache</button>
      {/* Data:
      {data.map((d) => (
        <p>{d.title}</p>
      ))} */}
      Data:
      <p>{data?.title || 'Initial'}</p>
    </div>
  );
};

export default Fetch;
