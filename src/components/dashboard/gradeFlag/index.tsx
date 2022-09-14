import { Paper, Typography } from '@mui/material';
import React from 'react';
import { flagSubtitleStyle, flagTitleStyle } from './styles';

import './styles.ts';

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
      <Typography sx={flagTitleStyle}>{title}</Typography>
      <Typography sx={flagSubtitleStyle}>{grade}</Typography>
    </Paper>
  );
};

export default GradeFlag;
