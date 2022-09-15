import * as React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import moment from 'moment';

import { dateStyle, timeStyle } from './styles';
import TableGradeFlag from '../tableGradeFlag';
import OptionsMenu from '../optionsMenu';
import { IStudent } from '../../../state/ducks/student/types';

interface IProps {
  students: IStudent[] | [];
}

export default function BasicTable({ students }: IProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
              Name
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Marks
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Subject
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Grades
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Date
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(student => (
            <TableRow key={student._id}>
              <TableCell align="left">{student.name}</TableCell>
              <TableCell align="center">{student.marks}</TableCell>
              <TableCell align="center">{student.subject}</TableCell>
              <TableCell align="center">
                <TableGradeFlag title={student.grade} />
              </TableCell>
              <TableCell align="center">
                <Box>
                  <Typography sx={dateStyle}>
                    {moment(student.createdAt).format('ll')}
                  </Typography>
                  <Typography sx={timeStyle}>
                    at {moment(student.createdAt).format('LT')}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <OptionsMenu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
