import { Button as MuiButton, Typography } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import { buttonPrimaryStyle, buttonStyle, buttonTextStyle } from './styles';

interface IProps {
  secondary?: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ secondary = false, text, onClick }: IProps) => {
  return (
    <MuiButton
      className="pointer"
      onClick={onClick}
      variant="outlined"
      sx={{
        ...buttonStyle,
        ...(!secondary && buttonPrimaryStyle),
      }}
    >
      <Typography component="span" sx={buttonTextStyle}>
        {text}
      </Typography>
    </MuiButton>
  );
};

export default Button;
