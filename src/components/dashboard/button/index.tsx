import React, { MouseEventHandler } from 'react';

import './style.css';

interface IProps {
  secondary?: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ secondary = false, text, onClick }: IProps) => {
  return (
    <button
      className={`button ${!secondary && 'button-primary'} pointer`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
