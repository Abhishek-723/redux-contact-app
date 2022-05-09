import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Create() {
    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [email, setEmail] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !name || !number) {
            toast.warn("Please fill all the fields")
        }
        const checkEmail = contacts.find(contact => contact.email === email);
        const checkNumber = contacts.find(contact => contact.number === number);
        if(checkEmail){
            toast.error("Email already exists");
        }
        if(checkNumber){
            toast.error("Number already exists");
        }
        const data = {
            id: contacts.length+1,
            name, 
            email,
            number
        }
        console.log(data);
        dispatch({type: "ADD_CONTACT", payload: data});
        toast.success("Contact Added successfully");
        navigate("/");
    }
  return (
    <>
    <Navbar />
        <div className='add__contact'>
            <TextField id="outlined-basic" label="Name" value={name} onChange={(e)=> setName(e.target.value)} variant="outlined" style={{marginLeft: 80, marginRight: 80, marginTop: 20}}/>
            <TextField id="outlined-basic" label="Email" value={email} onChange={(e)=> setEmail(e.target.value)} variant="outlined" style={{marginLeft: 80, marginRight: 80, marginTop: 20}}/>
            <TextField id="outlined-basic" label="Phone Number" value={number} onChange={(e)=> setNumber(e.target.value)} variant="outlined" style={{marginLeft: 80, marginRight: 80, marginTop: 20}}/>
            <Button variant="contained" onClick={handleSubmit}>Add Contact</Button>
        </div>
    </>
  )
}

export default Create