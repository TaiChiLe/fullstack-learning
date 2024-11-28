import supabase from './utils/supabase.ts';

export function EmployeeForm() {
  const onFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const employeeName = formData.get('employee_name');
    const employeeDepartmentId = formData.get('employee_department_id');
    const jobLevelId = formData.get('employee_job_level_id');
    const employeeData = {
      employee_name: employeeName,
      employee_department_id: employeeDepartmentId,
      employee_job_level_id: jobLevelId,
    };

    console.log(employeeData);
    const { data, error } = await supabase.rpc('upsert_employee', employeeData);

    if (error) {
      console.error('Error adding employee:', error);
      alert(error.message);
    } else {
      console.log('Employee added:', data);
      alert('Employee added');
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h1>Add New Employee</h1>
      <div>
        <label>
          Name: <input type="text" name="employee_name" />
        </label>
      </div>
      <div>
        <label>
          Department ID: <input type="text" name="employee_department_id" />
        </label>
      </div>
      <div>
        <label>
          Job Level ID: <input type="text" name="employee_job_level_id" />
        </label>
      </div>
      <button type="submit">Add New Employee</button>
    </form>
  );
}
