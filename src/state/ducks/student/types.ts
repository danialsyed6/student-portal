import { ActionType } from 'typesafe-actions';

import { getStudents } from './actions';

export interface IStudentForm {
  name: string;
  subject: string;
  grade: string;
  marks: number;
}

export interface IStudent extends IStudentForm {
  _id: string;
  createdAt: string;
}

export interface IStudentState {
  students: IStudent[] | [];
  loading: boolean;
  error: null | string;
}

export const StudentActionTypes = {
  GET_STUDENTS: '@student/getStudentRequest',
};

export interface IDispatchToProps {
  getStudents: () => ActionType<typeof getStudents>;
}
