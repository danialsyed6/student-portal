import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMostOccurences, getTopAndLowestGrade } from '../../utils/helpers';
import { IStudent } from '../student/types';
import { IDashboardState } from './types';

const initialState: IDashboardState = {
  dashboard: {
    topGrade: 'N/A',
    mostPassed: 'N/A',
    lowestGrade: 'N/A',
    mostFailed: 'N/A',
  },
  loading: false,
  error: null,
};

const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,

  reducers: {
    getDashboardRequest: state => {
      state.loading = true;
    },
    getDashboardSuccess: (state, { payload }: PayloadAction<IStudent[]>) => {
      const failed = payload.filter(student => student.grade === 'F');
      const passed = payload.filter(student => student.grade !== 'F');
      const mostFailed = getMostOccurences(failed);
      const mostPassed = getMostOccurences(passed);

      const { topGrade, lowestGrade } = getTopAndLowestGrade(payload);

      state.loading = false;
      state.dashboard = {
        mostFailed,
        mostPassed,
        topGrade,
        lowestGrade,
      };
    },
    getDashboardFail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },

    clearError: state => {
      state.error = null;
    },
  },
});

export const {
  getDashboardRequest,
  getDashboardSuccess,
  getDashboardFail,
  clearError,
} = DashboardSlice.actions;

export default DashboardSlice.reducer;
