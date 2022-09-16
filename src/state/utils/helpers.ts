import { IStudent } from '../ducks/student/types';

export const getTopAndLowestGrade = (
  students: IStudent[]
): { topGrade: string; lowestGrade: string } => {
  const grades: any = {
    'A+': 5,
    'A-': 4,
    'B+': 3,
    'B-': 2,
    F: 1,
  };

  let topGradeIndex = 0;
  let lowestGradeIndex = Object.keys(grades).length;
  let topGrade = '';
  let lowestGrade = '';

  students.forEach(student => {
    const gradeVal: number = grades[student.grade];

    if (gradeVal > topGradeIndex) {
      topGradeIndex = gradeVal;
      topGrade = student.grade;
    }
    if (gradeVal < lowestGradeIndex) {
      lowestGradeIndex = gradeVal;
      lowestGrade = student.grade;
    }
  });

  return {
    topGrade,
    lowestGrade,
  };
};
export const getMostOccurences = (students: IStudent[]): string => {
  if (students.length === 0) return 'N/A';
  const subjects = students.map(student => student.subject);

  var modeMap: any = {};
  var maxEl = subjects[0],
    maxCount = 1;
  for (let i = 0; i < subjects.length; i++) {
    let el = subjects[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }

  return maxEl;
};
