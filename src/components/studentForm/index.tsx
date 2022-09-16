import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Grid, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, InputSelect, InputText } from '../common';
import { containerStyles, titleStyles } from './styles';
import {
  gradeOptions,
  studentSchema,
  subjectOptions,
} from '../../state/utils/data';
import { FORM_TYPE } from '../../state/utils/enums';
import { IStudentForm } from '../../state/ducks/student/types';

const StudentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const formType = id ? FORM_TYPE.EDIT : FORM_TYPE.ADD;

  const { handleSubmit, control } = useForm<IStudentForm>({
    resolver: yupResolver(studentSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: IStudentForm) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" rowGap={3} sx={containerStyles}>
        <Typography component="h1" sx={titleStyles}>
          {formType} Student Data
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
          <Button text={formType} onClick={handleSubmit(onSubmit)} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentForm;
