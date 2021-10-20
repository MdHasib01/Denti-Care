import { createUserWithEmailAndPassword, getAuth, updateProfile } from '@firebase/auth';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const {signInWithGoogle, setUser} =useAuth()
    const handleGoogleLogin = () =>{
            signInWithGoogle()
    }
    const [name, setName] =useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
//email password 
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const auth = getAuth();

    const setUserName = (details) => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => {
          setUser({...details,displayName: name})
          })
      }

    const handleRegistration = e =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result)
            setUserName(result.user)
        })
        e.preventDefault();
    }

    const handleName = e =>{
        setName(e.target.value)
        // e.target.value
    }
    return (
        <div className="container">
            <div className="login-form">
            <div>
            <h2 className="heading-txt text-center my-5 text-primary">Want to Register?</h2>
            <div className="login-form my-5">
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button className="primary-btn" type="submit">
                    Register
                </Button>
            </Form>
                
            </div>
            <p>Do you have an account? <Link to="/login">Login</Link></p>
            <button className="primary-btn"  onClick={handleGoogleLogin}>Login With Google</button>
            </div>
            </div>
        </div>
    );
};

export default SignUp;