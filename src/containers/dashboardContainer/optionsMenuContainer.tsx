import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { OptionsMenu } from '../../components';
import { deleteStudent } from '../../state/ducks/student/actions';

interface IProps {
  id: string;
}

const OptionsMenuContainer = ({ id }: IProps) => {
  const dispatch = useDispatch();

  const dispatchToProps = {
    deleteStudent: useCallback(
      (id: string) => dispatch(deleteStudent(id)),
      [dispatch]
    ),
  };

  return <OptionsMenu id={id} {...dispatchToProps} />;
};

export default OptionsMenuContainer;
