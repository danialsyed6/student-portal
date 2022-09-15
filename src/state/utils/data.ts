import * as yup from 'yup';

export const students = [
  {
    _id: '1',
    name: 'Ali Raza',
    subject: 'Maths',
    marks: 20,
    grade: 'F',
    createdAt: '2022-09-13T05:24:31.660Z',
  },
  {
    _id: '2',
    name: 'Ali Raza',
    subject: 'English',
    marks: 80,
    grade: 'A',
    createdAt: '2022-09-13T05:24:31.660Z',
  },
  {
    _id: '3',
    name: 'Ali Raza',
    subject: 'English',
    marks: 80,
    grade: 'B+',
    createdAt: '2022-09-13T05:24:31.660Z',
  },
];

export const studentTableKeys = [
  'Name',
  'Marks',
  'Subject',
  'Grades',
  'Date',
  'Action',
];

export const subjectOptions = [
  { name: 'maths', label: 'Maths' },
  { name: 'english', label: 'English' },
  { name: 'science', label: 'Science' },
];

export const gradeOptions = [
  { name: 'a+', label: 'A+' },
  { name: 'a-', label: 'A-' },
  { name: 'b+', label: 'B+' },
  { name: 'b-', label: 'B-' },
  { name: 'f', label: 'F' },
];

export const studentSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  marks: yup
    .number()
    .min(1, 'Marks should be between 1-100.')
    .max(100, 'Marks should be between 1-100.')
    .required('Marks are required.'),
  grade: yup.string().required('Grade is required.'),
  subject: yup.string().required('Subject is required.'),
});
