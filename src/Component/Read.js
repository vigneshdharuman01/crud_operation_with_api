import React from 'react'
import { useState,useEffect } from 'react'
import { API_URL } from '../Constance/Url'
import  axios  from 'axios'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import{useNavigate} from 'react-router-dom'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Read = () => {
 const[apiData,setApidata]=useState([]);

 useEffect(()=>{callGetData();},[]);

const callGetData=async()=>{
  const resp=await axios.get(API_URL);
  setApidata(resp.data);
   console.log(apiData);
   
}

const deleteUser=async(id)=>{
  await axios.delete('https://648f1cd275a96b664444b6eb.mockapi.io/user/'+id);
  callGetData();
}
const navigate=useNavigate();

const updateUser=({id,fullName,phone,mail,check})=>{
  console.log(id,fullName,phone,mail,check);
  localStorage.setItem('id',id)
  localStorage.setItem('fullName',fullName)
  localStorage.setItem('phone',phone)
  localStorage.setItem('mail',mail)
  localStorage.setItem('check',check)
 navigate('/update');
}
const newUser=()=>{
navigate('/create')
}


  return (
    <div className='read'>
      <button className='createbtn' onClick={newUser}>ADD NEW USER</button>
       <TableContainer component={Paper} className='tablecontainer'>
    <Table sx={{ maxWidth: 500 }} aria-label="customized table">
      <TableHead>
        <TableRow className='headrow'>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="center">Phone Number</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Agrement</StyledTableCell>
          <StyledTableCell align="center">Delete</StyledTableCell>
          <StyledTableCell align="center">Update</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {apiData.map((data) => (
          <StyledTableRow key={data.id}>
            <StyledTableCell component="th" scope="row">
              {data.fullName}
            </StyledTableCell>
            <StyledTableCell align="right">{data.phone}</StyledTableCell>
            <StyledTableCell align="right">{data.mail}</StyledTableCell>
            <StyledTableCell align="right">{data.check?"Agree":"Not Agree"}</StyledTableCell>
            <StyledTableCell align="center" ><button className='deletebtn' onClick={()=>{deleteUser(data.id)}}>Delete</button></StyledTableCell>
            <StyledTableCell align="center" ><button className='updatebtn' onClick={()=>{updateUser(data)}}>Update</button></StyledTableCell>

          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default Read