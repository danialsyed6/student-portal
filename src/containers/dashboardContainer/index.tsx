import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Dashboard } from '../../components';
import { useAppSelector } from '../../state/ducks';
import { getStudents } from '../../state/ducks/student/actions';
import { clearError } from '../../state/ducks/student/reducer';
import { selectDashboard } from '../../state/ducks/student/selectors';
import { IDashboard, IStudentState } from '../../state/ducks/student/types';

const DashboardContainer = () => {
  const dispatch = useDispatch();

  const stateToProps: IStudentState = useAppSelector(state => state.student);
  const dashboard: IDashboard = selectDashboard(stateToProps);

  const dispatchToProps = {
    getStudents: useCallback(() => dispatch(getStudents()), [dispatch]),
    clearError: useCallback(() => dispatch(clearError()), [dispatch]),
  };

  return (
    <Dashboard {...stateToProps} dashboard={dashboard} {...dispatchToProps} />
  );
};

export default DashboardContainer;
