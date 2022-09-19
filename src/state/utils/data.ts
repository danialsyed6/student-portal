import * as yup from 'yup';

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
    .typeError('Marks are required.')
    .min(1, 'Marks should be between 1-100.')
    .max(100, 'Marks should be between 1-100.')
    .required('Marks are required.'),
  grade: yup.string().required('Grade is required.'),
  subject: yup.string().required('Subject is required.'),
});
