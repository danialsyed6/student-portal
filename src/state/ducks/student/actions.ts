import { action } from 'typesafe-actions';

import { IEditData, IStudentForm, StudentActionTypes } from './types';

export const getStudents = () =>
  action(StudentActionTypes.GET_STUDENTS, [], {
    method: 'get',
    route: '/students',
  });

export const addStudent = (data: IStudentForm) =>
  action(StudentActionTypes.ADD_STUDENT, data, {
    method: 'post',
    route: '/students',
  });

export const editStudent = ({ id, data }: IEditData) =>
  action(StudentActionTypes.EDIT_STUDENT, data, {
    method: 'put',
    route: `/students/${id}`,
  });

export const deleteStudent = (id: number) =>
  action(StudentActionTypes.DELETE_STUDENT, id, {
    method: 'delete',
    route: `/students/${id}`,
  });
