export type LocationId = 'home' | 'about' | 'skills' | 'projects' | 'achievements' | 'academy' | 'goals' | 'contact'

export type Skill = {
  name: string
  progress: number
  note?: string
}

export type Project = {
  id: string
  mission: string
  name: string
  category: string
  description: string
  stack: string[]
  status: string
  difficulty: string
  liveUrl?: string
  codeUrl?: string
  signal: string
}

export type Achievement = {
  id: string
  title: string
  description: string
  unlocked: boolean
  icon: string
}

export const portfolio = {
  name: 'Hamid Raza',
  shortName: 'HR',
  title: 'AI Developer | AI Automation Expert | BSCS Student',
  displayTitle: 'AI Developer',
  subtitle: 'Build. Automate. Intelligence.',
  location: 'Lahore, Pakistan',
  bio: "I enjoy building with technology, solving problems, and turning ideas into practical solutions, with a particular interest in AI automation and intelligent workflows. I'm a curious, consistent learner who loves building practical projects and exploring emerging technologies.",
  stats: [
    ['ROLE', 'AI Developer'],
    ['SPECIALIZATION', 'AI Automation'],
    ['EDUCATION', 'BS Computer Science'],
    ['FOCUS', 'AI / LLM / RAG / Agents'],
    ['STATUS', 'Currently Learning'],
  ] as const,
  aboutMissions: [
    ['CURRENTLY WORKING ON', 'AI automation projects, LLM-powered apps, and intelligent workflows.'],
    ['LOOKING TO COLLABORATE ON', 'AI/ML, RAG systems, and Agentic AI projects.'],
    ['LOOKING FOR HELP WITH', 'Advanced LLM architectures, scaling AI systems, and open-source contributions.'],
    ['CURRENTLY LEARNING', 'AI/ML, LLMs, RAG, Agentic AI, and Data Structures & Algorithms.'],
    ['ASK ME ABOUT', 'Python, C++, AI automation, LLMs, RAG, and web development.'],
    ['FUN FACT', 'I love turning repetitive tasks into automated workflows, so I can spend time on more interesting problems!'],
  ] as const,
  skills: [
    { category: 'PROGRAMMING', items: [{ name: 'Python', progress: 85 }, { name: 'C++', progress: 80 }, { name: 'JavaScript', progress: 75 }] },
    { category: 'AI / ML', items: [{ name: 'Machine Learning', progress: 65 }, { name: 'LLMs', progress: 75 }, { name: 'RAG', progress: 70 }, { name: 'Agentic AI', progress: 65 }, { name: 'AI Automation', progress: 85 }] },
    { category: 'WEB DEVELOPMENT', items: [{ name: 'HTML', progress: 80 }, { name: 'CSS', progress: 80 }, { name: 'JavaScript', progress: 75 }] },
    { category: 'CORE CS', items: [{ name: 'Data Structures & Algorithms', progress: 70 }, { name: 'Problem Solving', progress: 75 }] },
    { category: 'TOOLS', items: [{ name: 'Git', progress: 80 }, { name: 'GitHub', progress: 70 }, { name: 'VS Code', progress: 85 }] },
  ],
  projects: [
    { id: 'automation', mission: 'MISSION 01', name: 'AI Automation Systems', category: 'AI AUTOMATION', description: 'Intelligent workflows designed to automate repetitive business tasks and connect AI with real-world processes.', stack: ['Python', 'LLMs', 'APIs', 'Automation'], status: 'EDITABLE PLACEHOLDER', difficulty: 'SIGNAL: RISING', signal: 'WORKFLOW / 001' },
    { id: 'llm', mission: 'MISSION 02', name: 'LLM Applications', category: 'LLM APPLICATION', description: 'Applications powered by large language models for practical problem solving and intelligent user experiences.', stack: ['Python', 'LLMs', 'Prompting', 'Web'], status: 'EDITABLE PLACEHOLDER', difficulty: 'SIGNAL: ACTIVE', signal: 'COGNITION / 002' },
    { id: 'rag', mission: 'MISSION 03', name: 'RAG Systems', category: 'KNOWLEDGE SYSTEM', description: 'Retrieval-Augmented Generation systems that connect language models with useful external knowledge.', stack: ['RAG', 'Embeddings', 'Python', 'LLMs'], status: 'EDITABLE PLACEHOLDER', difficulty: 'SIGNAL: DEEP', signal: 'INDEX / 003' },
    { id: 'agents', mission: 'MISSION 04', name: 'Agentic AI', category: 'AGENT SYSTEM', description: 'Experiments with intelligent agents capable of reasoning, using tools and completing multi-step workflows.', stack: ['Agents', 'Tools', 'LLMs', 'Python'], status: 'EDITABLE PLACEHOLDER', difficulty: 'SIGNAL: EXPERIMENTAL', signal: 'REASON / 004' },
    { id: 'voice', mission: 'MISSION 05', name: 'AI Lead / Voice Automation', category: 'AUTOMATION', description: 'Automation workflows designed to handle leads, communication and repetitive business processes.', stack: ['Voice AI', 'APIs', 'Automation', 'Workflows'], status: 'EDITABLE PLACEHOLDER', difficulty: 'SIGNAL: BUILDING', signal: 'CHANNEL / 005' },
    { id: 'web', mission: 'MISSION 06', name: 'Interactive Web Experiences', category: 'WEB EXPERIENCE', description: 'Modern animated websites focused on strong visual design, interaction and user experience.', stack: ['React', 'CSS', 'Motion', 'UX'], status: 'EDITABLE PLACEHOLDER', difficulty: 'SIGNAL: VISUAL', signal: 'INTERFACE / 006' },
  ] as Project[],
  achievements: [
    { id: 'automation', title: 'AI AUTOMATION', description: 'Built intelligent workflow systems.', unlocked: true, icon: '◎' },
    { id: 'llm', title: 'LLM EXPLORER', description: 'Started building with LLMs.', unlocked: true, icon: '◈' },
    { id: 'rag', title: 'RAG BUILDER', description: 'Explored retrieval-augmented systems.', unlocked: true, icon: '⌁' },
    { id: 'code', title: 'CODE WARRIOR', description: 'Consistent coding practice.', unlocked: false, icon: '✦' },
    { id: 'open-source', title: 'OPEN SOURCE', description: 'Contributed to open-source projects.', unlocked: false, icon: '⌘' },
    { id: 'first-project', title: 'FIRST PROJECT', description: 'Editable placeholder — add a verified milestone.', unlocked: false, icon: '◇' },
  ] as Achievement[],
  education: {
    name: 'BS COMPUTER SCIENCE',
    status: 'IN PROGRESS',
    field: 'COMPUTER SCIENCE',
    school: 'Editable education detail',
    learningAreas: ['AI / ML', 'LLMs', 'RAG', 'Agentic AI', 'Data Structures & Algorithms', 'Web Development', 'Python', 'C++'],
  },
  goal: "My goal is to grow into an AI-focused Software Engineer and build intelligent solutions that create real-world impact.",
  goalPath: ['BSCS', 'PROGRAMMING', 'AI / ML', 'LLMs', 'RAG', 'AGENTIC AI', 'AI SOFTWARE ENGINEER'],
  contact: {
    linkedin: 'https://www.linkedin.com/in/hamid-raza-b4338938a',
    email: 'hamidgujjar.0017@gmail.com',
    githubUsername: 'REPLACE_WITH_REAL_USERNAME',
  },
  nav: [
    { id: 'home', label: 'HOME', location: 'CITY / HOME' },
    { id: 'about', label: 'ABOUT', location: 'VICE BEACH' },
    { id: 'skills', label: 'SKILLS', location: 'PORT KELBRAY' },
    { id: 'projects', label: 'PROJECTS', location: 'MARINA BAYFRONT' },
    { id: 'achievements', label: 'ACHIEVEMENTS', location: 'DOWNTOWN' },
    { id: 'academy', label: 'ACADEMY', location: 'KELBRAY HEIGHTS' },
    { id: 'goals', label: 'GOALS', location: 'FUTURE DISTRICT' },
    { id: 'contact', label: 'CONTACT', location: 'MISSION CONTROL' },
  ] as { id: LocationId; label: string; location: string }[],
  missions: {
    home: { label: 'ENTER THE DIGITAL WORLD', objective: 'EXPLORE THE DIGITAL WORLD', reward: 50 },
    about: { label: 'MEET THE DEVELOPER', objective: 'LOCATE HAMID RAZA', reward: 100 },
    skills: { label: 'REVIEW THE SKILLS', objective: 'SCAN CAPABILITY SIGNALS', reward: 100 },
    projects: { label: 'EXPLORE THE PROJECTS', objective: 'SELECT A MISSION BRIEFING', reward: 200 },
    achievements: { label: 'UNLOCK THE ACHIEVEMENTS', objective: 'CHECK THE PROGRESS LOG', reward: 150 },
    academy: { label: 'VISIT THE ACADEMY', objective: 'FOLLOW THE LEARNING PATH', reward: 100 },
    goals: { label: 'BUILD THE FUTURE', objective: 'TRACE THE NEXT CAPABILITY', reward: 100 },
    contact: { label: 'CONTACT HAMID', objective: 'OPEN MISSION CONTROL', reward: 250 },
  } as Record<LocationId, { label: string; objective: string; reward: number }>,
}

export const locationThemes: Record<LocationId, { eyebrow: string; title: string; subline: string }> = {
  home: { eyebrow: 'CITY / HOME', title: 'DIGITAL WORLD', subline: 'The city is live. Your next build is waiting.' },
  about: { eyebrow: 'VICE BEACH', title: 'MEET THE BUILDER', subline: 'Curiosity is the first capability.' },
  skills: { eyebrow: 'PORT KELBRAY', title: 'SKILLS // UNLOCKED', subline: 'Editable progress, not a professional rating.' },
  projects: { eyebrow: 'MARINA BAYFRONT', title: 'PROJECTS // SHOWCASE', subline: 'Select a mission to open the briefing.' },
  achievements: { eyebrow: 'DOWNTOWN', title: 'ACHIEVEMENTS // UNLOCKED', subline: 'Verified milestones only. Everything else stays editable.' },
  academy: { eyebrow: 'KELBRAY HEIGHTS', title: 'CODE CONSTELLATION ACADEMY', subline: 'Where knowledge becomes capability.' },
  goals: { eyebrow: 'FUTURE DISTRICT', title: 'MISSION // BUILD THE FUTURE', subline: 'The path is still loading.' },
  contact: { eyebrow: 'MISSION CONTROL', title: 'OPEN A CHANNEL', subline: 'Have a project, idea, automation problem or collaboration opportunity?' },
}
