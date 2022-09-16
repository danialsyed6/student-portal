import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Dashboard } from '../../components';
import { useAppSelector } from '../../state/ducks';
import { getDashboard } from '../../state/ducks/dashboard/actions';
import { IDashboard } from '../../state/ducks/dashboard/types';
import { getStudents } from '../../state/ducks/student/actions';
import { clearError } from '../../state/ducks/student/reducer';
import { IStudent, IStudentState } from '../../state/ducks/student/types';

const DashboardContainer = () => {
  const dispatch = useDispatch();

  const stateToProps: IStudentState = useAppSelector(state => state.student);
  const dashboard: IDashboard = useAppSelector(
    state => state.dashboard.dashboard
  );

  const dispatchToProps = {
    getStudents: useCallback(() => dispatch(getStudents()), [dispatch]),
    getDashboard: useCallback(
      (data: IStudent[]) => dispatch(getDashboard(data)),
      [dispatch]
    ),
    clearError: useCallback(() => dispatch(clearError()), [dispatch]),
  };

  return (
    <Dashboard {...stateToProps} dashboard={dashboard} {...dispatchToProps} />
  );
};

export default DashboardContainer;
