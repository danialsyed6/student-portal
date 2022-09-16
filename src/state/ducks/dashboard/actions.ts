import { action } from 'typesafe-actions';
import { IStudent } from '../student/types';

import { DashboardActionTypes } from './types';

export const getDashboard = (data: IStudent[]) =>
  action(DashboardActionTypes.GET_DASHBOARD, data);
