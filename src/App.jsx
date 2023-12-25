import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SingUp/SignUp';
import LogIn from './Login/LogIn';
import Home from './Home/Home';

const App = () => {
  return (
      <Router>
        <Routes>
          {/* Route for Sign Up */}
          <Route path="/signup" Component={SignUp} />

          {/* Route for Log In */}
          <Route path="/login" Component={LogIn} />

          {/* Route for Home */}
          <Route path="/home" Component={Home} />

          {/* Default redirect to Sign Up */}
          <Route path="/" Component={SignUp} />
        </Routes>
      </Router>
  );
};

export default App;
