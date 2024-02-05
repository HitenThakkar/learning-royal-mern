import React, { useState } from 'react'
import { UserList } from './UserList'
import { UserReg } from './UserReg';

export const User = (props) => {

  const [count, setCount] = useState(0);
      
  var [users, setusers] = useState([
    {
      id: 1,
      name: "Hiten",
      email: "hiten@gmail.com",
      age: 21,
    },
    {
      id: 2,
      name: "Mahek",
      email: "mahek@gmail.com",
      age: 20,
    },
    {
      id: 3,
      name: "Harsh",
      email: "harsh@gmail.com",
      age: 21,
    },
  ])

  {/*var users = [
    {
      id: 1,
      name: "Hiten",
      email: "hiten@gmail.com",
      age: 21,
    },
    {
      id: 2,
      name: "Mahek",
      email: "mahek@gmail.com",
      age: 20,
    },
    {
      id: 3,
      name: "Harsh",
      email: "harsh@gmail.com",
      age: 21,
    },
  ];*/}

  const test = (name) =>{
    alert("test " + name);
  };

  const increment = ()=>{
    setCount(count + 1);
  };

  const deleteUser = (id) => {
    console.log("delete user", id);
    console.log("before delete...users", users);
    users = users.filter((u)=>{
      return u.id !== id;
    })
    console.log("after delete...users", users);
    //useState update...
    setusers(users)
  };

  const addUser = (user) => { 
    users = [...users,user]
    setusers(users)
  }

  return (
    <div>
      {/*<h1>Users -- {props.title}</h1>
      <h1>Count -- {count}</h1>
      <button
        onClick={() => {
          increment();
        }}>Increment</button>*/}
      <UserReg addUser={addUser}></UserReg>
      <UserList users={users} title={props.title} test={test} deleteUser={deleteUser}></UserList>
    </div>
  )
}
