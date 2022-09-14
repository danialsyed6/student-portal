import React from 'react';
import GradeFlag from './gradeFlag';
import Table from './table';

import './styles.css';
import { Container, Grid, Typography } from '@mui/material';
import Button from './button';

const Dashboard = () => {
  const students = [
    {
      _id: '1',
      name: 'Ali Raza',
      subject: 'Maths',
      marks: 20,
      grade: 'F',
      createdAt: '2022-09-13T05:24:31.660Z',
    },
    {
      _id: '2',
      name: 'Ali Raza',
      subject: 'English',
      marks: 80,
      grade: 'A',
      createdAt: '2022-09-13T05:24:31.660Z',
    },
    {
      _id: '3',
      name: 'Ali Raza',
      subject: 'English',
      marks: 80,
      grade: 'B+',
      createdAt: '2022-09-13T05:24:31.660Z',
    },
  ];

  return (
    <Container>
      <Grid container direction="column" rowGap={3}>
        <Grid item className="dashboard_header">
          <Typography component="h1">Student Portal</Typography>
        </Grid>
        <Grid item className="dashboard_cta">
          <Typography component="h2">Students Sammary</Typography>
          <Button text="+ Add Data" onClick={() => {}} secondary />
        </Grid>
        <Grid item className="dashboard_things">
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
