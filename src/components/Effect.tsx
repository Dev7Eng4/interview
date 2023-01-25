import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from './Context';
import OrderHook from './OrderHook';

const Effect = () => {
  // const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const { name, updateName } = useAppContext();

  useEffect(() => {
    if (age === 2) {
      setAge(10);
      // setName('Name');
    }

    // return will run
    // + before unmount
    // + if have dependence in useeffect -> when dependence change -> update ui ->
    // + run return -> run in useeffect (if age === 2)
    return () => {
      console.log('unmount');
    };
  }, [age]);

  console.log('outline re-render');

  const handleClick = () => {
    // setAge((prevAge) => prevAge + 1);
    // setName((prevName) => prevName + 'n');
    updateName('ab');
  };

  return (
    <div>
      <p>Count</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <OrderHook />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Effect;
