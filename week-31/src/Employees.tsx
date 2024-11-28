import { useState, useEffect } from 'react';
import supabase from './utils/supabase';

export function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function getEmployees() {
      const { data } = await supabase
        .from('employees')
        .select(
          `
        id,
        name,
        departments (
        id,
        dept_name,
        dept_head),
        job_levels (
        id,
        name,
        min_salary)`
        )
        .order('id', { ascending: true });
      if (data && data.length > 1) {
        setEmployees(data);
      }
    }
    getEmployees();
  }, []);
  return (
    <div>
      {employees.map((employee) => (
        <li key={employee.id}>
          #{employee.id} - {employee.name} - {employee.departments?.dept_name} -{' '}
          {employee.job_levels?.name}
        </li>
      ))}
      {!employees.length && <div>No employees found</div>}
    </div>
  );
}
