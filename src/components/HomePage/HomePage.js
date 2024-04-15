
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './HomePage.css';

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleOptionClick = (view) => {
//     let path = `/${view.toLowerCase().replace(/\s+/g, '')}`;
//     // Navigate to the appropriate route
//     navigate(path);
//   };

//   return (
//     <div className="container">
//       <h1>Welcome to Marksheet Analysis System</h1>
//       <button onClick={() => handleOptionClick('Student View')}>Student View</button>
//       <button onClick={() => handleOptionClick('Teacher View')}>Teacher View</button>
//       <button onClick={() => handleOptionClick('HOD/Principle View')}>HOD/Principle View</button>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Make sure to import your CSS file
import TeacherLoginForm from '../TeacherLoginForm/TeacherLoginForm'; // Adjust the path to your TeacherLoginForm component

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOptionClick = (view) => {
    console.log('Clicked:', view);

    if (view === 'Teacher View') {
      if (isLoggedIn) {
        navigate('/teacherview'); // Navigate to /teacherview if logged in
      } else {
        // Render TeacherLoginForm
        // You can directly return the component here
        return <TeacherLoginForm onLoginSuccess={() => setIsLoggedIn(true)} />;
      }
    } else {
      let path = `/${view.toLowerCase().replace(/\s+/g, '')}`;
      console.log('Navigating to:', path);
      navigate(path); // Navigate to other views
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Marksheet Analysis System</h1>
      <button onClick={() => handleOptionClick('Student View')}>Student View</button>
      <button onClick={() => handleOptionClick('Teacher View')}>Teacher View</button>
      <button onClick={() => handleOptionClick('HOD/Principle View')}>HOD/Principle View</button>
      {/* Ensure proper rendering of TeacherLoginForm */}
      {isLoggedIn ? <p>Logged in as Teacher</p> : null}
    </div>
  );
};

export default HomePage;
