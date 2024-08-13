import React,{ useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function Update() {
    const {id}= useParams();
    const navigate = useNavigate()
    
     useEffect(()=>{
        axios.get('http://localhost:8081/read/' +id)
        .then(response=>
          {console.log(response)
          setValues({...values, Keys: response.data[0].Keys, TR: response.data[0].TR, EN:response.data[0].EN})})
        .catch(error=>console.log(error))
    },[])  
    const [values, setValues]=useState({
      Keys:'',
      TR:'',
      EN:''
    })

       const handleUpdate= (event)=>{
        event.preventDefault();
        axios.put('http://localhost:8081/edit/'+id , values)
        .then((response)=> {console.log(response);
        navigate('/')})
        .catch((error)=>console.log(error))
      } 
  return (
    <div>
       <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
            <h2>Update Model</h2>
            <div className='mb-2'>
                <label htmlFor=''>Keys</label>
                <input type='text' placeholder='Enter Word' className='form-control'
                onChange={(e)=>setValues({...values, Keys: e.target.value})} value={values.Keys}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>TR</label>
                <input type='text' placeholder='Enter in TR' className='form-control'
                onChange={(e)=>setValues({...values, TR: e.target.value})} value={values.TR}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>EN</label>
                <input type='text' placeholder='Enter in EN' className='form-control' 
                onChange={(e)=>setValues({...values, EN: e.target.value})} value={values.EN}></input>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Update
