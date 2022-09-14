import { Button as MuiButton, Typography } from '@mui/material';
import React, { MouseEventHandler } from 'react';

import './style.css';

interface IProps {
  secondary?: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ secondary = false, text, onClick }: IProps) => {
  return (
    <MuiButton
      className={`button pointer`}
      onClick={onClick}
      variant="outlined"
      sx={{
        color: '#000',
        border: '1px solid #eff2f7',
        ...(!secondary && {
          backgroundColor: '#4aaa9acc',
          '&:hover': {
            backgroundColor: '#4aaa9acc',
          },
        }),
      }}
    >
      <Typography component="span">{text}</Typography>
    </MuiButton>
  );
};

export default Button;
