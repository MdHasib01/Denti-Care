import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInWithGoogle} =useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () =>{
            signInWithGoogle()
            .then(result => { history.push(redirect_uri)})
    };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //login user
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const auth = getAuth();
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)    
    }
    return (
        <div className="container">
            <div className="login-form">
            <div>
                <h2 className="heading-txt text-center my-5 text-primary">Want to Login?</h2>
                <div className="login-form my-5">
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
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
                <p>New to this website? <Link to="/signup">Register now</Link></p>
                <Button className="primary-btn" type="submit">
                    Login
                </Button>
            </Form>
                
            </div>
            <button className="primary-btn" onClick={handleGoogleLogin}>Login with Google</button></div>
            </div>
        </div>
    );
};

export default Login;