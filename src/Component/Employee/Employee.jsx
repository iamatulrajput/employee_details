import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";

export default function Eployee() {
   
  const [user, setUser] = useState({
    employee_name: "",
    employee_salary: "",
    employee_age: "",
    
  });

  const  {id, employee_name}  = useParams();
  console.log(employee_name)
  
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/data/${id}`);
    setUser(res.data);
    console.log(res);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.employee_name}</li>
        <li className="list-group-item">Salary: {user.employee_salary}</li>
        <li className="list-group-item">Age: {user.employee_age}</li>
      
      </ul>
    </div>
  );
};