import React from 'react'
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function View() {
    const navigate = useNavigate();
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({type: "DELETE_CONTACT", payload: id});
    }
  return (
    <>
    <Navbar />
        <div className="view__contacts">
            <h1>Contacts</h1>
            <div className="contact__box">
                <div className="header">
                    <p>id</p>
                    <p>Name</p>
                    <p>Email</p>
                    <p>Phone Number</p>
                </div>
                    {
                        contacts.length && contacts.map((contact) => (
                        <div className="contacts">
                            <p>{contact.id}</p>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                            <p>{contact.number}</p>
                            {
                                contact.id ? (
                                    <>
                                    <Button variant="contained" color="error" onClick={() => deleteContact(contact.id)}>Delete</Button>
                                    <Button variant="contained" onClick={() => navigate(`/edit/${contact.id}`)}>Edit</Button>
                                    </>
                                ) : (
                                    <div></div>
                                )
                            }
                        </div>
                        ))
                    }
            </div>
        </div>
    </>
  )
}

export default View