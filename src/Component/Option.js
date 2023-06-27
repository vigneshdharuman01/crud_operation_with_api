import React from 'react'
import{useNavigate} from 'react-router-dom'

const Option = () => {
    const navigate=useNavigate();

     const create=()=>{
        navigate('/create')
    }
    const read=()=>{
        navigate('/read')
    }
  return (
    <div>
        <div className="groupbtn">
        <button onClick={create}>CREATE PAGE</button>
        <button onClick={read}>READ PAGE</button>
      </div>
    </div>
  )
}

export default Option
