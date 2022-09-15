import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';

import { containerStyles, titleStyles } from './styles';
import { Button, InputSelect, InputText } from '../common';
import {
  gradeOptions,
  studentSchema,
  subjectOptions,
} from '../../state/utils/data';

const StudentForm = () => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const formFor = useLocation().pathname.includes('add') ? 'Add' : 'Edit';

  const [error, setError] = useState(false);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(studentSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" rowGap={3} sx={containerStyles}>
        <Typography
          component="h1"
          onClick={() => setError(!error)}
          sx={titleStyles}
        >
          {formFor} Student Data
        </Typography>
        <InputText name="name" label="Name" control={control} />
        <InputText name="marks" label="Marks" control={control} type="number" />

        <InputSelect
          name="subject"
          label="Subjects"
          options={subjectOptions}
          control={control}
        />
        <InputSelect
          name="grade"
          label="Grades"
          options={gradeOptions}
          control={control}
        />
        <Grid item container sx={{ justifyContent: 'space-between' }}>
          <Button text="Cancel" onClick={() => navigate('/')} secondary />
          <Button text={formFor} onClick={handleSubmit(onSubmit)} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentForm;
