import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Eployee() {
   
    const [user, setUser] = useState({
        name: "",
        age: "",
        salary: "",
       
      }); 
   
      const { id } = useParams();
      console.log(id)
      useEffect(() => {
        loadUser();
      }, []); 

      const loadUser = async () => {
        const res = await axios.get(`http://dummy.restapiexample.com/api/v1/employee/{id}`);
        setUser(res.data);
        console.log(res.data)
      };     
   
    return (
        <div>
           <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h6 className="display-4">Id: {id}</h6>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {}</li>
        <li className="list-group-item">Age: {user.age}</li>
        <li className="list-group-item">Salary: {user.salary}</li>
      </ul>
    </div>
        </div>
    )
}
