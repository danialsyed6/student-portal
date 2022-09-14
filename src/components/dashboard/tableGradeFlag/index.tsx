import { Paper, Typography } from '@mui/material';
import React from 'react';
import styles from './style';

interface IProps {
  title: string;
}

const TableGradeFlag = ({ title }: IProps) => {
  return (
    <Paper
      sx={{
        ...styles.miniflag,
        ...(['B+', 'B-'].includes(title) && styles.miniflagLight),
        ...(title === 'F' && styles.miniflagRed),
      }}
    >
      <Typography
        sx={{
          ...styles.miniflagTitle,
          ...(['B+', 'B-'].includes(title) && styles.miniflagTitleLight),
          ...(title === 'F' && styles.miniflagTitleRed),
        }}
      >
        {title}
      </Typography>
    </Paper>
  );
};

export default TableGradeFlag;
