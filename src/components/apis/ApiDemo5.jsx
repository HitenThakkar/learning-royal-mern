import axios from 'axios'
import React from 'react'

export const ApiDemo5 = () => {


    const addUser = async () => {

        const user = {
            name:"hiten",
            email:"hiten@gmail.com",
            status:"active",
            gender:"male"
        }

        try{
            const res = await axios.post("https://gorest.co.in/public/v2/users",user,{
                headers:{
                    "Authorization":"Bearer f93faa5f426b47c18d8ded1def6b5aa158c0e50663fb2589c7330e4d14d585c5"
                }
            })
            console.log(res.data)           

        }catch(err){

                console.log("catch",err)

        }



    }


  return (
    <div>
        <button onClick={()=>{addUser()}}>Add User</button>
    </div>
  )
}