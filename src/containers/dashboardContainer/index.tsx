import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Dashboard } from '../../components';
import { useAppSelector } from '../../state/ducks';
import { getStudents } from '../../state/ducks/student/actions';
import { IStudentState } from '../../state/ducks/student/types';

const DashboardContainer = () => {
  const dispatch = useDispatch();

  const stateToProps: IStudentState = useAppSelector(state => state.student);

  const dispatchToProps = {
    getStudents: useCallback(() => dispatch(getStudents()), [dispatch]),
  };

  return <Dashboard {...stateToProps} {...dispatchToProps} />;
};

export default DashboardContainer;
