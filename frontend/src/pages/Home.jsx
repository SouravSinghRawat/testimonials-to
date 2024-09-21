import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import '../styles/dashboard.css'; // Import the CSS for styling

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user info from local storage
    setLoggedInUser(localStorage.getItem('loggedInUser'));

  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };


  return (
    <div className="dashboard-container">
      {/* Top section with username and logout button */}
      <div className="dashboard-header">
        <h1>{loggedInUser}'s Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Create Space button */}
      <button className="create-space-btn" onClick={() => navigate('/create-space')}>
        Create Space
      </button>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default Home;
