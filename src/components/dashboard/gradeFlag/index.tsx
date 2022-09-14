import { Paper } from '@mui/material';
import React from 'react';

import './style.css';

interface IProps {
  danger?: boolean;
  title: string;
  grade: string;
}

const GradeFlag = ({ danger = false, title, grade }: IProps) => {
  return (
    <Paper
      sx={{
        width: '146px',
        height: '99px',
        background: '#4aaa9a',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: '#fff',
        ...(danger && {
          background: '#ff6897',
        }),
      }}
    >
      <p className="flag_title">{title}</p>
      <p className="flag_subtitle">{grade}</p>
    </Paper>
  );
};

export default GradeFlag;
