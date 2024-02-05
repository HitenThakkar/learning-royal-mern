import React, { useState } from 'react'
import { AppContext } from '../../context'
import { StudentList } from './StudentList'

export const Students = () => {

    const [students, setstudents] = useState([
        {
            id:1,
            name:"Hiten",
            age:21,
            marks:95
        },
        {
            id:2,
            name:"Mahek",
            age:20,
            marks:90
        },
        {
            id:3,
            name:"Harsh",
            age:20,
            marks:90
        },
        {
            id:4,
            name:"Jay",
            age:22,
            marks:93
        },
        {
            id:5,
            name:"Aangi",
            age:20,
            marks:94
        },
    ])

    //payload
    const studentDispatcher = (action,payload)=>{
        switch(action){
            case "ADD_STUDENT":
                setstudents([...students,payload])
                break;
            case "DELETE_STUDENT":
                setstudents(students.filter((student)=>student.id!=payload.id))
                break;
        }

    }

  return (
    <div>
        <AppContext.Provider value={{name:"Hiten",students,studentDispatcher}}>
            <StudentList/>
        </AppContext.Provider>
    </div>
  )
}
