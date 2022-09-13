export interface IStudent {
  name: string;
}

export interface IStudentState {
  student: IStudent;
  loading: boolean;
  error: null | string;
}
