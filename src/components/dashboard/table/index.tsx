import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import moment from 'moment';

import { IStudent } from '../../../state/ducks/student/types';
import TableGradeFlag from '../tableGradeFlag';
import OptionsMenu from '../optionsMenu';

import './style.css';

interface IProps {
  students: IStudent[] | [];
}

export default function BasicTable({ students }: IProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className="">
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
            <TableRow key={student._id} className="tr">
              <TableCell align="left">{student.name}</TableCell>
              <TableCell align="center">{student.marks}</TableCell>
              <TableCell align="center">{student.subject}</TableCell>
              <TableCell align="center">
                <TableGradeFlag title={student.grade} />
              </TableCell>
              <TableCell align="center">
                <div className="dateTD">
                  <span className="date">
                    {moment(student.createdAt).format('ll')}
                  </span>
                  <span className="time">
                    at {moment(student.createdAt).format('LT')}
                  </span>
                </div>
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
