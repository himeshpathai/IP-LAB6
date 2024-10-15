import React, { useState } from 'react';

const About = () => {
    // State to manage the current slide
    const [activeSlide, setActiveSlide] = useState('history');

    // Function to switch slides
    const handleSlideChange = (slide) => {
        setActiveSlide(slide);
    };

    return (
        <div className="about-container">
            <h2>About Us</h2>

            {/* Navigation buttons for slides */}
            <div className="slide-nav">
                <button onClick={() => handleSlideChange('history')} className={activeSlide === 'history' ? 'active' : ''}>
                    History
                </button>
                <button onClick={() => handleSlideChange('ranking')} className={activeSlide === 'ranking' ? 'active' : ''}>
                    Ranking and Position
                </button>
                <button onClick={() => handleSlideChange('departments')} className={activeSlide === 'departments' ? 'active' : ''}>
                    Departments
                </button>
            </div>

            {/* Slide content */}
            <div className="slide-content">
                {activeSlide === 'history' && (
                    <div className="slide">
                        <h3>Our History</h3>
                        <p>
                            Established in 1965, our institution has been at the forefront of educational innovation. Starting with a handful of 
                            students and faculty, we have grown into a world-class university with numerous programs and research opportunities. 
                            Over the years, we have produced thousands of graduates who are contributing to society in various fields.
                        </p>
                    </div>
                )}
                {activeSlide === 'ranking' && (
                    <div className="slide">
                        <h3>Ranking and Position</h3>
                        <p>
                            Ranked consistently among the top 100 universities globally, our institution has excelled in research, 
                            academic excellence, and student satisfaction. We are currently ranked #15 in national rankings and 
                            #90 in global rankings for academic research and innovation.
                        </p>
                    </div>
                )}
                {activeSlide === 'departments' && (
                    <div className="slide">
                        <h3>Departments</h3>
                        <ul>
                            <li>Department of Computer Science</li>
                            <li>Department of Mechanical Engineering</li>
                            <li>Department of Electrical Engineering</li>
                            <li>Department of Civil Engineering</li>
                            <li>Department of Humanities and Social Sciences</li>
                            <li>Department of Mathematics and Physics</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Inline styles for basic layout */}
            <style jsx>{`
                .about-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .slide-nav {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                .slide-nav button {
                    margin: 0 10px;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    background-color: #007bff;
                    color: #fff;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .slide-nav button.active {
                    background-color: #0056b3;
                }
                .slide-nav button:hover {
                    background-color: #0056b3;
                }
                .slide-content {
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .slide-content h3 {
                    margin-top: 0;
                }
                .slide-content ul {
                    list-style-type: disc;
                    margin-left: 20px;
                }
            `}</style>
        </div>
    );
};

export default About;
