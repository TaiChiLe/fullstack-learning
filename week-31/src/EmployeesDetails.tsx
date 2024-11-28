import { useEffect, useState } from 'react';
import supabase from './utils/supabase.ts';

export function EmployeeDetails(props) {
  const [employee, setEmployee] = useState({});
  useEffect(() => {
    const loadEmployeeDetails = async () => {
      const { data } = await supabase.rpc('get_employee_details', {
        employee_id: props.id,
      });

      setEmployee(data);
    };

    loadEmployeeDetails();
  }, [props.id]);
  return (
    <div>
      <h2>Employee details for ID (1)</h2>
      <div>Name: {employee.name}</div>
      <div>Department: {employee.department?.dept_name}</div>
      <div>Job: {employee.job_level?.job_name}</div>
    </div>
  );
}
