import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Control, FieldValues, useController } from 'react-hook-form';

import { formControlStyles, menuItemStyles } from './styles';

interface IProps {
  name: string;
  label: string;
  options: { name: string; label: string }[];
  control: Control<FieldValues, any>;
}

const InputSelect = ({ name, label, options, control }: IProps) => {
  const {
    field: { onChange, value },
    fieldState: { error: errorObj },
  } = useController({ name, control });
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(errorObj ? true : false);
  }, [errorObj, name, value]);

  return (
    <FormControl sx={formControlStyles} error={error}>
      <InputLabel id={`${name}-label`} htmlFor={name}>
        {label}
      </InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        label={label}
        value={value || ''}
        onChange={e => {
          onChange(e);
        }}
      >
        {options.map((option, i) => (
          <MenuItem value={option.name} sx={menuItemStyles} key={i}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={error} id={`${name}-error`}>
        {error ? errorObj?.message : ' '}
      </FormHelperText>
    </FormControl>
  );
};

export default InputSelect;
