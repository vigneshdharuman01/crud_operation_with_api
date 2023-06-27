import React, { useState } from 'react'
import{Form,Button,Checkbox}from 'semantic-ui-react'
import { API_URL } from '../Constance/Url'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'


const Create = () => {

    const[fullName,setFullName]=useState("");
    const[phone,setPhone]=useState("");
    const[mail,setMail]=useState('');
    const[check,setCheck]=useState(false);
    const navigate=useNavigate();
    
    const post_Data=async()=>{
    
        await axios.post(API_URL,{
            fullName,
            phone,
            mail,
            check
        })
        setFullName('');
        setPhone('');
        setMail('');
        setCheck(false);
        navigate('/read');

    }
  

  return (
    <div className='create'>
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

            <Button onClick={post_Data}>Submit</Button>
        </Form>
    </div>
  )
}

export default Create