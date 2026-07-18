import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const UpdateStudent=()=>{
      const [name,setName]=useState("")
      const [email,setEmail]=useState("")
      const [mobile,setMobile]=useState("")
      const [department,setDepartment]=useState("")
      const [course,setCourse]=useState("")
      const navigate=useNavigate()
      const{id}=useParams()
      console.log(id);
      
        useEffect(()=>{
            axios.get(`https://6a5bebeb64f700df5bd79d01.mockapi.io/users/${id}`)
            .then(x=>{
                setName(x.data.name)
                setEmail(x.data.email)
                setMobile(x.data.mobile)
                setDepartment(x.data.department)
                setCourse(x.data.course)
            })
        },[])

        function handleUpdate(e){
            e.preventDefault()
            const newData={name,email,mobile,department,course}
            axios.put(`https://6a5bebeb64f700df5bd79d01.mockapi.io/users/${id}`,newData)
            .then(()=>{
                toast.success("Updated...")
                navigate("/viewstudent")
            })
            .catch(err=>toast.error("Failed to Update.."))
        }

        function handleCancel(){
            navigate("/viewstudent")
        }

    return(
    <>
    <Navbar/>
       <center><h1>Update Student</h1></center>
        <div className="form-container">
      <form onSubmit={handleUpdate}>
      <input 
      type="text" 
      placeholder="Enter Name" 
      required
      value={name}
      onChange={(e)=>{setName(e.target.value)}}/>
      <br/>

      <input 
      type="text" 
      placeholder="Enter Email" 
      required
       value={email}
      onChange={(e)=>{setEmail(e.target.value)}}/>
      <br/>  

      <input 
      type="text" 
      placeholder="Enter Mobile No" 
      required
         value={mobile}
      onChange={(e)=>{setMobile(e.target.value)}}/>
      <br/> 

      <input 
      type="text" 
      placeholder="Enter Department" 
      required
         value={department}
      onChange={(e)=>{setDepartment(e.target.value)}}/>
      <br/> 

      <input 
      type="text" 
      placeholder="Enter Course" 
      required
         value={course}
      onChange={(e)=>{setCourse(e.target.value)}}/>
      <br/>
     <div className="btn-grp">
      <button >Update</button>
      <button type="button" onClick={()=>{handleCancel()}}>Cancel</button>
      </div>
      </form>
      </div>
    </>
    )
}

export default UpdateStudent
