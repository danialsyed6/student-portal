import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import {
  studentSummaryStyle,
  studentSummaryTextStyle,
  gradesStyle,
  headerStyle,
  headerTextStyle,
} from './styles';
import GradeFlag from './gradeFlag';
import Table from './table';
import Button from './button';
import { students } from '../../state/utils/data';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

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
            onClick={() => navigate('/addStudent')}
            secondary
          />
        </Grid>
        <Grid item sx={gradesStyle}>
          <GradeFlag title="Top Grade" grade="A+" />
          <GradeFlag title="Top Grade" grade="A+" />
          <GradeFlag title="Top Grade" grade="A+" danger />
          <GradeFlag title="Top Grade" grade="A+" danger />
        </Grid>
        <Table students={students} />
      </Grid>
    </Container>
  );
};

export default Dashboard;
