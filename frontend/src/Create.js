import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Create() {
  const [values, setValues]=useState({
    Keys:'',
    TR:'',
    EN: ''
  })
/* eklenen bilgileri anasayfa dondurmasi icin use navigated kullaniriz */
  const navigate =useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8081/modul', values)
    .then((res)=>{console.log(res);
      navigate('/')})
    .catch((error)=>console.log(error))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
            <h2>Add Model</h2>
            <div className='mb-2'>
                <label htmlFor=''>Keys</label>
                <input type='text' placeholder='Enter Word' className='form-control'
                onChange={(e)=>setValues({...values, Keys: e.target.value})} />
            </div>
            <div className='mb-2'>
                <label htmlFor=''>TR</label>
                <input type='text' placeholder='Enter in TR' className='form-control'
                onChange={(e)=>setValues({...values, TR: e.target.value})} />
            </div>
            <div className='mb-2'>
                <label htmlFor=''>EN</label>
                <input type='text' placeholder='Enter in EN' className='form-control' 
                onChange={(e)=>setValues({...values, EN: e.target.value})} />
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
