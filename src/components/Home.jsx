import React from 'react'
import './layout.css'
//name should be in capital letters
export const Home = ({t,ind,ff,users}) => {
    // const users =[
  //   {
  //     id:1,
  //     name:"Raj",
  //   },
  //   {
  //     id:2,
  //     name:"Ravi",
  //   }
  // ]
  console.log("Home Props.....");
  return (
    <div className='content'>
        <h1>HOME COMPONENT</h1>
        <h2>Title = {t}</h2>
        <h3>Ind = {ind}</h3>
        <h3>FF = {ff.Mg}</h3>
        <h3>FF = {ff.Bs}</h3>
        {
          users.map((user)=>{
            return(
              <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
              </ul>
            )
          })
        }
    </div>
  )
}
