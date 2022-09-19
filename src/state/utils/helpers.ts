import lodash from 'lodash';

import { IStudent } from '../ducks/student/types';
import { gradeOptions } from './data';

export const getTopAndLowestGrade = (
  students: IStudent[]
): { topGrade: string; lowestGrade: string } => {
  const grades = gradeOptions.map(grade => grade.label);

  let topGrade = 'N/A';
  let lowestGrade = 'N/A';

  grades.forEach(grade => {
    const exists = students.some(student => student.grade === grade);

    if (!exists) return;

    if (topGrade === 'N/A') topGrade = grade;
    lowestGrade = grade;
  });

  return {
    topGrade,
    lowestGrade,
  };
};

export const getMostOccurences = (students: IStudent[]): string => {
  if (students.length === 0) return 'N/A';
  const subjects = students.map(student => student.subject);

  const mostOccuringSubject: string = lodash.head(
    lodash(subjects).countBy().entries().maxBy(lodash.last)
  ) as string;

  return mostOccuringSubject;
};
