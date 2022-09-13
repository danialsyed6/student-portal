import React from 'react';

import './style.css';

interface IProps {
  danger?: boolean;
  title: string;
  subtitle: string;
}

const Flag = ({ danger = false, title, subtitle }: IProps) => {
  return (
    <div className={`flag ${danger && 'flag-danger'}`}>
      <p className="flag_title">{title}</p>
      <p className="flag_subtitle">{subtitle}</p>
    </div>
  );
};

export default Flag;
