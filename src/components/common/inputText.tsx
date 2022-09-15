import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { Control, FieldValues, useController } from 'react-hook-form';

import { formControlStyles } from './styles';

interface IProps {
  name: string;
  label: string;
  control: Control<FieldValues, any>;
  type?: string;
}

const InputText = ({ name, label, control, type = 'text' }: IProps) => {
  const {
    field: { onChange, value /*  ref  */ },
    fieldState: { error: errorObj },
  } = useController({ name, control });

  const [error, setError] = useState(false);

  useEffect(() => {
    setError(errorObj ? true : false);
  }, [errorObj, name, value]);

  return (
    <FormControl variant="outlined" sx={formControlStyles} error={error}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        value={value || ''}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            {error && <ErrorIcon sx={error ? { color: 'red' } : {}} />}
          </InputAdornment>
        }
        label={label}
        type={type}
      />
      <FormHelperText error={error} id={`${name}-error`}>
        {error ? errorObj?.message : ' '}
      </FormHelperText>
    </FormControl>
  );
};

export default InputText;
