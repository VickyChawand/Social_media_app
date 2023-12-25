import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/actions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUpClick = () => {
    // Dispatch action to update current page (if needed)
    dispatch(setCurrentPage('/home'));
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Form name="signup" initialValues={{ remember: true }}>
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
          {/* Use onClick event to trigger the handleSignUpClick function */}
          <Button type="primary" htmlType="button" onClick={handleSignUpClick}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <p>
        Already have an account? <button onClick={() => navigate('/login')}>Log In</button>
      </p>
    </div>
  );
};

export default SignUp;
