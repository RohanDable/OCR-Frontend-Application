import React from 'react';
import './StudentDashboard.css';
import { Bar } from 'react-chartjs-2'; // Import Chart.js component

const StudentDashboard = ({ studentData }) => {
  // Sample data for the chart (replace with your actual data)
  const chartData = {
    labels: ['Math', 'Science', 'History', 'English', 'Geography'],
    datasets: [
      {
        label: 'Student Marks',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [85, 75, 90, 82, 88], // Sample marks data (replace with actual student marks)
      },
    ],
  };

  return (
    <div className="StudentDashboard">
      <div className="StudentDashboardContent">
        <h2>Student Dashboard</h2>
        {/* Display chart using Chart.js */}
        <div className="ChartContainer">
          <Bar
            data={chartData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  suggestedMax: 100, // Customize according to your needs
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
