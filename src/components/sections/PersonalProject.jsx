import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Building } from 'lucide-react'

const PersonalProject = () => {
  const projects = [
    {
      title: "BidBazar - Real-Time Bidding Platform (TolMol)",
      description: "A modern bidding platform designed specifically for the Indian market, featuring real-time auctions for local services like wedding planning, catering, and photography. The platform combines engaging user experience with cultural relevance.",
      technologies: ["React.js", "Node.js", "WebSocket", "MySQL", "Flask"],
      features: [
        "Real-time bidding with live updates",
        "Indian market focus with local services",
        "Engaging UI with instant feedback",
        "Achievement and progress systems",
        "Multi-language support (English/Hindi)",
        "Mobile-responsive design"
      ],
      url: "https://tolmol.vercel.app/",
      status: "Demo Frontend Live",
      category: "Full-Stack Web Application"
    }
  ]

  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <Card key={index} className="bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <CardTitle className="text-2xl text-gray-900 mb-2">{project.title}</CardTitle>
                <CardDescription className="text-orange-600 font-medium flex items-center gap-2 mb-3">
                  <Building className="w-4 h-4" />
                  {project.category}
                </CardDescription>
                <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 w-fit">
                  {project.status}
                </Badge>
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </a>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Highlights */}
              <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-gray-900 mb-2">Project Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600">Mobile Responsive</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">Real-time</div>
                    <div className="text-sm text-gray-600">Live Updates</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">Cultural</div>
                    <div className="text-sm text-gray-600">Indian Context</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default PersonalProject
