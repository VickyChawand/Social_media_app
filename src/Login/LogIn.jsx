// LogIn.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPage } from '../redux/actions';
import { Form, Input, Button, Checkbox } from 'antd';

const LogIn = () => {
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    // Dispatch action to update current page
    dispatch(setCurrentPage('/home'));
  };

  return (
    <div>
      <h2>Log In</h2>
      <Form name="login" initialValues={{ remember: true }}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          {/* Use onClick event to trigger the handleLoginClick function */}
          <Button type="primary" htmlType="button" onClick={handleLoginClick}>
            Log In
          </Button>
        </Form.Item>
      </Form>

      {/* Use a Link component from react-router-dom to navigate to Home */}
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LogIn;
