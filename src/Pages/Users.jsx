import { useState, useEffect } from "react";
import "./users.css";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(1)
  

  useEffect(() => {
    axios.get("http://localhost:5000/getUsers").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, [refresh]);

  const deleteUser = (id) => {
    console.log(id)
    axios.post(`http://localhost:5000/delUsers?id=${id}`);
    if(refresh === 1){
      setRefresh(2)
    }else if(refresh===2){
      setRefresh(1)
    }
  };

  const editUsers = (id)=>{
    
    const name = prompt("Enter your new name")
    const pass = prompt("Enter your new passwors")
    
    axios.post(`http://localhost:5000/updateUsers?id=${id}&name=${name}&pass=${pass}`)
    if(refresh === 1){
      setRefresh(2)
    }else if(refresh===2){
      setRefresh(1)
    }
  }

  return (
    <div className="users-page">
      <ul>
        {users.map((e) => (
          <li>
            <h1>{e.name}</h1>
            <div className="button-section">
              <button onClick={() => deleteUser(e._id)}>Delete</button>
              <button onClick={()=> editUsers(e._id)}>Edit</button>
            </div>
            {/* button-section  */}
          </li>
        ))}
      </ul>
    </div>
    // users-page
  );
};

export default Users;
