import React from 'react'
import { useState,useEffect } from 'react'
import{Form,Button,Checkbox}from 'semantic-ui-react'
import{useNavigate} from 'react-router-dom'
import  axios  from 'axios'



const Update = () => {
  const[id,setId]=useState('');
  const[fullName,setFullName]=useState("");
  const[phone,setPhone]=useState("");
  const[mail,setMail]=useState('');
  const[check,setCheck]=useState(false);
  const navigate=useNavigate();

  const updateUser=async()=>{
    await axios.put('https://648f1cd275a96b664444b6eb.mockapi.io/user/'+id,{
      fullName,
      phone,
      mail,
      check
    })
    navigate('/read')

  }
  

useEffect(()=>{
setId(localStorage.getItem('id'))
setFullName(localStorage.getItem('fullName'))
setPhone(localStorage.getItem('phone'))
setMail(localStorage.getItem('mail'))
setCheck(localStorage.getItem('check'))

},[])

  return (
    <div>
       <Form className='form'>

<Form.Field>
    <label>Full Name</label>
    <input type="text" name='fullName' value={fullName} onChange={(e)=>setFullName(e.target.value)} />
</Form.Field>

<Form.Field>
    <label>Phone Number</label>
    <input type="number" name='phone' maxLength={10} value={phone} onChange={(e)=>setPhone(e.target.value)} />
</Form.Field>

<Form.Field>
    <label>Email Id</label>
    <input type='email' name='mail' value={mail} onChange={(e)=>setMail(e.target.value)}/>
</Form.Field>

<Form.Field>
   <Checkbox name='checked' label='Agree the terms and condition' checked={check} onChange={()=>setCheck(!check)}/>
</Form.Field>

<Button onClick={updateUser}>Update</Button>
</Form>
    </div>
  )
}

export default Update