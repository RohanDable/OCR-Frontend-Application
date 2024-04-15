// import React, { useState } from 'react';
// import './TeacherLoginForm.css';

// const TeacherLoginForm = ({ onLoginSuccess }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Perform authentication logic (e.g., API call) here
//     if (username === 'teacher' && password === 'password') {
//       // Simulate successful login (replace with actual logic)
//       onLoginSuccess();
//     } else {
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Teacher Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default TeacherLoginForm;











import React, { useState } from 'react';
import './TeacherLoginForm.css';

const TeacherLoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication logic (replace with actual implementation)
    if (username === 'teacher' && password === 'password') {
      // Call the onLoginSuccess function to update the parent component state
      onLoginSuccess();
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Teacher Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default TeacherLoginForm;
