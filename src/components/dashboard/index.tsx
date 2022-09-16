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
import { IStudent, IStudentState } from '../../state/ducks/student/types';
import { getStudents } from '../../state/ducks/student/actions';
import { alert } from '../../state/utils';
import { clearError } from '../../state/ducks/student/reducer';
import { getDashboard } from '../../state/ducks/dashboard/actions';
import { IDashboard } from '../../state/ducks/dashboard/types';

interface IProps extends IStudentState {
  getStudents: () => ActionType<typeof getStudents>;
  getDashboard: (data: IStudent[]) => ActionType<typeof getDashboard>;
  clearError: () => ActionType<typeof clearError>;
  dashboard: IDashboard;
}

const Dashboard = ({
  getStudents,
  getDashboard,
  dashboard,
  clearError,
  students,
  loading,
  error,
}: IProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  useEffect(() => {
    getDashboard(students);
  }, [students, getDashboard]);

  useEffect(() => {
    if (!error) return;

    alert(error);
    clearError();
  }, [error, clearError]);

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
          <GradeFlag title="Top Grade" grade={dashboard.topGrade} />
          <GradeFlag title="Most Passed" grade={dashboard.mostPassed} />
          <GradeFlag
            title="Lowest Grade"
            grade={dashboard.lowestGrade}
            danger
          />
          <GradeFlag title="Most Failed" grade={dashboard.mostFailed} danger />
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
