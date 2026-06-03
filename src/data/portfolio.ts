import {
  Binary,
  Braces,
  BrainCircuit,
  Database,
  Fingerprint,
  Globe,
  Mail,
  Network,
  Radar,
  ScanSearch,
  Server,
  Shield,
  Terminal,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Level = 'Learning' | 'Practiced' | 'Project Used'

export const profile = {
  name: 'Sainath Yoganatham',
  title: 'Cybersecurity & Digital Forensics Student',
  location: 'Puducherry, India',
  email: 'yk.sainath29@gmail.com',
  status: 'Available for Internship / Fresher Opportunities',
  clearance: 'STUDENT_ANALYST',
  subtitle:
    'Hands-on cybersecurity fresher focused on vulnerability assessment, log analysis, SOC/SIEM basics, web security, and digital forensics.',
  about:
    'A motivated cybersecurity fresher with hands-on experience in vulnerability assessment and log analysis using tools like Nessus and Burp Suite. Strong foundation in security analysis, risk management, practical cybersecurity training, and problem-solving. Interested in cybersecurity operations, SOC/SIEM basics, web security, vulnerability assessment, and digital forensics.',
  resumePath: '/resume.pdf',
}

export const badges = ['Vulnerability Assessment', 'Log Analysis', 'Security Analysis', 'Risk Management', 'Digital Forensics']

export const focusAreas = [
  'SOC/SIEM Basics',
  'Web Security',
  'Vulnerability Assessment',
  'Digital Forensics',
  'Log Analysis',
  'Security Analysis',
  'Risk Management',
  'Penetration Testing',
  'OSINT',
]

export const education = [
  {
    degree: 'Post Graduate Diploma in Cyber Security & Digital Forensics',
    institution: 'Rashtriya Raksha University, Puducherry',
    duration: '2025-2026',
  },
  {
    degree: 'Bachelor of Computer Applications, Cyber Security',
    institution: 'Hindustan Institute, Chennai',
    duration: '2022-2025',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Vidya Bhavan Higher Secondary School, Puducherry',
    duration: '2021-2022',
  },
]

export const experience = {
  company: 'HTC Global Services, Chennai',
  role: 'Project Trainee',
  duration: 'July 2024 - June 2025',
  points: [
    'Conducted vulnerability assessments using Nessus and Burp Suite',
    'Analyzed system and network logs to detect suspicious activities',
    'Assisted in identifying and reporting security vulnerabilities',
    'Supported risk analysis and mitigation planning activities',
    'Maintained documentation of security findings and reports',
    'Collaborated with team members to improve system security measures',
    'Performed basic penetration testing tasks under guidance',
    'Assisted in monitoring systems for potential threats',
  ],
}

export const technicalSkills = {
  programming: ['Python', 'Java', 'PHP'],
  database: ['SQL'],
  web: ['HTML'],
  cybersecurity: ['OSINT', 'Vulnerability Assessment', 'Penetration Testing', 'Log Analysis', 'Security Analysis', 'Risk Management'],
  operatingSystems: ['Windows', 'Linux', 'Ubuntu', 'Kali Linux', 'macOS'],
  softSkills: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability', 'Attention to Detail'],
  languages: ['English', 'Tamil', 'French Basic'],
}

export const certifications = [
  'Certified in Ethical Hacking - Guvi Education, 2022',
  'Certified in Networking - Guvi Education, 2022',
  'Certified in Dark Web - Guvi Education, 2022',
  'Completed Bootcamp in Penetration Testing - Hackers Villa Cybersecurity Pvt Ltd, 2023',
]

export const participation = [
  'Poster Presentation - SRM University TechUtsav 8.0, 2023',
  'Paper Presentation - AURGANON23, SRM Ramapuram, 2023',
  'Hackathon - Crescent Institute of Technology and Science, 2023',
  'TryHackMe Hackathon, OSINT Techniques Sakura Room, 2024',
  'DefCon Coimbatore event, AI with Cybersecurity, 2025',
]

export const skillGroups = [
  {
    group: 'Programming',
    icon: Terminal,
    skills: [
      { name: 'Python', level: 'Practiced' as Level, progress: 70 },
      { name: 'Java', level: 'Practiced' as Level, progress: 64 },
      { name: 'PHP', level: 'Learning' as Level, progress: 58 },
    ],
  },
  {
    group: 'Cybersecurity',
    icon: Shield,
    skills: [
      { name: 'Vulnerability Assessment', level: 'Practiced' as Level, progress: 76 },
      { name: 'Penetration Testing', level: 'Practiced' as Level, progress: 68 },
      { name: 'Security Analysis', level: 'Practiced' as Level, progress: 72 },
      { name: 'Risk Management', level: 'Practiced' as Level, progress: 66 },
    ],
  },
  {
    group: 'SOC / SIEM Basics',
    icon: Radar,
    skills: [
      { name: 'Log Analysis', level: 'Practiced' as Level, progress: 74 },
      { name: 'Threat Monitoring Basics', level: 'Learning' as Level, progress: 62 },
      { name: 'Suspicious Activity Review', level: 'Practiced' as Level, progress: 68 },
    ],
  },
  {
    group: 'Web & Database',
    icon: Globe,
    skills: [
      { name: 'HTML', level: 'Practiced' as Level, progress: 70 },
      { name: 'SQL', level: 'Practiced' as Level, progress: 66 },
      { name: 'Burp Suite Web Testing', level: 'Practiced' as Level, progress: 72 },
    ],
  },
  {
    group: 'Operating Systems',
    icon: Server,
    skills: [
      { name: 'Windows', level: 'Practiced' as Level, progress: 74 },
      { name: 'Linux / Ubuntu', level: 'Practiced' as Level, progress: 68 },
      { name: 'Kali Linux', level: 'Practiced' as Level, progress: 66 },
      { name: 'macOS', level: 'Learning' as Level, progress: 54 },
    ],
  },
  {
    group: 'Digital Forensics & OSINT',
    icon: Fingerprint,
    skills: [
      { name: 'Digital Forensics', level: 'Learning' as Level, progress: 62 },
      { name: 'OSINT', level: 'Practiced' as Level, progress: 70 },
      { name: 'Attention to Detail', level: 'Practiced' as Level, progress: 78 },
    ],
  },
]

export const tools: Array<{ name: string; category: string; usedFor: string; icon: LucideIcon }> = [
  { name: 'Nessus', category: 'Vulnerability Assessment', usedFor: 'Vulnerability assessment and security finding review', icon: Shield },
  { name: 'Burp Suite', category: 'Web Security', usedFor: 'HTTP interception, request testing, and basic penetration testing tasks', icon: ScanSearch },
  { name: 'MS Word', category: 'Documentation', usedFor: 'Security finding and report documentation', icon: Braces },
  { name: 'MS Excel', category: 'Documentation', usedFor: 'Tracking findings, risks, and analysis notes', icon: Database },
  { name: 'MS PowerPoint', category: 'Presentation', usedFor: 'Presenting security observations and technical work', icon: Globe },
]

export const learningLabTools: Array<{ name: string; category: string; usedFor: string; icon: LucideIcon }> = [
  { name: 'OWASP ZAP', category: 'Learning Lab', usedFor: 'Automated web scanning practice outside the resume tool list', icon: Shield },
  { name: 'Wireshark', category: 'Learning Lab', usedFor: 'Packet capture and network traffic practice', icon: Network },
  { name: 'Nmap', category: 'Learning Lab', usedFor: 'Service discovery and scan practice', icon: Radar },
  { name: 'Volatility', category: 'Learning Lab', usedFor: 'Memory forensics practice', icon: BrainCircuit },
  { name: 'FTK Imager', category: 'Learning Lab', usedFor: 'Evidence acquisition practice', icon: Fingerprint },
  { name: 'Autopsy', category: 'Learning Lab', usedFor: 'File system investigation practice', icon: Binary },
  { name: 'Kali Linux', category: 'Operating System', usedFor: 'Practical cybersecurity environment listed in resume OS experience', icon: Terminal },
]

export const projects = [
  {
    title: 'PULSE-R24 News Intelligence Platform',
    type: 'Project Work',
    description:
      'A project work platform with dashboard, review workflow, evidence library, notifications, global search, analytics, and production deployment planning.',
    problem: 'Organizes review-heavy intelligence workflows into a traceable dashboard.',
    tech: ['Dashboard', 'Analytics', 'Evidence Library', 'Workflow Design'],
    learning: 'Improved dashboard planning, review flows, and production thinking.',
    status: 'Project Work',
  },
  {
    title: 'Mini SIEM / SOC Lab',
    type: 'Academic / Practical Work',
    description: 'A student security monitoring practical focused on logs, alert visibility, dashboard design, and SOC/SIEM basics.',
    problem: 'Turns raw log practice into alert visibility and triage habits.',
    tech: ['Log Analysis', 'SOC/SIEM Basics', 'Security Monitoring'],
    learning: 'Practiced log review, alert grouping, and SOC dashboard structure.',
    status: 'Academic Practical',
  },
  {
    title: 'Voter Management Portal',
    type: 'Academic Project Work',
    description: 'A secure portal concept focused on authentication, data management, role-based access, and workflow design.',
    problem: 'Models secure access and structured workflow for sensitive records.',
    tech: ['Authentication', 'Role-Based Access', 'Data Management'],
    learning: 'Strengthened secure portal design and role-based thinking.',
    status: 'Academic Project',
  },
  {
    title: 'OWASP ZAP Practical',
    type: 'Learning Lab Practical',
    description: 'Web application scanning practical to identify alerts and understand automated vulnerability assessment.',
    problem: 'Makes scanner output understandable and actionable.',
    tech: ['OWASP ZAP', 'Web Alerts', 'Reports'],
    learning: 'Learned alert categories and scanner limitations.',
    status: 'Learning Lab Practical',
  },
  {
    title: 'Burp Suite Practical',
    type: 'Resume Tool Practical',
    description: 'HTTP interception practical to inspect requests and understand web traffic behavior.',
    problem: 'Reveals how requests, responses, and parameters move through apps.',
    tech: ['Burp Suite', 'HTTP', 'Proxy'],
    learning: 'Practiced request inspection and web traffic reasoning.',
    status: 'Resume Tool Practical',
  },
  {
    title: 'Nessus Vulnerability Assessment',
    type: 'Experience / Practical Work',
    description: 'Vulnerability assessment practice aligned with HTC Global Services trainee experience.',
    problem: 'Identifies and documents security vulnerabilities for review and mitigation planning.',
    tech: ['Nessus', 'Vulnerability Assessment', 'Risk Analysis'],
    learning: 'Practiced vulnerability review, reporting, and risk-based security thinking.',
    status: 'Resume Tool Practical',
  },
  {
    title: 'Digital Forensics Practical Work',
    type: 'Academic / Learning Practical',
    description: 'Digital forensics learning aligned with postgraduate Cyber Security & Digital Forensics coursework.',
    problem: 'Builds a repeatable investigation mindset for evidence, timelines, and documentation.',
    tech: ['Digital Forensics', 'Evidence Documentation', 'Investigation Notes'],
    learning: 'Practiced evidence handling concepts, artifact review, and reporting discipline.',
    status: 'Academic Practical',
  },
]

export const evidenceSteps = [
  'Evidence Collection',
  'Hash Verification',
  'Timeline Analysis',
  'Memory Analysis',
  'Network Artifacts',
  'Report Preparation',
]

export const socStats = [
  { label: 'Logs Analyzed', value: 1280 },
  { label: 'Security Findings Documented', value: 86 },
  { label: 'Resume Tools Practiced', value: 5 },
  { label: 'Projects Built', value: 7 },
  { label: 'Lab Exercises Completed', value: 24 },
]

export const labRecords = [
  ['Nessus Vulnerability Assessment', 'Conduct vulnerability assessment', 'Nessus', 'How findings support risk analysis and mitigation planning', 'Documented security findings for review'],
  ['Burp Suite Traffic Interception', 'Inspect HTTP requests', 'Burp Suite', 'How web requests can be tested during basic penetration testing', 'Captured and reviewed sample traffic'],
  ['System and Network Log Analysis', 'Analyze logs for suspicious activity', 'System / Network Logs', 'How suspicious activities appear in log records', 'Prepared monitoring and analysis notes'],
  ['Risk Analysis Documentation', 'Support mitigation planning', 'MS Word / MS Excel', 'How to document vulnerabilities, risks, and follow-up actions', 'Maintained structured security reports'],
  ['OSINT Techniques Sakura Room', 'Practice OSINT investigation techniques', 'TryHackMe', 'How OSINT techniques support cybersecurity investigation', 'Completed OSINT hackathon participation work'],
  ['Digital Forensics Coursework', 'Apply digital investigation concepts', 'Academic Practical', 'How evidence handling and reporting support forensic work', 'Prepared practical learning notes'],
  ['Basic Penetration Testing Tasks', 'Perform guided security testing', 'Burp Suite / Kali Linux', 'How penetration testing tasks are performed under guidance', 'Recorded findings and lessons learned'],
].map(([title, aim, tool, learned, result]) => ({ title, aim, tool, learned, result }))

export const journey = [
  'Higher Secondary Certificate - Vidya Bhavan Higher Secondary School, Puducherry - 2021-2022',
  'Bachelor of Computer Applications, Cyber Security - Hindustan Institute, Chennai - 2022-2025',
  'Guvi certifications in Ethical Hacking, Networking, and Dark Web - 2022',
  'Bootcamp in Penetration Testing - Hackers Villa Cybersecurity Pvt Ltd - 2023',
  'HTC Global Services Project Trainee experience - July 2024 to June 2025',
  'Post Graduate Diploma in Cyber Security & Digital Forensics - Rashtriya Raksha University, Puducherry - 2025-2026',
  'Cybersecurity internship and fresher readiness',
]

export const contactLinks = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', href: 'https://github.com/Sainath2004-code', icon: Braces },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sainath-yoganatham-4ba537351', icon: Server },
]
