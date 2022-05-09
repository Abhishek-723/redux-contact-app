import React from 'react'
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Navbar />
    <div className='home__box'>
        <h1>Welcome to the Contact App</h1>
        <h3>Keep a Track of all your contacts without ny fuss</h3>
        <div className="buttons">
            <Link to="/view-contacts"><Button variant="contained">View Contacts</Button> </Link>
            <Link to="/add-contact"><Button variant="outlined">Add Contacts</Button></Link>
        </div>
    </div>
    </>
  )
}

export default Home