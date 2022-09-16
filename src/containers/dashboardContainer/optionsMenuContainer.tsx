import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { OptionsMenu } from '../../components';
import { deleteStudent } from '../../state/ducks/student/actions';

interface IProps {
  id: number;
}

const OptionsMenuContainer = ({ id }: IProps) => {
  const dispatch = useDispatch();

  const dispatchToProps = {
    deleteStudent: useCallback(
      (id: number) => dispatch(deleteStudent(id)),
      [dispatch]
    ),
  };

  return <OptionsMenu id={id} {...dispatchToProps} />;
};

export default OptionsMenuContainer;
