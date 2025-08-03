import React from 'react';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AI Product Ideation: Principles and Practical Applications",
      issuer: "LinkedIn Learning",
      date: "June 2025",
      url: "https://www.linkedin.com/learning/certificates/8451dac32cc5efb58d8066b269cacf9311afeca58c160a7c091adbba3717f4e8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BlYD2Ls8SRIKnxKlsDY4W%2FA%3D%3D"
    },
    {
      title: "Managing Project Stakeholders",
      issuer: "LinkedIn Learning",
      date: "June 2025",
      url: "https://www.linkedin.com/learning/certificates/4c018802300acc25387ee04690d78a65ca369b331e29c44b80b2a702f50a1679?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BlYD2Ls8SRIKnxKlsDY4W%2FA%3D%3D"
    },
    {
      title: "Product Management: Customer Development",
      issuer: "LinkedIn Learning",
      date: "June 2025",
      url: "https://www.linkedin.com/learning/certificates/59c53e54d6bd11c2dd5bea9dad47bd21000a01fd0033d4d93ca5218a28dff011?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1SKb6skQvGiY1jngkf0cg%3D%3D"
    }
  ];

  return (
    <section className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 mb-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl border border-pink-100 hover:transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-gray-800 mb-3 leading-tight">
              {cert.title}
            </h3>
            
            <p className="text-red-500 font-medium mb-2">
              {cert.issuer}
            </p>
            
            <p className="text-gray-500 text-sm mb-4">
              {cert.date}
            </p>
            
            <a 
              href={cert.url}
              className="inline-flex items-center gap-2 text-red-500 font-medium hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

