import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import GradeFlag from './gradeFlag';
import Table from './table';
import { Loader, Button } from '../common';
import {
  studentSummaryStyle,
  studentSummaryTextStyle,
  gradesStyle,
  headerStyle,
  headerTextStyle,
} from './styles';
import {
  IDispatchToProps,
  IStudentState,
} from '../../state/ducks/student/types';

type IProps = IStudentState & IDispatchToProps;

const Dashboard = ({ getStudents, students, loading, error }: IProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  return (
    <Container>
      <Grid container direction="column" rowGap={3}>
        <Grid item sx={headerStyle}>
          <Typography component="h1" sx={headerTextStyle}>
            Student Portal
          </Typography>
        </Grid>
        <Grid item sx={studentSummaryStyle}>
          <Typography sx={studentSummaryTextStyle}>Students Sammary</Typography>
          <Button
            text="+ Add Data"
            onClick={() => navigate('/student')}
            secondary
          />
        </Grid>
        <Grid item sx={gradesStyle}>
          <GradeFlag title="Top Grade" grade="A+" />
          <GradeFlag title="Top Grade" grade="A+" />
          <GradeFlag title="Top Grade" grade="A+" danger />
          <GradeFlag title="Top Grade" grade="A+" danger />
        </Grid>
        {loading ? <Loader /> : <Table students={students} />}
      </Grid>
    </Container>
  );
};

export default Dashboard;
