import React, { useState } from 'react';
import { LockOutlined, EyeOutlined, EyeInvisibleOutlined, UserOutlined, MailOutlined, GoogleOutlined, LoginOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import './form.css';
import { Link } from 'react-router';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className='container'>
      <div className='main-signup'>
        <Form
          name="signup"
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
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

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
              },
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
              },
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

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords do not match!');
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm Password"
              suffix={
                <span onClick={toggleConfirmPasswordVisibility}>
                  {confirmPasswordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </span>
              }
            />
          </Form.Item>

          <Form.Item>
            <Row justify="space-between" align="middle" style={{marginBottom:'8px'}}>
              <Col>
                <Form.Item name="remember" valuePropName="checked" noStyle >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Col>
            </Row>

          {/* Sign Up Button */}
          <Form.Item style={{ marginBottom: '5px' }}>
            <Button type="primary" htmlType="submit" block icon={<LoginOutlined/>} >
              Sign Up
            </Button>
          </Form.Item>

          {/* Google Sign Up Button */}
          <Form.Item style={{ marginBottom: '0' }}>
            <Button
              type="default"
              icon={<GoogleOutlined />}
              block
              style={{
                backgroundColor: '#4285F4',
                color: '#fff',
                border: 'none',
                boxShadow: 'none',
                marginTop: '5px', 
              }}
              >
              Sign Up with Google
            </Button>
            or <Link to={'/'}>Login now!</Link>
              </Form.Item>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
