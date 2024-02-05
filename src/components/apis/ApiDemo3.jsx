import axios from 'axios'
import React  from 'react'

export const ApiDemo3 = () => {

    const deleteApiDemo = async () => {
        const res = await axios.delete("https://node5.onrender.com/user/user/65865e01c68c94b8e1d008d2")
        console.log(res);
        if(res.status == 204){
            alert("Users deleted successfully");
        }else{
            alert("Something went wrong");
        }
    }

  return (
    <div>
         <button onClick={()=>deleteApiDemo()}>Delete Api Demo</button>
    </div>
  )
}
