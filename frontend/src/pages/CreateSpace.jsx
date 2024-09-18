import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/create-space.css'; // Import your CSS for styling

const CreateSpace = () => {
  const [ownerName, setOwnerName] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [websiteLogo, setWebsiteLogo] = useState('');
  const [randomLink, setRandomLink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Implement the logic to submit the form data to your backend
    // For example, you could use an API call to save the space
    // await api.createSpace({ ownerName, websiteName, websiteLogo });

    // Temporarily log the data
    console.log({ ownerName, websiteName, websiteLogo });

    // Redirect to a different page or display a success message
    navigate('/home'); // Redirect to the dashboard or any other page
  };

  const generateRandomLink = () => {
    // Implement logic to generate a random link
    // This is a placeholder implementation
    const randomLink = `https://example.com/${Math.random().toString(36).substring(7)}`;
    setRandomLink(randomLink);
  };

  return (
    <div className="create-space-container">
      <h1>Create New Space</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ownerName">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="websiteName">Website Name</label>
          <input
            type="text"
            id="websiteName"
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="websiteLogo">Website Logo URL</label>
          <input
            type="text"
            id="websiteLogo"
            value={websiteLogo}
            onChange={(e) => setWebsiteLogo(e.target.value)}
          />
        </div>

        <button type="button" onClick={generateRandomLink}>Generate Random Link</button>
        {randomLink && <p>Generated Link: {randomLink}</p>}

        <button type="submit">Create Space</button>
      </form>
    </div>
  );
};

export default CreateSpace;
