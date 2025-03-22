import React from 'react'
import { useState } from 'react'
import { createEmployee } from '../services/EmployeeServices'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        firstName: "",
        lastName:"",
        email:""
    })

    const navigate = useNavigate()

    function saveEmployee(e){
        e.preventDefault()
        const employee = {firstName, lastName, email}
        console.log(employee)

        createEmployee(employee).then((reponse) =>{
            console.log(reponse.data)
            navigate('/employees')
        })
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName="";
        }else{
            errorsCopy.firstName = 'First Name is required'
            valid = false;
        }
        if(lastName.trim()){
            errorsCopy.lastName="";
        }else{
            errorsCopy.lastName = 'Last Name is required'
            valid = false;
        }
        if(email.trim()){
            errorsCopy.email="";
        }else{
            errorsCopy.email = 'Email is required'
            valid = false;
        }
    }


  return (
    <div className='container'>
        <br></br>
      <div className='row'>
        <div className='card'>
            <h2 className='text-center'>Add Employee</h2>
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>First Name</label>
                        <input type='text'
                                placeholder='Enter First name'
                                name='firstName'
                                value={firstName}
                                className='form-control'
                                onChange={(e) =>setFirstName(e.target.value)} />

                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Last Name</label>
                        <input type='text'
                                placeholder='Enter Last name'
                                name='lastName'
                                value={lastName}
                                className='form-control'
                                onChange={(e) => setLastName(e.target.value)} />

                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email</label>
                        <input type='text'
                                placeholder='Enter Email'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
