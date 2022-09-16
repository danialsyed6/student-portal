import { action } from 'typesafe-actions';

import { IStudentForm, StudentActionTypes } from './types';

interface IData {
  id: string;
  data: IStudentForm;
}

export const getStudents = () =>
  action(StudentActionTypes.GET_STUDENTS, [], {
    method: 'get',
    route: '/students',
  });

export const addStudent = (data: IStudentForm) =>
  action(StudentActionTypes.ADD_STUDENT, [], {
    method: 'post',
    route: '/students',
    data,
  });

export const editStudent = ({ id, data }: IData) =>
  action(StudentActionTypes.EDIT_STUDENT, [], {
    method: 'patch',
    route: `/students/${id}`,
    data,
  });

export const deleteStudent = (id: string) =>
  action(StudentActionTypes.DELETE_STUDENT, id, {
    method: 'delete',
    route: `/students/${id}`,
  });
