import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDashboard, IDashboardState } from './types';

const initialState: IDashboardState = {
  dashboard: { name: '' },
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,

  reducers: {
    getDashboardRequest: state => {
      state.loading = true;
    },
    getDashboardSuccess: (state, { payload }: PayloadAction<IDashboard>) => {
      state.loading = false;
      state.dashboard = payload;
    },
    getDashboardFail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { getDashboardRequest, getDashboardSuccess, getDashboardFail } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
