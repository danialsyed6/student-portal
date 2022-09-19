import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { Control, useController } from 'react-hook-form';

import { formControlStyles } from './styles';
import { IStudentForm } from '../../state/ducks/student/types';
import { FORM_KEYS } from '../../state/utils/enums';

interface IProps {
  name: FORM_KEYS.NAME | FORM_KEYS.MARKS;
  label: string;
  control: Control<IStudentForm>;
  type?: string;
}

const InputText = ({ name, label, control, type = 'text' }: IProps) => {
  const {
    field: { onChange, value },
    fieldState: { error: errorObj },
  } = useController({ name, control });

  const isError = !!errorObj;

  return (
    <FormControl
      className="text"
      variant="outlined"
      sx={formControlStyles}
      error={isError}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        value={value || ''}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            {isError && <ErrorIcon sx={isError ? { color: 'red' } : {}} />}
          </InputAdornment>
        }
        label={label}
        type={type}
      />
      <FormHelperText error={isError} id={`${name}-error`}>
        {isError ? errorObj?.message : ' '}
      </FormHelperText>
    </FormControl>
  );
};

export default InputText;
