import React from 'react';
import './CourseCatalog.css';

const Course = ({ title, description, onEnroll }) => {
    return (
      <div className="course">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onEnroll}>Enroll</button>
      </div>
    );
  };

  function CourseCatalog() {
    const courses = [
      { id: 1, title: 'IP', description: 'Internet Programming' },
      { id: 2, title: 'CNS', description: 'Computer Network Security' },
      { id: 3, title: 'ADSA', description: 'Advanced Data structure and Algorithm' },
      { id: 4, title: 'SE', description: 'Software Engineering' },
      { id: 5, title: 'BCE', description: 'Buissness Communication and Ethics' },
      { id: 6, title: 'EEB', description: 'Entrepreneurship and E-Buissness' },
    ];
  
    const handleEnroll = (courseId) => {
      alert(`Enrolled in course ID: ${courseId}`);
    };
  
    return (
      <div className='all-courses'>
   
        {courses.map(course => (
          <Course
            key={course.id}
            title={course.title}
            description={course.description}
            onEnroll={() => handleEnroll(course.id)}
          />
        ))}
      </div>
    );
  };

  export default CourseCatalog
  