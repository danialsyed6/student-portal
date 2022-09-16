import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Control, useController } from 'react-hook-form';

import { formControlStyles, menuItemStyles } from './styles';
import { IStudentForm } from '../../state/ducks/student/types';
import { FORM_KEYS } from '../../state/utils/enums';

interface IProps {
  name: FORM_KEYS.GRADE | FORM_KEYS.SUBJECT;
  label: string;
  options: { name: string; label: string }[];
  control: Control<IStudentForm>;
}

const InputSelect = ({ name, label, options, control }: IProps) => {
  const {
    field: { onChange, value },
    fieldState: { error: errorObj },
  } = useController({ name, control });

  const isError = !!errorObj;

  return (
    <FormControl sx={formControlStyles} error={isError}>
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
          <MenuItem value={option.label} sx={menuItemStyles} key={i}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={isError} id={`${name}-error`}>
        {isError ? errorObj?.message : ' '}
      </FormHelperText>
    </FormControl>
  );
};

export default InputSelect;
