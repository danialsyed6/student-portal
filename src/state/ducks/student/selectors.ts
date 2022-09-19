import { createSelector } from '@reduxjs/toolkit';

import { IDashboard, IStudentState } from './types';
import { getMostOccurences, getTopAndLowestGrade } from '../../utils/helpers';

const selectStudents = (state: IStudentState) => state.students;

export const selectDashboard = createSelector(
  selectStudents,
  (students): IDashboard => {
    const failed = students.filter(student => student.grade === 'F');
    const passed = students.filter(student => student.grade !== 'F');

    const mostFailed = getMostOccurences(failed);
    const mostPassed = getMostOccurences(passed);

    const { topGrade, lowestGrade } = getTopAndLowestGrade(students);

    return {
      mostFailed,
      mostPassed,
      topGrade,
      lowestGrade,
    };
  }
);
