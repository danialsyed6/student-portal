export interface IDashboard {
  name: string;
}

export interface IDashboardState {
  dashboard: IDashboard;
  loading: boolean;
  error: null | string;
}
