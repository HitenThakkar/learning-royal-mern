import React, { useContext } from 'react';
import { AppContext } from "../../context";
import { StudentChild } from "./StudentChild";

export const StudentList = () => {
  const { name, students, studentDispatcher } = useContext(AppContext);
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.marks}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      studentDispatcher("DELETE_STUDENT", student);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <StudentChild></StudentChild>
    </div>
  )
}
