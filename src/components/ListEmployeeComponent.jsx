import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeServices'
import { useNavigate } from 'react-router-dom'

function ListEmployeeComponent() {

    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(error => console.error(error))
    },[])

    function addNewEmployee(){
        navigate('/add-employees')

    }

  return (
    <div className='container'>
        <h1 className='text-center'>List of Employees</h1>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee first Name</th>
                    <th>Employee last name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
