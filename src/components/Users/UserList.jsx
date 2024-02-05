import React from 'react'

export const UserList = (props) => {
  return (
    <div>
        <h2>UserList {/*---{props.title}*/}</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.users?.map((u) => {
                    return(
                        <tr>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.age}</td>
                            <td>
                                <button onClick={()=>{props.deleteUser(u.id)}} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
            {
                props.users?.length == 0 ? <h2 style={{color:'red'}}>No Record Found</h2> : ""
            }
        {/*<button onClick={()=>{props.test("Hiten")}}>Test</button>*/}
    </div>
  )
}
