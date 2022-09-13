import { action } from 'typesafe-actions';

import { StudentActionTypes } from './types';

export const getStudents = () =>
  action(StudentActionTypes.GET_STUDENTS, [], {
    method: 'get',
    route: '/posts',
  });
