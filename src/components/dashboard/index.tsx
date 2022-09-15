import React from 'react';
import GradeFlag from './gradeFlag';
import Table from './table';

import { Container, Grid, Typography } from '@mui/material';
import Button from './button';
import {
  ctaStyle,
  ctaTextStyle,
  gradesStyle,
  headerStyle,
  headerTextStyle,
} from './styles';
import { students } from '../../state/utils/data';

const Dashboard = () => {
  return (
    <Container>
      <Grid container direction="column" rowGap={3}>
        <Grid item sx={headerStyle}>
          <Typography component="h1" sx={headerTextStyle}>
            Student Portal
          </Typography>
        </Grid>
        <Grid item sx={ctaStyle}>
          <Typography sx={ctaTextStyle}>Students Sammary</Typography>
          <Button text="+ Add Data" onClick={() => {}} secondary />
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
