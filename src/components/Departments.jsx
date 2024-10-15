import React from 'react';

const departmentsData = [
    {
        name: 'Computer Science',
        description: 'The Department of Computer Science focuses on creating future leaders in software development, data science, and artificial intelligence.',
        imageUrl: '/src/assets/images.jpeg', 
    },
    {
        name: 'Mechanical Engineering',
        description: 'Our Mechanical Engineering department offers courses on design, manufacturing, and mechatronics, preparing students for the ever-evolving tech industry.',
        imageUrl: '/src/assets/images.jpeg',  
    },
    {
        name: 'Electrical Engineering',
        description: 'The Electrical Engineering department is dedicated to innovations in electronics, electrical systems, and communication technologies.',
        imageUrl: '/src/assets/images.jpeg',  
    },
    {
        name: 'Civil Engineering',
        description: 'Our Civil Engineering program equips students with the skills to design and build infrastructure such as roads, bridges, and buildings.',
        imageUrl: '/src/assets/images.jpeg',  
    },
    {
        name: 'Humanities and Social Sciences',
        description: 'The Humanities and Social Sciences department provides knowledge in subjects like history, literature, philosophy, and sociology.',
        imageUrl: '/src/assets/images.jpeg',  
    },
];

const Departments = () => {
    return (
        <div className="departments-container">
            <h2>Our Departments</h2>

            <div className="departments-list">
                {departmentsData.map((department, index) => (
                    <div className="department-card" key={index}>
                        <img src={department.imageUrl} alt={department.name} className="department-image" />
                        <div className="department-info">
                            <h3>{department.name}</h3>
                            <p>{department.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .departments-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }

                .departments-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }

                .department-card {
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    margin: 20px;
                    padding: 20px;
                    width: 300px;
                    text-align: left;
                    transition: transform 0.3s ease;
                }

                .department-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
                }

                .department-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 10px;
                    margin-bottom: 15px;
                }

                .department-info h3 {
                    margin-bottom: 10px;
                    color: #007bff;
                }

                .department-info p {
                    color: #555;
                }
            `}</style>
        </div>
    );
};

export default Departments;

