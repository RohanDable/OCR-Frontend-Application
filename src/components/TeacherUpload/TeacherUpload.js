// TeacherUpload.js

import React, { useState } from 'react';
import './TeacherUpload.css';

const TeacherUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedFileName(file.name); // Update selectedFileName with the chosen file name
    }
  };

  const handleShowResult = () => {
    console.log('Show result logic here');
    // Implement logic to display result (e.g., modal, overlay)
  };

  const handleDownloadResult = () => {
    if (uploadedImage) {
      const link = document.createElement('a');
      link.href = uploadedImage;
      link.download = 'uploaded_image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="upload-container">
      <h1>Teacher Section</h1>
      <p>Upload an Image</p>
      <label htmlFor="image-upload" className="custom-file-input">
        {selectedFileName ? selectedFileName : 'Choose File'}
      </label>
      <input
        type="file"
        id="image-upload"
        className="upload-input"
        onChange={handleImageUpload}
        accept="image/*"
      />
      {uploadedImage && (
        <div>
          <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
        </div>
      )}
      <div className="action-buttons">
        <button className="action-button show-button" onClick={handleShowResult}>
          Show Result
        </button>
        <button className="action-button download-button" onClick={handleDownloadResult}>
          Download Result
        </button>
      </div>
    </div>
  );
};

export default TeacherUpload;
