import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStudent, IStudentState } from './types';

const initialState: IStudentState = {
  students: [],
  loading: false,
  error: null,
};

const StudentSlice = createSlice({
  name: 'student',
  initialState,

  reducers: {
    getStudentsRequest: state => {
      state.loading = true;
    },
    getStudentsSuccess: (state, { payload }: PayloadAction<IStudent[]>) => {
      state.loading = false;
      state.students = payload.reverse();
    },
    getStudentsFail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },

    editStudentRequest: state => {
      state.loading = true;
    },
    editStudentSuccess: (state, { payload }: PayloadAction<IStudent>) => {
      state.loading = false;
      state.students = [
        payload,
        ...state.students.filter(student => student.id !== payload.id),
      ];
    },
    editStudentFail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },

    addStudentRequest: state => {
      state.loading = true;
    },
    addStudentSuccess: (state, { payload }: PayloadAction<IStudent>) => {
      state.loading = false;
      state.students = [payload, ...state.students];
    },
    addStudentFail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },

    deleteStudentRequest: state => {
      state.loading = true;
    },
    deleteStudentSuccess: (state, { payload }) => {
      state.loading = false;
      state.students = state.students.filter(student => student.id !== payload);
    },
    deleteStudentFail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },

    clearError: state => {
      state.error = null;
    },
  },
});

export const {
  getStudentsRequest,
  getStudentsSuccess,
  getStudentsFail,
  editStudentRequest,
  editStudentSuccess,
  editStudentFail,
  addStudentRequest,
  addStudentSuccess,
  addStudentFail,
  deleteStudentRequest,
  deleteStudentSuccess,
  deleteStudentFail,
  clearError,
} = StudentSlice.actions;

export default StudentSlice.reducer;
