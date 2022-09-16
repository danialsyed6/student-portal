import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { StudentForm } from '../../components';
import { useAppSelector } from '../../state/ducks';
import { addStudent, editStudent } from '../../state/ducks/student/actions';
import {
  IEditData,
  IStudentForm,
  IStudentState,
} from '../../state/ducks/student/types';

const StudentFormContainer = () => {
  const dispatch = useDispatch();

  const stateToProps: IStudentState = useAppSelector(state => state.student);

  const dispatchToProps = {
    addStudent: useCallback(
      (data: IStudentForm) => dispatch(addStudent(data)),
      [dispatch]
    ),
    editStudent: useCallback(
      (data: IEditData) => dispatch(editStudent(data)),
      [dispatch]
    ),
  };

  return <StudentForm {...stateToProps} {...dispatchToProps} />;
};

export default StudentFormContainer;
