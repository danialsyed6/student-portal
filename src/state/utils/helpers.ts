import lodash from 'lodash';

import { IStudent } from '../ducks/student/types';

export const getFirstGrade = (students: IStudent[], grades: string[]) => {
  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];

    if (students.some(student => student.grade === grade)) return grade;
  }

  return 'N/A';
};

export const getMostOccurences = (students: IStudent[]): string => {
  if (students.length === 0) return 'N/A';
  const subjects = students.map(student => student.subject);

  const mostOccuringSubject: string = lodash.head(
    lodash(subjects).countBy().entries().maxBy(lodash.last)
  ) as string;

  return mostOccuringSubject;
};
