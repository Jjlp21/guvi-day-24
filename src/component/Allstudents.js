import React,{useContext,useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Allstudents.css'

function AllStudents() {

    useEffect(()=>{
        getData();
      },[])

    let navigate = useNavigate();
    let [data,setData] = useState([])
    

let getData =async()=>{
let res =await axios.get('https://614eacd3b4f6d30017b48344.mockapi.io/user')

setData(res.data)
}

let handleDelete=async(id)=>{
    await axios.delete('https://614eacd3b4f6d30017b48344.mockapi.io/user/'+id)
getData();
}
    return (
        <div className='margin'>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#id</th>
                <th scope="col">Profile Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Degree</th>
                <th scope="col">Department</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e,i)=>{
                        return<tr key={i}>
                            <th scope="row">{e.id}</th>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.mobile}</td>
                            <td>{e.degree}</td>
                            <td>{e.dept}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>{
                                    navigate('/edit-student/'+e.id) 
                                }}>Edit</button>
                                
                                 &nbsp;&nbsp; <button className="btn btn-danger" onClick={()=>handleDelete(e.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default AllStudents
