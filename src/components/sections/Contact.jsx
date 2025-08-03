import React from 'react';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9554911115",
      href: "tel:+919554911115",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email",
      value: "ashwanii.office@gmail.com",
      href: "mailto:ashwanii.office@gmail.com",
      color: "blue"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/ashwaniiyadavv",
      href: "https://linkedin.com/in/ashwaniiyadavv",
      color: "pink"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lucknow, India",
      subtitle: "Willing to Relocate",
      color: "pink"
    }
  ];

  return (
    <section className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 mb-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Contact Information
      </h2>
      
      <div className="max-w-2xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            const isBlue = method.color === 'blue';
            
            return (
              <div 
                key={index}
                className={`${
                  isBlue 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100' 
                    : 'bg-gradient-to-br from-pink-50 to-red-50 border-pink-100'
                } p-8 rounded-2xl border`}
              >
                <div className="text-4xl mb-4">
                  <IconComponent 
                    size={48} 
                    className={`mx-auto ${
                      isBlue ? 'text-blue-500' : 'text-pink-500'
                    }`} 
                  />
                </div>
                
                <h3 className="text-gray-800 font-semibold mb-3 text-lg">
                  {method.title}
                </h3>
                
                {method.href ? (
                  <a 
                    href={method.href}
                    className={`${
                      isBlue ? 'text-blue-600 hover:text-blue-700' : 'text-pink-600 hover:text-pink-700'
                    } text-lg font-medium transition-colors`}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.value}
                  </a>
                ) : (
                  <div>
                    <p className="text-gray-700 text-lg font-medium mb-1">
                      {method.value}
                    </p>
                    {method.subtitle && (
                      <p className="text-pink-600 text-sm font-medium">
                        {method.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <h3 className="text-gray-800 font-semibold mb-5 text-xl">
            Let's Connect
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about product management, AI, and technology. Feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

