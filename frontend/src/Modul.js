import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link, useParams,useNavigate } from 'react-router-dom'
function Modul() {
    const {id} = useParams()
    const navigate = useNavigate();
    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(response=>setData(response.data))
        .catch(error=>console.log(error))
    },[])
    const handleDelete= (id)=>{
        axios.delete('http://localhost:8081/delete/' +id)
        .then(response=>{navigate(0);} )
        .catch(error=>console.log(error))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h2>Languages</h2>
       <div className='d-flex justify-content-end'>
        <Link to='/create' className='btn btn-success'> Create +</Link></div> 
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Keys</th>
                    <th>TR</th>
                    <th>EN</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((modul, index)=>{
                    return <tr key={index}>
                        <td>{modul.ID}</td>
                        <td>{modul.Keys}</td>
                        <td>{modul.TR}</td>
                        <td>{modul.EN}</td>
                        <td>
                            <Link to={`/edit/${modul.ID}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                            <button onClick={()=>handleDelete(modul.ID)} className='btn btn-sm btn-danger'>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Modul
