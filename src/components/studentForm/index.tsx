import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Grid, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { ActionType } from 'typesafe-actions';

import { Button, InputSelect, InputText } from '../common';
import { containerStyles, titleStyles } from './styles';
import {
  gradeOptions,
  studentSchema,
  subjectOptions,
} from '../../state/utils/data';
import { FORM_KEYS, FORM_TYPE } from '../../state/utils/enums';
import {
  IEditData,
  IStudentForm,
  IStudentState,
} from '../../state/ducks/student/types';
import { addStudent, editStudent } from '../../state/ducks/student/actions';

interface IProps extends IStudentState {
  addStudent: (data: IStudentForm) => ActionType<typeof addStudent>;
  editStudent: (data: IEditData) => ActionType<typeof editStudent>;
}

const StudentForm = ({ students, addStudent, editStudent }: IProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const formType = id ? FORM_TYPE.EDIT : FORM_TYPE.ADD;

  const student = students.find(student => student.id === parseInt(id || '0'));

  const { handleSubmit, control } = useForm<IStudentForm>({
    resolver: yupResolver(studentSchema),
    mode: 'onChange',
    defaultValues: student,
  });

  const onSubmit = (data: IStudentForm) => {
    if (formType === FORM_TYPE.ADD) addStudent(data);
    else
      editStudent({
        id: parseInt(id || '0'),
        data,
      });

    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" rowGap={3} sx={containerStyles}>
        <Typography component="h1" sx={titleStyles}>
          {formType} Student Data
        </Typography>
        <InputText name={FORM_KEYS.NAME} label="Name" control={control} />
        <InputText
          name={FORM_KEYS.MARKS}
          label="Marks"
          control={control}
          type="number"
        />

        <InputSelect
          name={FORM_KEYS.SUBJECT}
          label="Subjects"
          options={subjectOptions}
          control={control}
        />
        <InputSelect
          name={FORM_KEYS.GRADE}
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
