import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './read.css'

const Readuser = () => {
   const { id } = useParams();
   const [user, setUser] = useState([])
   
   useEffect(()=>{
    axios.get('http://localhost:5000/user/usershow/'+id)
    .then(res =>{
        console.log(res)
        setUser(res.data);
    })
    .catch(err => console.log(err))
    
   }, [id]) 
  return (
    <div className='editu'>
        <h2 className='table-title'>{user.user_name}</h2>
        <div className="">
              <div className="image">
                <img className='profile-img' src="https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" alt=""></img>
                <span className={user.status ? 'status-green' : 'status-red'}></span>
              </div>
              <div className='datacontaainer'>id : {user.user_id}</div>
              <div className='datacontaainer'>Name : {user.user_name}</div>
              {/* <div >{user.status}</div> */}
              <div className='datacontaainer'>E-mail : {user.email}</div>
              <div className='datacontaainer'>Phone : {user.phonenumber}</div>
        </div>
    </div>
  )
}

export default Readuser