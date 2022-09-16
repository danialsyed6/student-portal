import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ActionType } from 'typesafe-actions';

import GradeFlag from './gradeFlag';
import Table from './table';
import { Loader, Button } from '../common';
import {
  studentSummaryStyle,
  studentSummaryTextStyle,
  gradesStyle,
  headerStyle,
  headerTextStyle,
  noStudentsStyle,
  noStudentsTextStyle,
} from './styles';
import { IStudentState } from '../../state/ducks/student/types';
import { getStudents } from '../../state/ducks/student/actions';

interface IProps extends IStudentState {
  getStudents: () => ActionType<typeof getStudents>;
}

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
        {loading ? (
          <Loader />
        ) : students.length > 0 ? (
          <Table students={students} />
        ) : (
          <Box sx={noStudentsStyle}>
            <Typography component="h2" sx={noStudentsTextStyle}>
              There are no students in the database.
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Dashboard;
