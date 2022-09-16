export interface IDashboard {
  topGrade: string;
  mostPassed: string;
  lowestGrade: string;
  mostFailed: string;
}

export interface IDashboardState {
  dashboard: IDashboard;
  loading: boolean;
  error: null | string;
}

export const DashboardActionTypes = {
  GET_DASHBOARD: '@dashboard/getDashboardRequest',
};
