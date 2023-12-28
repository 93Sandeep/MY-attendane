import React, { useState } from 'react';
import './Employees.css';

const Employees = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'deven', employeeCode: '1', intime: '9:00 AM', outtime: '5:00 PM' },
    { id: 2, name: 'aman', employeeCode: '2', intime: '8:30 AM', outtime: '4:30 PM' },
  ]);

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr className='row'>
            <th>ID</th>
            <th>Name</th>
            <th>Employee Code</th>
            <th>In-time</th>
            <th>Out-time</th>
          </tr>
        </thead>
        <tbody className='row1'>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.employeeCode}</td>
              <td>{employee.intime}</td>
              <td>{employee.outtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
