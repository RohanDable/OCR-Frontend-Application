// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage';
// import StudentDashboard from './components/StudentDashboard/StudentDashboard';
// import TeacherUpload from './components/TeacherUpload/TeacherUpload';
// import HodPrincipleAddTeacher from './components/HodPrincAddTeacher/HodPrincipleAddTeacher';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/studentview" element={<StudentDashboard />} />
//           <Route path="/teacherview" element={<TeacherUpload />} />
//           <Route path="/hodprincipleview" element={<HodPrincipleAddTeacher />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage';
// import StudentDashboard from './components/StudentDashboard/StudentDashboard';
// import TeacherUpload from './components/TeacherUpload/TeacherUpload';
// import HodPrincipleAddTeacher from './components/HodPrincAddTeacher/HodPrincipleAddTeacher';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/studentview" element={<StudentDashboard />} />
//           <Route path="/teacherview" element={<TeacherUpload />} />
//           <Route path="/hod/principleview" element={<HodPrincipleAddTeacher />} /> {/* Corrected path */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;









import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import TeacherUpload from './components/TeacherUpload/TeacherUpload';
import HodPrincipleAddTeacher from './components/HodPrincAddTeacher/HodPrincipleAddTeacher';
import TeacherLoginForm from './components/TeacherLoginForm/TeacherLoginForm'; // Import the TeacherLoginForm component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studentview" element={<StudentDashboard />} />
          {/* Route for Teacher Upload with conditional rendering */}
          <Route
            path="/teacherview"
            element={isLoggedIn ? <TeacherUpload /> : <TeacherLoginForm onLoginSuccess={() => setIsLoggedIn(true)} />}
          />
          <Route path="/hod/principleview" element={<HodPrincipleAddTeacher />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
