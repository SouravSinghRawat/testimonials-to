import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css'; // Import the CSS for styling

const Spaces = () => {
  const [spaces, setSpaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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

  return (
    <div className="spaces-container">
      <h1>My Spaces</h1>
      <div className="spaces-list">
        {spaces.map(space => (
          <div key={space.id} className="space-item">
            <h2>{space.name}</h2>
            <p>Total Feedbacks: {space.feedbackCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spaces;
