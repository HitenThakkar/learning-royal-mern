import React from 'react'
import { useForm } from 'react-hook-form'

export const ValidateEmployee = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();
    console.log("errors...",errors);
    const submitHandler = (data)=>
    {
        console.log(data);
    }
    const validationSchema={
        nameValidation:{
            required:{
                value:true,
                message:"name is required.."
            }
        },
        age:{
            required:{
                value:true,
                message:"age is required"
            },
            min:{
                value:18,
                message:"age should be above 18"
            },
            max:{
                value:60,
                message:"age should be less than 60"
            }
        },
        address:{
            required:{
                value:true,
                message:"address is required"
            },
            minLength:{
                value:10,
                message:"address should be more than 10 characters"
            },
            maxLength:{
                value:50,
                message:"address should be less than 50 characters"
            }
        }
    }


  return (
    <div>
        <h1>Add Employee</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                {/* <input type="text" {...register("name",{required:true})}></input> */}
                {/* <input type="text" {...register("name",{required:{value:true,message:"name is required!!"}})}></input> */}
                <input type="text" {...register("name",validationSchema.nameValidation)}></input>
                {
                    errors.name && <p style={{color:"red"}}>{errors.name.message}</p>
                }
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register("age",validationSchema.age)}></input>
                {
                    errors.age && <p style={{color:"red"}}>{errors.age.message}</p>
                }
            </div>
            <div>
                <label>ADDRESS</label>
                <input type="text" {...register("address",validationSchema.address)}></input>
                {
                    errors.address && <p style={{color:"red"}}>{errors.address.message}</p>
                }
            </div>
            <div>
                <input type="submit" value="ADD EMPLOYEE"></input>
            </div>
        </form>
    </div>
  )
}
