import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, ChevronDown, Award, Briefcase, GraduationCap, Code, Database, Brain, BarChart3 } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('cloud');

  const skills = {
    cloud: {
      icon: <Code className="w-8 h-8" />,
      title: 'Cloud Platforms',
      items: ['Microsoft Azure', 'Amazon Web Services', 'Multi-Cloud Architecture', 'Azure DevOps', 'CI/CD Pipelines']
    },
    data: {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Engineering',
      items: ['Azure Data Factory', 'Azure Synapse', 'Databricks', 'Delta Lake', 'PySpark', 'Python', 'SQL']
    },
    ai: {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & ML',
      items: ['Generative AI', 'Azure OpenAI', 'RAG Applications', 'Cognitive Search', 'ML Frameworks']
    },
    analytics: {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & BI',
      items: ['Power BI', 'Microsoft Fabric', 'SAP Analytics Cloud', 'DAX & SQL', 'Data Modeling']
    }
  };

  const experiences = [
    {
      company: 'Hinduja Global Solutions, Canada',
      role: 'Cloud Data Architect',
      period: 'Current',
      highlights: [
        'Designed RAG application using Azure OpenAI, Cognitive Search, and PostgreSQL',
        'Delivered multi-cloud PoCs across Azure and AWS',
        'Mentored junior engineers on AI/ML frameworks and Generative AI',
        'Architected scalable cloud infrastructure with CI/CD pipelines',
        'Built metadata-driven ingestion frameworks in Python and PySpark',
        'Implemented enterprise security with Azure AD, RLS, and Key Vault'
      ]
    },
    {
      company: 'Teklink-USA',
      role: 'Cloud Analytics Consultant',
      period: '2021-2023',
      highlights: [
        'Led UAT workshops and translated requirements into Power BI dashboards',
        'Designed data models and transformation logic using SQL and DAX',
        'Automated refresh pipelines for self-service BI adoption',
        'Implemented Row-Level Security and Azure AD integration'
      ]
    },
    {
      company: 'Teklink Software Pvt Ltd, India',
      role: 'Consultant',
      period: '2018-2021',
      highlights: [
        'Delivered SAP BI implementations (BusinessObjects, Lumira, SAC)',
        'Built Azure Data Factory pipelines for data ingestion',
        'Developed ETL logic and Power BI dashboards',
        'Integrated data from SAP BW, SQL Server, and SharePoint'
      ]
    }
  ];

  const certifications = [
    'Microsoft Certified: Azure AI Engineer Associate',
    'Microsoft Certified: Fabric Analytics Engineer Associate',
    'Databricks Certified: Associate Developer for Apache Spark 3.0'
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Akshay Dhabale
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'experience', 'education', 'certifications'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about', 'skills', 'experience', 'education', 'certifications'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 text-center transform transition-all hover:scale-105">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                AD
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Akshay Dhabale
            </h1>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold mb-6">
              Cloud Data & AI Architect
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <a href="tel:+15145609036" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <Phone className="w-5 h-5" />
                +1 (514) 560-9036
              </a>
              <a href="mailto:akshay@example.com" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all"
              >
                View Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            About Me
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Strategic and results-driven Cloud Architect with extensive experience in designing enterprise cloud, data, and AI solutions. Skilled at translating client business requirements into scalable architectures, leading solution design workshops, and delivering impactful Proofs of Concept (PoCs) across Azure and AWS.
            </p>
            <p>
              Trusted advisor to business stakeholders and Client Partners, bridging sales and delivery teams to ensure successful execution. Strong leadership in mentoring teams, driving adoption of AI/ML, and defining technology roadmaps that align with business strategy.
            </p>
            <p>
              Recognized for staying ahead of industry trends, continuously evaluating and adopting emerging technologies such as Generative AI, Microsoft Fabric, and multi-cloud architectures to deliver innovative and future-ready solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Core Competencies</h2>
          
          {/* Skill Category Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {Object.entries(skills).map(([key, skill]) => (
              <button
                key={key}
                onClick={() => setSelectedSkillCategory(key)}
                className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                  selectedSkillCategory === key
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  {skill.icon}
                  <span className="font-semibold text-sm text-center">{skill.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Skill Details */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              {skills[selectedSkillCategory].icon}
              {skills[selectedSkillCategory].title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills[selectedSkillCategory].items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm transform transition-all hover:scale-105 hover:shadow-md"
                >
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border-l-4 border-indigo-600 pl-6 py-4 hover:bg-gray-50 rounded-r-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                    <p className="text-xl text-indigo-600 font-semibold">{exp.role}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <ChevronDown className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-900">Master's in Applied Computer Science</h3>
              <p className="text-gray-700">Concordia University, Montreal, Canada</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900">Bachelor of Engineering (Computer Technology)</h3>
              <p className="text-gray-700">YCCE, Nagpur, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl text-white text-center transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <Award className="w-12 h-12 mx-auto mb-4" />
                <p className="font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center">
          <p className="text-gray-700 mb-4">© 2025 Akshay Dhabale. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

