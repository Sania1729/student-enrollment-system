import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewStudent=()=>{
  const[students,setStudents]=useState([])
  const navigate=useNavigate()
  function fetchData(){
    axios.get("https:/6a5bebeb64f700df5bd79d01.mockapi.io/users")
    .then(x=>setStudents(x.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

  function handleUpdate(id){
    navigate(`/updatestudent/${id}`)
  }

  function handleDelete(id){
    axios.delete(`https:/6a5bebeb64f700df5bd79d01.mockapi.io/users/${id}`)
    .then(()=>{alert("Student Deleted")
    fetchData()
    })
    .catch(err=>{console.log(err)})
  }

  return(
    <>
     <Navbar/>
    <center><h1>Student List</h1></center>
    {students.map((x)=>{
      return <div className="card">
        <h3>Name: {x.name}</h3>
        <p><b>Email:</b> {x.email}</p>
        <p><b>Mobile:</b> {x.mobile}</p>
        <p><b>Department:</b> {x.department}</p>
        <p><b>Course:</b> {x.course}</p>
        <button onClick={()=>{handleUpdate(x.id)}}>Edit</button>
        <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
      </div>
    })}
    </>
  )
}

export default ViewStudent
