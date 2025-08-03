import React from 'react';

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Technology in Civil Engineering",
      school: "JECRC UDML College of Engineering",
      year: "2013 - 2017"
    },
    {
      degree: "Summer Internship - Construction & Project Management",
      school: "Larsen & Toubro",
      year: "April 2016 - July 2016"
    },
    {
      degree: "Summer Internship - Public Sector Construction",
      school: "UP Police Awas Nigam",
      year: "June 2016 - October 2016"
    }
  ];

  return (
    <section className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 mb-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Education
      </h2>
      
      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {item.degree}
            </h3>
            
            <p className="text-blue-600 font-medium mb-2">
              {item.school}
            </p>
            
            <p className="text-gray-500">
              {item.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

