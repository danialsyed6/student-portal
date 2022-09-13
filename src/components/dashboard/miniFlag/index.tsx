import React from 'react';

import './style.css';

interface IProps {
  title: string;
}

const MiniFlag = ({ title }: IProps) => {
  return (
    <div className="miniflag red">
      <p className="miniflag_title">{title}</p>
    </div>
  );
};

export default MiniFlag;
