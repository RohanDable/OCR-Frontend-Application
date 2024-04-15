import React, { useState, useEffect } from 'react';
import './HodPrincipleAddTeacher.css';

const HodPrincipleAddTeacher = () => {
  const [teacherName, setTeacherName] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddTeacher = (e) => {
    e.preventDefault(); // Prevent form submission (page reload)
    
    // Here, you would perform the actual logic to add the teacher to your system
    // For demonstration, we're just showing the success message
    setShowSuccessMessage(true);

    // Reset the input field after adding the teacher (optional)
    setTeacherName('');
  };

  // Effect to add click event listener when success message is shown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showSuccessMessage && !e.target.closest('.success-message')) {
        // Clicked outside the success message, hide it
        setShowSuccessMessage(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSuccessMessage]);

  return (
    <div className="container">
      <h1 className="section-heading">HOD / Principle Section</h1>
      <div className="add-teacher-section">
        <h2 className="sub-heading">Add New Teacher</h2>
        <form onSubmit={handleAddTeacher}>
          <label htmlFor="teacherName">Teacher's Name:</label>
          <input
            type="text"
            id="teacherName"
            name="teacherName"
            placeholder="Enter teacher's name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
          <button type="submit">Add Teacher</button>
        </form>
      </div>

      {/* Show success message as a pop-up */}
      {showSuccessMessage && (
        <div className="success-message">
          New Teacher Added Successfully
        </div>
      )}
    </div>
  );
};

export default HodPrincipleAddTeacher;
