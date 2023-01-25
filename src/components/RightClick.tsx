import React, { FC, useState } from 'react';

interface Props {
  defaultName: string;
}

const b = {
  defaultName: 18,
};

const RightClick: FC<Props> = ({ defaultName }) => {
  const [name, setName] = useState(defaultName);
  const [a, setA] = useState(b);

  const handleClick = (e: React.MouseEvent) => {
    // not re-render
    setA(b);
    console.log('type', e.type);
    if (e.nativeEvent.which === 1) {
      console.log('1');
    } else if (e.nativeEvent.which === 3) {
      console.log('3');
    }
  };

  console.log('re-render123');

  return (
    <div>
      <p onClick={handleClick} onContextMenu={handleClick}>
        Click Me
      </p>
      <p>Name: {name}</p>
    </div>
  );
};

export default RightClick;
