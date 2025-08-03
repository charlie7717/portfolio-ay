import React from 'react';

const About = () => {
  const highlights = [
    {
      title: "Product Innovation",
      description: "Led development of AI-powered SaaS products with 40% user growth"
    },
    {
      title: "Team Leadership",
      description: "Managed cross-functional teams of 8+ members across multiple projects"
    },
    {
      title: "Strategic Planning",
      description: "Developed go-to-market strategies resulting in high revenue growth"
    },
    {
      title: "Technical Expertise",
      description: "Deep understanding of AI, automation, and modern tech stacks"
    }
  ];

  return (
    <section className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 mb-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>
      
      <div className="text-lg leading-relaxed text-center mb-8">
        <p>
          Results-driven Product/Project Manager with 3+ years of experience delivering AI-powered SaaS products, 
          automation platforms, and B2B solutions. I combine technical expertise with strategic thinking to drive 
          product innovation and accelerate business growth.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {highlights.map((highlight, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-pink-400 to-red-400 text-white p-5 rounded-2xl text-center transform transition-transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

