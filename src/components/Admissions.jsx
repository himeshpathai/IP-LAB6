import React from 'react';
import './Admissions.css';

const Admissions = () => {
  return (
    <div className="admissions-container">
      <div className="section">
        <h2>Important Links</h2>
        <ul>
          <li>Newspaper Notification (News paper Advertisement)</li>
          <ul>
            <li><a href="#">HINDU SINDH</a></li>
            <li><a href="#">The Times Of India</a></li>
          </ul>
          <li>Medical fitness format</li>
          <li>Sindhi Community - Format</li>
          <li>Anti-ragging</li>
          <li>Tour of Departments</li>
          <ul>
            <li><a href="#">Electronics and Telecommunication Engineering</a></li>
            <li><a href="#">Artificial Intelligence and Data Science</a></li>
            <li><a href="#">Master of Computer Applications</a></li>
          </ul>
        </ul>
      </div>

      <div className="section">
        <h2>Important Notices</h2>
        <ul>
          <li><a href="#">Govt. GR 100% Waiver in Tuition Fees & Exam Fees to Girls from AY 2024-25</a></li>
          <li><a href="#">Applications are invited against cancellation (B.Tech/M.Tech/DSE/MCA)</a></li>
        </ul>
      </div>

      <div className="section">
        <h2>Schedule/Merit List for UG</h2>
        <ul>
          <li><a href="#">ACAP-2 Schedule for Bachelor Of Technology (FE) - OPEN Category | Sindhi Category</a></li>
          <li><a href="#">ACAP-2 Schedule for DSE (FE)</a></li>
        </ul>
      </div>

      <div className="section">
        <h2>Vacancy position</h2>
        <ul>
          <li><a href="#">View Vacancy Position</a></li>
        </ul>
      </div>

      <div className="section">
        <h2>Schedule/Merit List for PG</h2>
        <ul>
          <li><a href="#">ACAP-2 Schedule for Master of Computer Applications (MCA) - OPEN Category | Sindhi Category</a></li>
          <li><a href="#">ACAP-2 Schedule for Master of Technology (M.Tech)</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Admissions;
