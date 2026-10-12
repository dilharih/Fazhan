export const projects = [
  {
    id: 'skillalign',
    number: '01',
    category: 'NLP · Career discovery',
    title: 'SkillAlign',
    subtitle: 'Job recommendations & skill-gap analysis',
    description:
      'A resume evaluation tool that extracts skills, highlights gaps, and suggests career-aligned learning paths to help people plan their next step.',
    outcome:
      'Connected resume parsing and skill extraction with personalized course suggestions from Udemy, edX, and YouTube.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'SpaCy'],
    visual: 'skillalign-visual',
    visualLabel: 'Resume-to-skills analysis concept',
    visualWords: ['YOUR EXPERIENCE', 'SKILL PROFILE', 'LEARNING PATH'],
  },
  {
    id: 'sensor-fusion',
    number: '02',
    category: 'Deep learning · Smart farming',
    title: 'Information Fusion',
    subtitle: 'Intelligent decisions from multi-sensor data',
    description:
      'A deep learning framework combining heterogeneous soil and climate data to support data-driven crop recommendations.',
    outcome:
      'Compared early, mid, and late fusion strategies; achieved up to 97% accuracy, with mid-level fusion performing best and late fusion more robust to missing sensor modalities.',
    tools: ['Python', 'TensorFlow', 'Deep learning', 'Sensor data'],
    visual: 'fusion-visual',
    visualLabel: 'Soil and climate signals combining into one model',
    visualWords: ['SOIL', 'CLIMATE', 'FUSED MODEL'],
  },
]

export const experiences = [
  {
    title: 'Frontend Development Intern',
    organization: 'NEST Digital',
    date: '2025',
    description:
      'Developed responsive interfaces with Angular and TypeScript, integrated REST APIs, and worked with an Agile team to deliver scalable modules.',
    tags: ['Angular', 'TypeScript', 'REST APIs', 'Agile'],
  },
  {
    title: 'Machine Learning & AI Intern',
    organization: 'KELTRON',
    date: 'Aug 2023',
    description:
      'Completed a focused, one-week internship covering Python fundamentals, exploratory data analysis, visualization, and supervised and unsupervised learning.',
    tags: ['Python', 'EDA', 'Machine learning'],
  },
  {
    title: 'Cybersecurity Workshop Participant',
    organization: 'NIT Calicut',
    date: '2023',
    description:
      'Built introductory knowledge of ethical hacking, network security, vulnerability assessment, and threat detection.',
    tags: ['Network security', 'Threat detection'],
  },
]

export const leadership = [
  {
    year: '2025',
    role: 'Committee Head',
    event: 'Nakshatra · College Tech Fest',
    description: 'Event planning, sponsor coordination, volunteer management, and technical competitions.',
  },
  {
    year: '2024',
    role: 'Venue Coordination Member',
    event: 'SRISHTI · National Tech Fest',
    description: 'Venue logistics and technical infrastructure for a multi-day national event.',
  },
]

export const skills = [
  { category: 'Programming', items: ['Python', 'Java', 'C'] },
  { category: 'Frontend & web', items: ['Angular', 'HTML', 'CSS', 'TypeScript'] },
  { category: 'AI & data', items: ['TensorFlow', 'Scikit-learn', 'SpaCy', 'Pandas'] },
  { category: 'Foundations', items: ['Data structures', 'REST APIs', 'NLP', 'Deep learning', 'EDA', 'Data visualization'] },
  { category: 'Tools & platforms', items: ['Git', 'VS Code', 'Linux', 'SQL'] },
]

export const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    institution: 'Saintgits College of Engineering and Technology',
    period: '2022 — 2026',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Chennamangallur Higher Secondary School',
    period: '2019 — 2021',
    result: '97%',
  },
  {
    degree: 'Secondary Education',
    institution: 'PTMHSS Kodiyathur',
    period: '2018 — 2019',
    result: '98%',
  },
]
