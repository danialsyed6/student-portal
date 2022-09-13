import React from 'react';
import { useDispatch } from 'react-redux';

import { Dashboard } from '../../components';
import { getStudents } from '../../state/ducks/student/actions';

const DashboardContainer = () => {
  const dispatch = useDispatch();
  dispatch(getStudents());
  return <Dashboard />;
};

export default DashboardContainer;
