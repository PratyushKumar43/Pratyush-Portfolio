import { Github, Twitter, Linkedin, Globe, BookOpen, Video, MessageSquare, Briefcase, Mail, MapPin } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Pratyush Kumar Behera",
  username: "PratyushKumar43",
  title: "Full Stack & Applied AI Engineer",
  bio: "Building, Analyzing, Breaking. Documenting 0 - ∞",
  email: "pratyushkumaressential@gmail.com",
  status: "Job Hunting",
  openToWork: true,
  avatar: `${BASE}me.jpg`,
};

export const stats = [
  { label: "Projects", value: "6+" },
  { label: "Commits (2026)", value: "347" },
  { label: "Bugs", value: "∞" }
];

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/PratyushKumar43",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/p-pratyush-kumar-behera/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:pratyushkumaressential@gmail.com",
    icon: Mail,
  }
];

export const education = [
  {
    school: "National Institute of Technology (NIT), Rourkela",
    degree: "Bachelor of Technology (B.Tech)",
    period: "Nov 2022 - Jun 2026",
    location: "Rourkela, IN"
  }
];

export const projects = [
  {
    title: "Vetalis - Healthcare Management System",
    id: "vetalis-healthcare",
    description: "Healthcare platform with Gemini AI for medical image analysis and symptom inference.",
    github: "https://github.com/PratyushKumar43/Vetalis-Healthcare-Management-System",
    live: "https://vetalis-healthcare-management-syste.vercel.app/",
    tags: ["FastAPI", "Next.js", "Node.js", "Docker", "PostgreSQL", "Google-Gemini", "GitHub"],
    details: [
      "Built a production-grade healthcare platform integrating Google Gemini AI for automated medical image analysis, symptom inference, and AI-assisted decision support, achieving 92% diagnostic accuracy.",
      "Improved system performance by 40% via optimized REST APIs, JWT-based authentication, and database queries; reduced analysis latency by 50%, boosted UI responsiveness by 25%.",
      "Implemented Dockerized CI/CD with GitHub Actions, cutting release cycles by 60%."
    ]
  },
  {
    title: "AI Ops Assistant - Multi-Agent System",
    id: "ai-ops-assistant",
    description: "Multi-agent AI system (Planner → Executor → Verifier) for natural-language task execution using LangGraph.",
    github: "https://github.com/PratyushKumar43/ai_ops_assistant",
    tags: ["Python", "FastAPI", "LangGraph", "Pydantic"],
    details: [
      "Designed and implemented a LangGraph-based multi-agent AI system for natural-language task execution, orchestrating a 3-agent workflow (Planner, Executor, Verifier) that produces step-wise, schema-validated execution plans.",
      "Built an end-to-end AI operations platform using FastAPI and Streamlit, enabling multi-API execution, tracing, and dashboards, improving observability and reliability by 60%+."
    ]
  },
  {
    title: "Medical Report Diagnosis Platform",
    id: "medical-report-diagnosis",
    description: "RAG platform for medical report analysis using LLaMA-3 and Pinecone vector search.",
    github: "https://github.com/PratyushKumar43/Medical-Report-Diagnosis",
    tags: ["FastAPI", "Python", "MongoDB", "Pinecone", "RAG"],
    details: [
      "Built an AI-powered RAG (Retrieval-Augmented Generation) platform for secure medical report analysis, enabling 1K+ PDF uploads, automated extraction, and LLM-based insights using LLaMA-3 via Groq API.",
      "Developed a full-stack system with FastAPI backend, MongoDB for 1K+ records, Pinecone for vector storage/retrieval, and a responsive Streamlit frontend enabling 3-second diagnosis generation."
    ]
  },
  {
    title: "Credresolve - Expense Splitting App",
    id: "credresolve-split",
    description: "Expense splitting app with smart balance simplification to minimize group transactions.",
    github: "https://github.com/PratyushKumar43/Credresolve-Split",
    live: "https://credresolve-split.vercel.app",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    details: [
      "Built a full-stack expense sharing app with real-time balance tracking, supporting equal, exact-amount, and percentage-based splits across groups.",
      "Implemented a greedy balance simplification algorithm to minimize the number of transactions needed for group settlement.",
      "Integrated Clerk for enterprise-grade authentication, Zod + React Hook Form for validated expense inputs, and Zustand for client state.",
      "Fully responsive UI with Tailwind CSS and Shadcn/ui; deployed on Vercel with NeonDB (PostgreSQL) as the database."
    ]
  }
];

export const experience = [
  {
    role: "Applied AI Engineer",
    company: "VENQ Private Limited",
    period: "Jan 2026 - June 2026",
    location: "Remote, India",
    description: "Engineered end-to-end Graph RAG pipelines and agentic retrieval systems on Azure AI infrastructure.",
    details: [
      "Engineered an end-to-end Graph RAG pipeline converting unstructured data into knowledge graphs (entities & relationships), integrating vector + semantic retrieval for improved contextual accuracy and multi-hop reasoning.",
      "Built automated ingestion pipelines using Azure AI Search, Azure OpenAI, and Azure Data Pipelines for chunking, embedding generation, and indexing, enabling agentic retrieval with query decomposition and parallel search.",
      "Integrated CI/CD-driven Azure pipelines with hybrid search (keyword + vector) and caching strategies, ensuring high availability, fault tolerance, and low-latency retrieval."
    ]
  },
  {
    role: "SDE Intern",
    company: "VENQ Private Limited",
    period: "May 2025 - Jul 2025",
    location: "Remote, India",
    description: "Revamped platform and admin dashboard achieving 60% faster load times and 90+ Lighthouse score.",
    details: [
      "Revamped platform and admin dashboard, achieving 60% faster load times, 40% bundle reduction, and 90+ Lighthouse score via code-splitting, image optimization, and performance tuning.",
      "Designed UI flows in Figma and built 15+ reusable components using Tailwind CSS and React Hooks.",
      "Delivered content automation, analytics dashboards, and CMS modules used by 3,000+ MAU.",
      "Improved reliability through Lighthouse audits and cross-browser testing (25+ cases), increasing test coverage by 30%."
    ]
  }
];

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

export const projectTagIcons: Record<string, string> = {
  TypeScript: `${CDN}/typescript/typescript-original.svg`,
  "TypeScript RSC": `${CDN}/typescript/typescript-original.svg`,
  JavaScript: `${CDN}/javascript/javascript-original.svg`,
  Python: `${CDN}/python/python-original.svg`,
  Java: `${CDN}/java/java-original.svg`,
  "Go (learning)": `${CDN}/go/go-original-wordmark.svg`,
  SQL: `${CDN}/mysql/mysql-original-wordmark.svg`,
  React: `${CDN}/react/react-original.svg`,
  "Next.js": `${CDN}/nextjs/nextjs-original.svg`,
  Expo: `${CDN}/expo/expo-original.svg`,
  HTML5: `${CDN}/html5/html5-original.svg`,
  CSS3: `${CDN}/css3/css3-original.svg`,
  "Tailwind CSS": `${CDN}/tailwindcss/tailwindcss-original.svg`,
  "Node.js": `${CDN}/nodejs/nodejs-original.svg`,
  Bun: `${CDN}/bun/bun-original.svg`,
  FastAPI: `${CDN}/fastapi/fastapi-original.svg`,
  tRPC: `${CDN}/trpc/trpc-original.svg`,
  Redis: `${CDN}/redis/redis-original.svg`,
  PostgreSQL: `${CDN}/postgresql/postgresql-original.svg`,
  MongoDB: `${CDN}/mongodb/mongodb-original.svg`,
  Prisma: `${CDN}/prisma/prisma-original.svg`,
  Docker: `${CDN}/docker/docker-original.svg`,
  AWS: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  Git: `${CDN}/git/git-original.svg`,
  GitHub: `${CDN}/github/github-original.svg`,
  Vercel: `${CDN}/vercel/vercel-original.svg`,
  "Vercel AI SDK": `${CDN}/vercel/vercel-original.svg`,
  Gemini: `${BASE}icons/gemini.svg`,
  "Google-Gemini": `${BASE}icons/gemini.svg`,
  "Gemini 2.5 Flash": `${BASE}icons/gemini.svg`,
  LangGraph: `${BASE}icons/langgraph.svg`,
  Qdrant: `${BASE}icons/qdrant.svg`,
  shadcn: `${BASE}icons/shadcn.svg`,
  Cursor: `${BASE}icons/cursor.svg`,
  "Claude Code": `${BASE}icons/claude-code.svg`,
  Opencode: `${BASE}icons/opencode.svg`,
  Pydantic: `${BASE}icons/pydantic.svg`,
  OpenRouter: `${BASE}icons/openrouter.svg`,
}

export const skills = [
  {
    category: "Languages", items: [
      { name: "Python", icon: `${CDN}/python/python-original.svg` },
      { name: "Java", icon: `${CDN}/java/java-original.svg` },
      { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
      { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg` },
      { name: "SQL", icon: `${CDN}/mysql/mysql-original-wordmark.svg` },
    ]
  },
  {
    category: "Frontend", items: [
      { name: "React", icon: `${CDN}/react/react-original.svg` },
      { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg` },
      { name: "HTML5", icon: `${CDN}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${CDN}/css3/css3-original.svg` },
      { name: "Tailwind CSS", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: "Figma", icon: `${CDN}/figma/figma-original.svg` },
    ]
  },
  {
    category: "Backend", items: [
      { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: "FastAPI", icon: `${CDN}/fastapi/fastapi-original.svg` },
      { name: "Express", icon: `${CDN}/express/express-original.svg` },
      { name: "REST APIs" },
      { name: "LangChain", icon: `${BASE}icons/langchain.svg` },
      { name: "LangGraph", icon: `${BASE}icons/langgraph.svg` },
      { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
    ]
  },
  {
    category: "Databases & ORM", items: [
      { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg` },
      { name: "MySQL", icon: `${CDN}/mysql/mysql-original.svg` },
      { name: "NeonDB" },
      { name: "Pinecone", icon: `${BASE}icons/qdrant.svg` },
      { name: "Prisma", icon: `${CDN}/prisma/prisma-original.svg` },
    ]
  },
  {
    category: "AI & ML", items: [
      { name: "Scikit-Learn" },
      { name: "TensorFlow", icon: `${CDN}/tensorflow/tensorflow-original.svg` },
      { name: "PyTorch", icon: `${CDN}/pytorch/pytorch-original.svg` },
      { name: "NLP" },
      { name: "Deep Learning" },
      { name: "Generative AI" },
      { name: "LLM Pipelines" },
      { name: "RAG" },
      { name: "MLOps" },
      { name: "Gemini API", icon: `${BASE}icons/gemini.svg` },
    ]
  },
  {
    category: "Data Engineering", items: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "PySpark" },
      { name: "ETL Pipelines" },
      { name: "A/B Testing" },
      { name: "Statistical Modeling" },
    ]
  },
  {
    category: "Infrastructure", items: [
      { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
      { name: "AWS", icon: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "GCP" },
      { name: "GitHub Actions", icon: `${CDN}/github/github-original.svg` },
    ]
  },
  {
    category: "Developer Tools", items: [
      { name: "Git", icon: `${CDN}/git/git-original.svg` },
      { name: "GitHub", icon: `${CDN}/github/github-original.svg` },
    ]
  }
];
