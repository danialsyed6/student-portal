import React from 'react';
import Button from './button';
import Flag from './flag';
import Table from './table';

import './styles.css';

const Dashboard = () => {
  const students = [
    {
      _id: '1',
      name: 'Ali Raza',
      subject: 'Maths',
      marks: 20,
      grade: 'F',
      createdAt: '2022-09-13T05:24:31.660Z',
    },
    {
      _id: '1',
      name: 'Ali Raza',
      subject: 'English',
      marks: 80,
      grade: 'A',
      createdAt: '2022-09-13T05:24:31.660Z',
    },
  ];

  return (
    <div className="dashboard_container">
      <header className="dashboard_header">
        <h1>Student Portal</h1>
      </header>
      <div className="dashboard_cta">
        <h2>Students Sammary</h2>
        <Button text="+ Add Data" onClick={() => {}} secondary />
      </div>
      <div className="dashboard_things">
        <Flag title="Top Grade" subtitle="A+" />
        <Flag title="Top Grade" subtitle="A+" />
        <Flag title="Top Grade" subtitle="A+" danger />
        <Flag title="Top Grade" subtitle="A+" danger />
      </div>
      <Table students={students} />
    </div>
  );
};

export default Dashboard;
