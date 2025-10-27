// Portfolio Data - All content in one place for easy maintenance

export const personalInfo = {
  name: 'Akshay Dhabale',
  title: 'Cloud Data & AI Architect',
  location: 'Toronto, Canada',
  phone: '+1 (514) 560-9036',
  email: 'akshaydhabale@gmail.com',
  linkedin: 'https://www.linkedin.com/in/akshay-dhabale-931bb59b/',
  github: 'https://github.com/akshaydhabale',
  profileImage: '/portfolio/profile.jpg',
  resumePDF: '/portfolio/Akshay_Dhabale_AI_CoE.pdf'
};

export const aboutMe = [
  'Innovative Cloud Data and AI Architect with experience in leading enterprise AI strategy, Generative AI applications, and cloud-based data modernization. Currently part of the AI Centre of Excellence at HGS Canada, where I architect and scale LLM-powered RAG platforms, AI-driven applications, and modern data platforms.',
  'Recognized for shaping AI roadmaps, mentoring high-performance teams, and delivering secure, production-ready AI systems that align with business goals. Expertise spans Azure OpenAI, Cognitive Search, PostgreSQL (pgvector), Azure ML, LangChain, and deep learning frameworks (PyTorch, TensorFlow).',
  'Additionally, developed frameworks for rapid development and delivery of AI applications to accelerate enterprise adoption. Trusted advisor to business stakeholders and Client Partners, bridging sales and delivery teams to ensure successful execution of AI initiatives.'
];

export const skills = {
  cloud: {
    title: 'Cloud Platforms',
    proficiency: 95,
    items: [
      { name: 'Microsoft Azure', level: 95 },
      { name: 'Amazon Web Services', level: 85 },
      { name: 'Multi-Cloud Architecture', level: 90 },
      { name: 'Azure DevOps', level: 90 },
      { name: 'CI/CD Pipelines', level: 88 }
    ]
  },
  data: {
    title: 'Data Engineering',
    proficiency: 92,
    items: [
      { name: 'Azure Data Factory', level: 95 },
      { name: 'Azure Synapse', level: 90 },
      { name: 'Databricks', level: 92 },
      { name: 'Delta Lake', level: 88 },
      { name: 'PySpark', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 95 }
    ]
  },
  ai: {
    title: 'AI & ML',
    proficiency: 90,
    items: [
      { name: 'Generative AI & LLMs', level: 92 },
      { name: 'RAG Pipelines', level: 95 },
      { name: 'Azure OpenAI', level: 93 },
      { name: 'LLM Fine-Tuning', level: 85 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'LangChain', level: 88 },
      { name: 'PyTorch & TensorFlow', level: 82 },
      { name: 'Azure ML & MLOps', level: 90 }
    ]
  },
  analytics: {
    title: 'Analytics & BI',
    proficiency: 93,
    items: [
      { name: 'Power BI', level: 95 },
      { name: 'Microsoft Fabric', level: 88 },
      { name: 'SAP Analytics Cloud', level: 85 },
      { name: 'DAX & SQL', level: 93 },
      { name: 'Data Modeling', level: 92 }
    ]
  }
};

export const experiences = [
  {
    company: 'Hinduja Global Solutions, Canada',
    role: 'Cloud Data & AI Architect',
    period: 'Current',
    highlights: [
      'Leading AI Centre of Excellence initiatives, architecting and scaling LLM-powered RAG platforms and AI-driven applications',
      'Developed persona-driven RAG application for Finance, HR, Sales, and Leadership using Azure OpenAI, Cognitive Search, and PostgreSQL pgvector',
      'Built modular frameworks enabling rapid development, testing, and delivery of AI applications across business domains',
      'Architected GenAI-powered content enrichment and summarization engine for enterprise knowledge reuse',
      'Led ETL modernization migrating legacy data warehouses to modern cloud platforms (Azure Synapse, Data Lake, Databricks)',
      'Shaped AI roadmaps and mentored high-performance teams on Generative AI, LLM fine-tuning, and responsible AI practices',
      'Implemented production-ready AI systems with Azure ML, LangChain, PyTorch, and Azure DevOps CI/CD pipelines'
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

export const education = [
  {
    degree: "Master's in Applied Computer Science",
    institution: 'Concordia University, Montreal, Canada',
    type: 'masters'
  },
  {
    degree: 'Bachelor of Engineering (Computer Technology)',
    institution: 'YCCE, Nagpur, India',
    type: 'bachelors'
  }
];

export const certifications = [
  'Microsoft Certified: Azure AI Engineer Associate',
  'Microsoft Certified: Fabric Analytics Engineer Associate',
  'Databricks Certified: Associate Developer for Apache Spark 3.0'
];

export const projects = [
  {
    title: 'Persona-Driven RAG Platform',
    description: 'Enterprise-grade conversational AI platform serving Finance, HR, Sales, and Leadership with role-aware responses using Azure OpenAI and Cognitive Search.',
    tech: ['Azure OpenAI', 'Cognitive Search', 'PostgreSQL', 'pgvector', 'Python', 'LangChain'],
    category: 'AI/ML',
    highlights: [
      'Scaled to serve 70-100 concurrent users',
      'Reduced response time by 60%',
      'Implemented RAG with semantic search'
    ]
  },
  {
    title: 'ETL Modernization Framework',
    description: 'Migrated legacy data warehouses to modern cloud platforms with AI-driven data validation and automated testing frameworks.',
    tech: ['Azure Synapse', 'Databricks', 'Data Lake', 'PySpark', 'Azure DevOps'],
    category: 'Data Engineering',
    highlights: [
      'Automated 80% of migration workflows',
      'Reduced processing time by 70%',
      'Zero data loss during migration'
    ]
  },
  {
    title: 'Legacy Data Migration - Medallion Architecture',
    description: 'Migrated legacy data from SAP and other enterprise sources to cloud using Medallion Architecture (Bronze, Silver, Gold layers) for data quality and governance.',
    tech: ['Azure Synapse', 'Databricks', 'Delta Lake', 'SAP Extractors', 'PySpark', 'Azure Data Factory'],
    category: 'Data Engineering',
    highlights: [
      'Implemented 3-tier Medallion Architecture',
      'Migrated data from SAP and legacy systems',
      'Established data quality framework',
      'Enabled real-time analytics on historical data'
    ]
  },
  {
    title: 'AI Application Framework',
    description: 'Modular framework for rapid development of AI applications using Python FastAPI backend and React frontend, enabling quick deployment of AI solutions across business domains.',
    tech: ['Python', 'FastAPI', 'React', 'Azure ML', 'Docker', 'Kubernetes', 'CI/CD'],
    category: 'AI/ML',
    highlights: [
      'Reduced AI application development time by 50%',
      'Standardized FastAPI + React architecture',
      'Integrated monitoring & logging',
      'Enabled quick deployment of AI solutions'
    ]
  }
];

// LinkedIn Recommendations
// To update: Visit https://www.linkedin.com/in/akshay-dhabale-931bb59b/details/recommendations/
// Copy recent recommendations and paste them here
// Format: { name, role, company, text, avatar }

export const testimonials = [
  {
    name: 'Vijay R',
    role: '',
    company: '',
    text: 'Akshay\'s work ethic and his curiosity to learn stands out till this day. He quickly became my go to team member for all things related to Data integration. His command on technical and coupled with soft skills, helped all my complex data integration projects to a successful outcome. Suffice it to say, I enjoyed working with Akshay immensely.',
    avatar: '👤',
    linkedInUrl: ''
  },
  {
    name: 'Rima Mukherjee',
    role: '',
    company: '',
    text: 'Akshay was a consultant for our team for the automation of Power BI Reports. His work always went above and beyond our expectations. He is quite well with his Analytical Skills to solve problems. He is also a good communicator and problem solver. He is always open about the progress of the project and never hesitated to questions asked by the Business. He would be a valuable asset to any organization.',
    avatar: '👤',
    linkedInUrl: ''
  },
  {
    name: 'View More',
    role: 'LinkedIn Recommendations',
    company: 'Click to see all recommendations',
    text: 'See more recommendations and endorsements from colleagues, managers, and clients on my LinkedIn profile.',
    avatar: '🔗',
    linkedInUrl: 'https://www.linkedin.com/in/akshay-dhabale-931bb59b/details/recommendations/'
  }
];

// Instructions to update testimonials:
// 1. Go to: https://www.linkedin.com/in/akshay-dhabale-931bb59b/details/recommendations/
// 2. Copy the recommendation text
// 3. Add recommender's name, role, and company
// 4. Paste into the array above following the same format

