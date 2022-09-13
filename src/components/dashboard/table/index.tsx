import React from 'react';

import MiniFlag from '../miniFlag';
import { IStudent } from '../../../state/ducks/student/types';
import { getDate } from '../../../utils';

import './style.css';
import Dropdown from '../dropdown';

interface IProps {
  students: IStudent[] | [];
}

const Flag = ({ students }: IProps) => {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <th className="th">Name</th>
          <th className="th">Marks</th>
          <th className="th">Subject</th>
          <th className="th">Grades</th>
          <th className="th">Date</th>
          <th className="th">Action</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {students.map(student => {
          const { date, time } = getDate(student.createdAt);
          return (
            <tr className="tr">
              <td className="td">{student.name}</td>
              <td className="td">{student.marks}</td>
              <td className="td">{student.subject}</td>
              <td className="td">
                <MiniFlag title={student.grade} />
              </td>
              <td className="td dateTD">
                <span className="date">{date}</span>
                <span className="time">at {time}</span>
              </td>
              <td className="td" style={{ position: 'relative' }}>
                <Dropdown />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Flag;
