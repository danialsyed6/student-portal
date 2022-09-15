import React from 'react';
import { Paper, Typography } from '@mui/material';

import {
  gradeFlag,
  gradeFlagLight,
  gradeFlagRed,
  gradeFlagTitle,
  gradeFlagTitleLight,
  gradeFlagTitleRed,
} from './styles';

interface IProps {
  title: string;
}

const TableGradeFlag = ({ title }: IProps) => {
  return (
    <Paper
      sx={{
        ...gradeFlag,
        ...(['B+', 'B-'].includes(title) && gradeFlagLight),
        ...(title === 'F' && gradeFlagRed),
      }}
    >
      <Typography
        sx={{
          ...gradeFlagTitle,
          ...(['B+', 'B-'].includes(title) && gradeFlagTitleLight),
          ...(title === 'F' && gradeFlagTitleRed),
        }}
      >
        {title}
      </Typography>
    </Paper>
  );
};

export default TableGradeFlag;
