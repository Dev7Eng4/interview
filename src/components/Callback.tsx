import React, { FC } from 'react';

interface Props {
  onUpdate: () => void;
}

const Callback: FC<Props> = ({ onUpdate }) => {
  return <div>Callback</div>;
};

export default Callback;
