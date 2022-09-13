export interface IStudent {
  name: string;
}

export interface IStudentState {
  students: IStudent[] | [];
  loading: boolean;
  error: null | string;
}

export const StudentActionTypes = {
  GET_STUDENTS: '@student/getStudentRequest',
};
