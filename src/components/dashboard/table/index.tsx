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

import TableGradeFlag from '../tableGradeFlag';
import OptionsMenu from '../optionsMenu';
import { dateStyle, timeStyle } from './styles';
import { IStudent } from '../../../state/ducks/student/types';
import { studentTableKeys } from '../../../state/utils/data';

interface IProps {
  students: IStudent[] | [];
}

export default function BasicTable({ students }: IProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {studentTableKeys.map((key, i) => (
              <TableCell
                align={i === 0 ? 'left' : 'center'}
                sx={{ fontWeight: 'bold' }}
                key={i}
              >
                {key}
              </TableCell>
            ))}
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
                <OptionsMenu id={student._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
