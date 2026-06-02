import {
  Activity,
  BadgeCheck,
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
  name: 'Sainath Y',
  title: 'Cybersecurity & Digital Forensics Student',
  location: 'India',
  status: 'Available for Internship / Fresher Opportunities',
  clearance: 'STUDENT_ANALYST',
  subtitle:
    'Building practical skills in SOC, SIEM, Web Security, Vulnerability Assessment, and Digital Forensics.',
  about:
    'I am a Cybersecurity and Digital Forensics student with interest in SOC analysis, SIEM, web security, vulnerability assessment, network security, and digital investigation. I enjoy learning practical tools and building real-world security projects that improve my technical understanding.',
  resumePath: '/resume.pdf',
}

export const badges = ['SOC Learner', 'SIEM Projects', 'Web Security', 'Digital Forensics', 'Network Analysis']

export const focusAreas = [
  'SOC Analysis',
  'SIEM',
  'Web Security',
  'Vulnerability Assessment',
  'Digital Forensics',
  'Network Security',
  'Secure Web Development',
  'Incident Response Basics',
]

export const skillGroups = [
  {
    group: 'SOC & SIEM',
    icon: Radar,
    skills: [
      { name: 'Alert triage', level: 'Practiced' as Level, progress: 64 },
      { name: 'Log review', level: 'Project Used' as Level, progress: 70 },
      { name: 'Dashboard design', level: 'Project Used' as Level, progress: 76 },
    ],
  },
  {
    group: 'Web Security',
    icon: Globe,
    skills: [
      { name: 'OWASP basics', level: 'Practiced' as Level, progress: 68 },
      { name: 'HTTP interception', level: 'Practiced' as Level, progress: 72 },
      { name: 'Vulnerability scanning', level: 'Practiced' as Level, progress: 66 },
    ],
  },
  {
    group: 'Digital Forensics',
    icon: Fingerprint,
    skills: [
      { name: 'Evidence imaging', level: 'Learning' as Level, progress: 58 },
      { name: 'Timeline analysis', level: 'Learning' as Level, progress: 54 },
      { name: 'Memory artifacts', level: 'Practiced' as Level, progress: 61 },
    ],
  },
  {
    group: 'Networking',
    icon: Network,
    skills: [
      { name: 'Packet analysis', level: 'Practiced' as Level, progress: 69 },
      { name: 'Protocol basics', level: 'Practiced' as Level, progress: 67 },
      { name: 'Recon scanning', level: 'Practiced' as Level, progress: 63 },
    ],
  },
  {
    group: 'Development',
    icon: Braces,
    skills: [
      { name: 'React', level: 'Project Used' as Level, progress: 74 },
      { name: 'TypeScript', level: 'Project Used' as Level, progress: 70 },
      { name: 'Secure workflows', level: 'Learning' as Level, progress: 62 },
    ],
  },
  {
    group: 'Cloud / Database Basics',
    icon: Database,
    skills: [
      { name: 'Supabase', level: 'Project Used' as Level, progress: 65 },
      { name: 'Auth concepts', level: 'Project Used' as Level, progress: 68 },
      { name: 'Deployment planning', level: 'Learning' as Level, progress: 60 },
    ],
  },
]

export const tools: Array<{ name: string; category: string; usedFor: string; icon: LucideIcon }> = [
  { name: 'Burp Suite', category: 'Web Security', usedFor: 'HTTP interception and request testing', icon: ScanSearch },
  { name: 'OWASP ZAP', category: 'Web Security', usedFor: 'Automated vulnerability scanning practical', icon: Shield },
  { name: 'Wireshark', category: 'Network Security', usedFor: 'Packet capture and traffic analysis', icon: Activity },
  { name: 'Nmap', category: 'Reconnaissance', usedFor: 'Network scanning', icon: Radar },
  { name: 'Volatility', category: 'Memory Forensics', usedFor: 'Memory artifact analysis', icon: BrainCircuit },
  { name: 'FTK Imager', category: 'Forensics', usedFor: 'Evidence acquisition', icon: Fingerprint },
  { name: 'Autopsy', category: 'Forensics', usedFor: 'File system investigation', icon: Binary },
  { name: 'Kali Linux', category: 'Security Lab', usedFor: 'Practical cybersecurity environment', icon: Terminal },
  { name: 'GitHub', category: 'Development', usedFor: 'Version control and portfolio delivery', icon: Braces },
  { name: 'Supabase', category: 'Database', usedFor: 'Auth, database, and app data basics', icon: Database },
]

export const projects = [
  {
    title: 'PULSE-R24 News Intelligence Platform',
    description:
      'A news intelligence platform with dashboard, review workflow, evidence library, notifications, global search, analytics, and production deployment planning.',
    problem: 'Organizes review-heavy intelligence workflows into a traceable dashboard.',
    tech: ['React', 'Supabase', 'Analytics', 'Evidence Library'],
    learning: 'Improved dashboard planning, review flows, and production thinking.',
    status: 'Flagship Build',
  },
  {
    title: 'Mini SIEM / SOC Lab',
    description: 'A student security monitoring project focused on logs, alert visibility, dashboard design, and SOC/SIEM learning.',
    problem: 'Turns raw log practice into alert visibility and triage habits.',
    tech: ['Logs', 'Dashboards', 'SOC Concepts'],
    learning: 'Practiced log review, alert grouping, and SOC dashboard structure.',
    status: 'Lab Active',
  },
  {
    title: 'Voter Management Portal',
    description: 'A secure government-style portal concept focused on authentication, data management, role-based access, and workflow design.',
    problem: 'Models secure access and structured workflow for sensitive records.',
    tech: ['Auth', 'RBAC', 'Data Management'],
    learning: 'Strengthened secure portal design and role-based thinking.',
    status: 'Concept Build',
  },
  {
    title: 'OWASP ZAP Practical',
    description: 'Web application scanning practical to identify alerts and understand automated vulnerability assessment.',
    problem: 'Makes scanner output understandable and actionable.',
    tech: ['OWASP ZAP', 'Web Alerts', 'Reports'],
    learning: 'Learned alert categories and scanner limitations.',
    status: 'Practical',
  },
  {
    title: 'Burp Suite Practical',
    description: 'HTTP interception practical to inspect requests and understand web traffic behavior.',
    problem: 'Reveals how requests, responses, and parameters move through apps.',
    tech: ['Burp Suite', 'HTTP', 'Proxy'],
    learning: 'Practiced request inspection and web traffic reasoning.',
    status: 'Practical',
  },
  {
    title: 'Wireshark Traffic Analysis',
    description: 'Network packet analysis practical for observing traffic, protocols, and suspicious patterns.',
    problem: 'Converts packet captures into protocol-level observations.',
    tech: ['Wireshark', 'PCAP', 'Protocols'],
    learning: 'Built packet reading and traffic pattern recognition skills.',
    status: 'Practical',
  },
  {
    title: 'Digital Forensics Practical Work',
    description: 'Forensic learning using tools like FTK Imager, Autopsy, Volatility, and evidence documentation.',
    problem: 'Documents forensic artifacts in a repeatable investigation flow.',
    tech: ['FTK Imager', 'Autopsy', 'Volatility'],
    learning: 'Practiced evidence handling, artifact review, and reporting.',
    status: 'Practical',
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
  { label: 'Logs Reviewed', value: 1280 },
  { label: 'Alerts Studied', value: 86 },
  { label: 'Tools Practiced', value: 10 },
  { label: 'Projects Built', value: 7 },
  { label: 'Lab Exercises Completed', value: 24 },
]

export const labRecords = [
  ['Burp Suite Traffic Interception', 'Inspect HTTP requests', 'Burp Suite', 'How parameters and headers change request behavior', 'Captured and reviewed sample traffic'],
  ['OWASP ZAP Automated Scan', 'Run a baseline scan', 'OWASP ZAP', 'How automated alerts are grouped and prioritized', 'Created alert notes for review'],
  ['Wireshark Traffic Analysis', 'Observe network packets', 'Wireshark', 'Protocol patterns and suspicious traffic indicators', 'Documented packet observations'],
  ['Google Dorking Practical', 'Understand search operators', 'Browser', 'How exposed data can be found with careful queries', 'Built a defensive checklist'],
  ['CTF Metadata Challenge', 'Extract hidden file metadata', 'Exif tools', 'How metadata can reveal investigation context', 'Recorded artifacts and findings'],
  ['Volatility Memory Forensics', 'Review memory artifacts', 'Volatility', 'Process and memory investigation basics', 'Mapped basic artifact categories'],
  ['Nmap Scanning Practical', 'Discover services', 'Nmap', 'Scan types, ports, and service enumeration', 'Prepared scan summary notes'],
].map(([title, aim, tool, learned, result]) => ({ title, aim, tool, learned, result }))

export const journey = [
  'Cybersecurity fundamentals',
  'Networking basics',
  'Web security tools',
  'Digital forensics tools',
  'SIEM and SOC learning',
  'Secure project building',
  'Internship/fresher readiness',
]

export const contactLinks = [
  { label: 'Email', href: 'mailto:your-email@example.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/your-username', icon: BadgeCheck },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: Server },
]
