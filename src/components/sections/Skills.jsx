import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        "Product Design & Documentation",
        "Road mapping & MVP Launch",
        "Product-Market Fit",
        "User Experience (UX)",
        "Product Lifecycle",
        "Feedback Loops"
      ]
    },
    {
      title: "Project Management",
      skills: [
        "Agile Sprint Planning",
        "Stakeholder Alignment",
        "Cross-Functional Collaboration",
        "KPIs & Reporting",
        "Scrum",
        "Risk Management"
      ]
    },
    {
      title: "AI & Technology",
      skills: [
        "Generative AI Strategy",
        "AI-Powered Product Development",
        "Automation Tools & Workflows",
        "AI Agents Creation",
        "Data-Driven Marketing",
        "Predictive Analytics"
      ]
    },
    {
      title: "Business & Strategy",
      skills: [
        "SaaS and B2B Product Scaling",
        "Startup Ecosystem Experience",
        "EdTech Product Experience",
        "Compliance in Indian Regulatory Landscape",
        "Stakeholder Engagement"
      ]
    },
    {
      title: "Technical Tools",
      skills: [
        "Asana",
        "JIRA",
        "Confluence",
        "Notion",
        "Slack",
        "Google Analytics",
        "N8N",
        "Balsamiq",
        "Canva",
        "Python",
        "Java"
      ]
    }
  ];

  return (
    <section className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 mb-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Skills & Expertise
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-5">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm border border-blue-200 hover:bg-blue-200 hover:transform hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

