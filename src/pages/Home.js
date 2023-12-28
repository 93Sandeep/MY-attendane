// Import necessary modules
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

// Create a functional component for the Home page
function HomePage() {
  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
        <h1>Attendance Tracking System</h1>
      </header>

      <nav style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>

      <div className="hero-section" style={{ textAlign: 'center', padding: '50px 0' }}>
        <h2>Welcome to the Attendance Tracking System!</h2>
      </div>
    </div>
  );
}

export default HomePage;
