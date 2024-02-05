import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';



export const ApiDemo1 = () => {
  
    const [singleUser, setsingleUser] = useState({})
    
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [users, setusers] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate(); 
    
    const fetchUserData = async () => {
        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log(res);
        console.log(res.status);
        console.log(res.data);
        setusers(res.data.data);
        setisLoading(false);
    }

    const deleteUser = async (id) => {
        const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
        if(res.status == 204)
        {   
            alert("User Deleted Successfully");
            fetchUserData()
        }
    }

useEffect(() => {
  fetchUserData()
}, [])

const {register,handleSubmit,formState:{errors}} = useForm(
  {
      defaultValues: async()=>{
          const res = await axios.get("https://node5.onrender.com/user/user/"+singleUser._id)
          return {
              isActive:res.data.data.isActive?true:false
          }
          //return res.data.data // if key match with register name then no need to write above code
      }
  }
);
const submitHandler = async(data) => {

  const res  = await axios.put("https://node5.onrender.com/user/user/"+singleUser._id,data)
  console.log(res);
  console.log(res.status);
  console.log(res.data);
  if(res.status == 200){
    setShow2(false);
  }
  navigate("/apidemo1")
}

  
  const handleShow1 = async(id) => {
  const res = await axios.get("https://node5.onrender.com/user/user/"+id);
    setsingleUser(res.data.data);
    setShow1(true);
    setShow2(false);
  }

  const handleShow2 = async(id) => {
    const res = await axios.get("https://node5.onrender.com/user/user/"+id);
      setsingleUser(res.data.data);
      setShow2(true);
      setShow1(false);
    }

  
  const handleClose = () => {
    setShow1(false);
    setShow2(false);
  }
  
    

     // const fetchUserData = async () => {
  //   axios
  //     .get("https://node5.onrender.com/user/user")
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.status);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <h1>GET API DEMO 1</h1>
      {/* <button
        onClick={() => {
          fetchUserData();
        }}
      >
        Fetch User Data
      </button> */}
      {isLoading && <h1>Loading...</h1>}

      <table className="table table-bordered">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>AGE</td>
            <td>STATUS</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => {
            return (
              <tr>
                <td>{u._id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.age}</td>
                <td>{u.isActive == true ? "Active" : "NotActive"}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>{deleteUser(u._id)}}>Delete</button> &nbsp;
                  <Link to = {`/userupdate/${u._id}`} className="btn btn-warning">Update</Link> &nbsp;
                  <Link to = {`/userdetail/${u._id}`} className="btn btn-success">View1</Link> &nbsp;
                  <Button variant="primary" onClick={()=>{handleShow1(u._id)}}>
                    View2
                  </Button> &nbsp;
                  <Button variant="warning" onClick={()=>{handleShow2(u._id)}}>
                    Change Status
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
      <Modal show={show2} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleUser.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">Id</label>&nbsp;
                <input type="text" value={singleUser._id} disabled="true"/>
            </div>
            <div>
              <label>Active</label>&nbsp;
              <input type="radio" value="true" defaultChecked={singleUser.isActive === true} {...register("isActive")}/>
              <br/>
            {/* <input type='text' {...register("isActive")}></input> */}
              <label>Inactive</label>&nbsp;
              <input type="radio" value="false" defaultChecked={singleUser.isActive === false} {...register("isActive")}/>
            </div>
            
            {/* <div>
              <input type="submit" className='btn btn-primary' value="update"/>
            </div> */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit(submitHandler)}> Save Changes </Button>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
        </Modal.Footer>
      </Modal>
      </div>


      <div>
      <Modal show={show1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleUser.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{singleUser.email}<br></br>{singleUser.age}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}
