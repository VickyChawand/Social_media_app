import React from 'react';
import { Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/actions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate if not already imported

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogOut = () => {
    // Dispatch action to update current page
    dispatch(setCurrentPage('/signup'));

    // Implement your log-out logic here
    message.success('Log Out successful!');
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <Button type="primary" onClick={handleLogOut}>Log Out</Button>
    </div>
  );
};

export default Home;
