export interface IStudentForm {
  name: string;
  subject: string;
  grade: string;
  marks: number;
}

export interface IStudent extends IStudentForm {
  id: number;
  createdAt: string;
}

export interface IStudentState {
  students: IStudent[] | [];
  loading: boolean;
  error: null | string;
}

export interface IEditData {
  id: number;
  data: IStudentForm;
}

export const StudentActionTypes = {
  GET_STUDENTS: '@student/getStudentsRequest',
  ADD_STUDENT: '@student/addStudentRequest',
  EDIT_STUDENT: '@student/editStudentRequest',
  DELETE_STUDENT: '@student/deleteStudentRequest',
};
