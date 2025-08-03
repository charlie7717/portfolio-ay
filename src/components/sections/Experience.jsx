import React from 'react';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Project/Product Manager",
      company: "JRI.AI",
      companyUrl: "https://jri.ai/",
      date: "Jan 2025 - Present",
      isStartup: true,
      responsibilities: [
        "Leading end-to-end delivery of AI-driven compliance and automation platforms aligned with Indian regulatory standards and SME requirements",
        "Deploying generative AI, predictive analytics, and trend forecasting to streamline operations and elevate product strategy",
        "Managing cross-functional Agile teams (engineering, design, marketing) using Asana, scope control, and timely delivery",
        "Overseeing risk mitigation, stakeholder communication, and real-time reporting, enhancing transparency and alignment"
      ],
      projectUrl: "https://jri.ai/"
    },
    {
      title: "Construction Consultant",
      company: "Self-Employed",
      date: "Jan 2024 - Nov 2024",
      responsibilities: [
        "Delivered consulting on civil and EPC projects with focus on pre-construction planning, cost estimation, and workflow optimization",
        "Used project dashboards and digital tools to enable real-time tracking, reporting, and stakeholder communication",
        "Applied risk assessment models to forecast delays and resource gaps, improving planning accuracy and execution efficiency"
      ]
    },
    {
      title: "Associate Product Manager",
      company: "KalamIAS",
      date: "Sept 2023 - Jan 2024",
      responsibilities: [
        "Led development of AI-based interview simulation model, boosting user engagement by 25%",
        "Partnered with AI, UX, and education teams to define product specs and deliver MVPs aligned with user needs",
        "Ran user interviews and feedback cycles, improving learner satisfaction by 20%",
        "Managed product workflows, ensuring dev clarity and stakeholder sync"
      ],
      hasProject: true
    },
    {
      title: "Civil Services Preparation",
      company: "Independent Study",
      date: "2020 - 2023",
      responsibilities: [
        "Dedicated 3 years to rigorous study of governance, economics, public policy, and social systems",
        "Gained advanced proficiency in analytical reasoning, critical reading, and interdisciplinary research",
        "Explored policy-behavior-system dynamics to enhance long-term impact in mission-driven environments",
        "Developed strategic mindset and cross-functional thinking capabilities"
      ]
    },
    {
      title: "Site Engineer",
      company: "S.V.V. Electro Engineering Pvt. Ltd",
      date: "April 2018 - Feb 2020",
      responsibilities: [
        "Supervised on-site civil works (foundation, structure, MEP) for commercial & residential projects",
        "Performed daily QA/QC inspections & material checks per IS codes & BIS standards",
        "Coordinated with contractors, vendors & consultants for timely, snag-free delivery",
        "Assisted PM in scheduling, milestone tracking & resource planning"
      ]
    }
  ];

  return (
    <section className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 mb-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Professional Experience
      </h2>
      
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-8 relative">
            <div className="absolute -left-2 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
            
            <div className="flex justify-between items-start mb-4 flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <div className="flex items-center gap-2">
                  {exp.companyUrl ? (
                    <a 
                      href={exp.companyUrl} 
                      className="text-blue-500 font-medium hover:text-purple-600 transition-colors flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-blue-500 font-medium">{exp.company}</span>
                  )}
                  {exp.isStartup && (
                    <span className="text-xs bg-gradient-to-r from-pink-400 to-red-400 text-white px-2 py-1 rounded-full">
                      Startup
                    </span>
                  )}
                </div>
              </div>
              <span className="text-gray-500 text-sm">{exp.date}</span>
            </div>
            
            <ul className="space-y-2 mb-4">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▶</span>
                  <span className="text-gray-700">{resp}</span>
                </li>
              ))}
            </ul>
            
            {(exp.projectUrl || exp.hasProject) && (
              <div className="mt-4">
                <a 
                  href={exp.projectUrl || "#"} 
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:transform hover:-translate-y-1 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

