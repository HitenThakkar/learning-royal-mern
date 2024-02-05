import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export const RegisterEmployee = () => {

    const {register,handleSubmit,formState:{errors},reset} = useForm(
        {
            // mode:onchange
            // mode:onBlur
            // mode:onTouched
            mode:"all"
        }
    )
    
    const submitHandler = (data)=>
    {
        console.log(data);
        reset()
    }

    // const initialCountries = [
    //     { id: 1, name: 'USA', states: ['New York', 'California', 'Texas'] },
    //     { id: 2, name: 'Canada', states: ['Ontario', 'Quebec', 'British Columbia'] },
    //     { id: 3, name: 'India', states: ['Maharashtra', 'Tamil Nadu', 'Karnataka'] },
    //   ];
    // const [selectedCountry, setSelectedCountry] = useState('');
    // const [selectedState, setSelectedState] = useState('');
    // const [countries, setCountries] = useState(initialCountries);

    

    console.log("errors...",errors);
    
    const validationSchema={
        nameValidation:{
            required:{
                value:true,
                message:"Name is required.."
            },
            minLength:{
                value:3,
                message:"NAME SHOULD BE MINIMUM 3 CHARACTERS*"
            }
        },
        gender:{
            required:{
                value:true,
                message:"gender is required"
            }
        },
        department:{
            required:{
                value:true,
                message:"department is required"
            }
        },
        skills:{
            required:{
                value:true,
                message:"skills is required"
            },
            validate:(value)=>{
                return value.length >= 2 || "Select atleast 2 skills"
            }
        },
        contact:{
            required:{
                value:true,
                message:"Contact is Required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"Invalid Contact Number*"
            }
        },
        email:{
            required:{
                value:true,
                message:"Email is required"
            },
            pattern:{
                value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message:"Invalid Email"
            }
        },
        password:{
            required:{
                value:true,
                message:"Password is required"
            },
            pattern:{
                value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message:"Password should be with 1special char, 1 number, 1 capital letter, 1 small letter, min 8 char"
            }
        },
        url:{
            required:{
                value:true,
                message:"Url is required"
            },
            pattern:{
                value:/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
                message:"Invalid Url"
            }
        }
    }

  return (
    <div>
        <h1>Register Employee</h1>
        <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register("name",validationSchema.nameValidation)}></input>
                {
                    errors.name && <p style={{color:"red"}}>{errors.name.message}</p>
                }
            </div>
            <div>
                    <label>GENDER</label>
                    <br/>
                    MALE : <input type="radio" value="male" name="gender" {...register("gender",validationSchema.gender)}></input> <br></br>
                    FEMALE : <input type="radio" value="female" name="gender" {...register("gender",validationSchema.gender)}></input> 
                    {
                        errors.gender && <span style={{color:"red"}}>{errors.gender.message}</span>
                    }
                </div>
                <div>
                    <label>DEPARTMENT</label>
                    <select {...register("department",validationSchema.department)}>
                        <option value="">---Select---</option>
                        <option value="1">IT</option>
                        <option value="2">HR</option>
                        <option value="3">SALES</option>
                    </select>
                    {
                        errors.department && <span style={{color:"red"}}>{errors.department.message}</span>
                    }
                </div>


                <div>
                <label>SKILLS</label>
                    <br/>
                    HTML : <input type="checkbox" value="football" name ="skills"  {...register("skills",validationSchema.skills)}></input> <br></br>
                    css : <input type="checkbox" value="cricket" name ="skills"  {...register("skills",validationSchema.skills)}></input> <br></br>
                    js : <input type="checkbox" value="tennis" name ="skills"  {...register("skills",validationSchema.skills)}></input> <br></br>
                    {
                        errors.skills && <span style={{color:"red"}}>{errors.skills.message}</span>
                    }
                </div>

            <div>
                    <label>CONTACT</label>
                    <input type="text" {...register("contact",validationSchema.contact)}></input>
                    {
                        errors.contact && <span style={{color:"red"}}>{errors.contact.message}</span>
                    }
            </div>

            
            <div>
                    <label>EMAIL</label>
                    <input type="email" {...register("email",validationSchema.email)}></input>
                    {
                        errors.email && <span style={{color:"red"}}>{errors.email.message}</span>
                    }
            </div>

            
            <div>
                    <label>PASSWORD</label>
                    <input type="password" {...register("password",validationSchema.password)}></input>
                    {
                        errors.password && <span style={{color:"red"}}>{errors.password.message}</span>
                    }
            </div>

            <div>
                    <label>Url</label>
                    <input type="url" {...register("url",validationSchema.url)}></input>
                    {
                        errors.url && <span style={{color:"red"}}>{errors.url.message}</span>
                    }
            </div>


            <div>
                {
                    errors.value
                }
                <input disabled={Object.keys(errors).length > 0} type="submit" value="Register"></input><br></br><br></br>
                <button type="button" onClick={() => reset()}>RESET</button>
            </div>
        </form>
        </div>
    </div>
  )
}
