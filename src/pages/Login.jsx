import React, { useState } from 'react';
import { LockOutlined, EyeOutlined, EyeInvisibleOutlined, MailOutlined,LoginOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='container'>
    <div className='main-login'>
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
        margin: 'auto',
      }}
      onFinish={onFinish}
    >
     
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
          {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Please enter a valid Email address!',
          }
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          }
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Password"
          suffix={
            <span onClick={togglePasswordVisibility}>
              {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </span>
          }
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" noStyle>
      <Link to={'/home'}>Forgot password</Link>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit"  icon={<LoginOutlined />}>
          Log in
        </Button>
        or  <Link to={'/signup'}>Register now!</Link>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default Login;
