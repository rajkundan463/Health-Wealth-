import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'

function Login() {

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className='authentication'>
            <div className='authentication-form card p-4'>
                <h1 className='card-title'>Welcome Back</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    
                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email'/>
                    </Form.Item >
                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password' type='password'/>
                    </Form.Item >

                    <Button className='primary-button my-2' htmlType='submit'>LOGIN</Button>

                    <Link to='/register'  className='anchor mt-2'>CLICK HERE TO REGISTER</Link>

                </Form>
            </div>
        </div>
    )
}

export default Login
