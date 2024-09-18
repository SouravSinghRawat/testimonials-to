import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import '../styles/dashboard.css'; // Import the CSS for styling

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [spaces, setSpaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user info from local storage
    setLoggedInUser(localStorage.getItem('loggedInUser'));

    // Fetch spaces data (replace with your API logic)
    const fetchSpacesData = async () => {
      // Example placeholder data, replace with actual API call
      const fetchedSpaces = [
        { id: 1, name: 'Space 1', feedbackCount: 10 },
        { id: 2, name: 'Space 2', feedbackCount: 8 },
      ];
      setSpaces(fetchedSpaces);
    };

    fetchSpacesData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleViewSpaces = () => {
    navigate('/spaces'); // Navigate to the spaces details page
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

      {/* Total Spaces section */}
      <div className="dashboard-item" onClick={handleViewSpaces}>
        <h2>{spaces.length}</h2>
        <p>Total Spaces</p>
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
