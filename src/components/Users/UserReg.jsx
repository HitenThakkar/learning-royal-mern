import React, { useState } from 'react'

export const UserReg = (props) => {

    {/*var user = {
        id: Math.floor(Math.random()*100),
        name: "Ram",
        email: "hiten@gmail.com",
        age: 22,
      }*/}

      const [id, setid] = useState(Math.floor(Math.random()*100))
      const [name, setname] = useState("null")
      const [email, setemail] = useState("null")
      const [age, setage] = useState(0)

      const submitHandler  = (event)=>
      {
        event.preventDefault(); // to prevent the default behaviour of the form
        console.log("submit handler called");
        
        setid(Math.floor(Math.random()*100))
        console.log(id);
        console.log(name);
        console.log(email);
        console.log(age);
        props.addUser({id:id,name:name,email:email,age:age})
      }

  return (
    <div>
    <h2>UserReg</h2>

    <form onSubmit={(event)=>{submitHandler(event)}}>
      <div>
        <label>Name</label>
        <input type="text" onChange={(e)=>setname(e.target.value)}></input>
      </div>
      <div>
        <label>Email</label>
          <input type="text" onChange={(e)=>setemail(e.target.value)}></input>
      </div>
      <div>
        <label>Age</label>
          <input type="number" onChange={(e)=>setage(e.target.value)}></input>
      </div>
    
      <input type="submit" value="submit" className='btn btn-primary'></input>
    </form>
    
    {/*<button onClick={()=>{props.addUser(user)}} className='btn btn-primary'>Add</button>*/}
    </div>
  )
}
