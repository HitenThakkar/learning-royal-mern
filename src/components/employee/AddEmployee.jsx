import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const AddEmployee = () => {

    const {register,handleSubmit} = useForm()
    const [employee, setemployee] = useState({})
    const [check, setcheck] = useState(false)

    const submitHandler = (data)=>{
        console.log(data)
        setemployee(data)
        setcheck(true)
    }

  return (
    <div>
        <h2>AddEmployee</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register("empname")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label><br/>
                MALE : <input type="radio" name='gender' value="male" {...register("gender")}></input><br/>
                Female : <input type="radio" name='gender' value="female" {...register("gender")}></input>
            </div>
            <div>
                <label>DEPARTMENT</label>
                <select {...register("dept")}>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="SALES">SALES</option>
                </select>
            </div>
            <div>
                <label>SKILLS</label>
                <br/>
                JAVA : <input type="checkbox" name='skills' value="java" {...register("skills")}></input> <br/>
                HTML : <input type="checkbox" name='skills' value="html" {...register("skills")}></input> <br/>
                CPP : <input type="checkbox" name='skills' value="cpp" {...register("skills")}></input> <br/>
            </div>
            <div>
                <label>FAV COLOR</label>
                <input type="color" {...register("favcolor")}></input>
            </div>
            <div>
                <input type="submit" value="ADD EMPLOYEE" className='btn btn-primary'></input>
            </div>
        </form>   
        { check &&
            <div style={{color:employee.favcolor}} >
            <h1>EMPLOYEE DETAILS</h1>
                    <h4>NAME : {employee.empname}</h4>
                    <h4>AGE : {employee.age}</h4>
                    <h4>GENDER:- {employee.gender}</h4>
                    {
                        employee.skills && employee.skills?.map((skill)=>{
                            return <h4>SKILLS : {skill}</h4>
                        })
                    }
            </div>
        }
    </div>
  )
}
