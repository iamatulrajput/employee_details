import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

 export default  function Create () {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "atul",
    age: "25",
    salary: "50000"
   
  });

  const { name, age, salary } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value, });
    console.log(user)
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://dummy.restapiexample.com/api/v1/employee/", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Employee</h2>
        <form onSubmit={e => onSubmit(e)}>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your  Age"
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter a Salary"
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div>
       
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

