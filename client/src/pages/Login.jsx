import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../axios/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        axiosInstance.post("/user/login", values)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                alert("Invalid credentials or something went wrong");
            });
    };

    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <Form className='border p-5' onSubmit={handleSubmit}>
                <h2 className='text-center mb-4'>Login</h2>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password' required />
                </Form.Group>

                <Button variant="primary" type="submit" className='w-100'>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;

