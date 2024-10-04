import React from 'react'
import { FaTrash , FaSync } from 'react-icons/fa';

function Employees({employees,title,handleDelete}) {
  return (
    <div className='employees'>
      {employees.map((employee) =>(
            <div className="emp-preview" key={employee.id_number}>
                <h2>{employee.first_name} {employee.last_name}</h2>
                <p>{employee.qualification}</p>
                <button className='EmpUpdate'>
                    <FaSync />
                </button>
                <button className='EmpDelete' onClick={() =>handleDelete(employee.id_number)}>
                    <FaTrash />
                </button>
                </div>
        ))}    
    </div>
  )
}

export default Employees;
