import { useState, useEffect } from 'react';
import supabase from './utils/supabase';

export function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function getEmployees() {
      const { data } = await supabase.from('employees').select();
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
          #{employee.id} - {employee.name}
        </li>
      ))}
      {!employees.length && <div>No employees found</div>}
    </div>
  );
}
