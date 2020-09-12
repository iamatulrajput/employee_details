import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Home.css'
export default function Home() {
    const [users, setUser] = useState([]);



    useEffect(() => {
     
      loadUsers ();
    }, [])
    

    const loadUsers = async ()=>
    {
        const res = await axios.get('http://localhost:3003/data')
        setUser(res.data);
    }


const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/data/${id}`);
    loadUsers ();
  };
    return (
        <div>
            
           <div className="header">
            <Link to="/create" className =" btn  btn-outline-info mr-5 "> Add Employee</Link>
            <input  placeholder="Search" type="text" /> 
           </div>

          <div className ="main">
          
          <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

        {users.map(user=> 
            
            <>
               
            <tr>
           <th scope="row"> {user.id}</th>
           <td>{user.employee_name}</td>
           <td>{user.employee_age}</td>
           <td>{user.employee_salary}</td>
           <td>
              <Link  class="btn btn-outline-primary mr-2"
                    to={`/update/user.id}`} 
                    >
              Update
              </Link>

              <Link class="btn btn-primary mr-2" 
               to={`/employee/${user.id}`}
              >
                    View
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
            </td>
           </tr>
        </>     
        
            )}
        </tbody>
      </table>
            </div> 

           <div>
               footer
               </div> 
        </div>
    )
    }