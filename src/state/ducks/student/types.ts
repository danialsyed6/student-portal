export interface IStudentForm {
  name: string;
  subject: string;
  grade: string;
  marks: number;
}

export interface IStudent {
  _id: string;
  name: string;
  subject: string;
  grade: string;
  marks: number;
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
