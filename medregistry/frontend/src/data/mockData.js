export const currentUser = {
  id: 'rajesh-sharma',
  name: 'Dr. Rajesh Sharma',
  specialty: 'Cardiology',
  institution: 'AIIMS Delhi',
  fullTitle: 'Cardiology | AIIMS Delhi',
  avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
  verified: true,
  regNumber: 'DEL/1104/1998',
  degree: 'MBBS, MD, DM (Cardiology)',
  experience: '18 Years',
  location: 'New Delhi, DL',
  email: 'rajesh.sharma@aiims.edu',
  phone: '+91 98765 43210'
};

export const peerProfiles = {
  'anjali-menon': {
    id: 'anjali-menon',
    name: 'Dr. Anjali Menon',
    verified: true,
    degree: 'MBBS, MD (Internal Medicine)',
    regNumber: 'MCI-12345',
    specialty: 'Internal Medicine',
    experience: '12 Years',
    location: 'Mumbai, MH',
    avatar: 'https://images.unsplash.com/photo-1594824813566-78a933758f46?auto=format&fit=crop&q=80&w=400',
    experienceList: [
      {
        role: 'Senior Consultant Physician',
        institution: 'Apollo Hospitals, Mumbai',
        period: '2018 - Present',
        duties: [
          'Leading the Internal Medicine department for inpatient care.',
          'Managing complex diagnostic cases and multi-system diseases.',
          'Supervising and training junior residents and medical staff.'
        ]
      },
      {
        role: 'Attending Physician',
        institution: 'Lilavati Hospital, Mumbai',
        period: '2014 - 2018',
        duties: [
          'Provided comprehensive outpatient and inpatient medical care. Participated in weekly clinical audits and case presentations.'
        ]
      }
    ],
    education: [
      {
        degree: 'MD Internal Medicine',
        institution: 'Seth GS Medical College, Mumbai',
        completed: 'Completed 2014',
        type: 'degree'
      },
      {
        degree: 'MBBS',
        institution: 'Grant Medical College, Mumbai',
        completed: 'Completed 2010',
        type: 'degree'
      },
      {
        title: 'Advanced Cardiac Life Support (ACLS)',
        issuer: 'American Heart Association',
        validity: 'Valid till 2026',
        type: 'certification'
      }
    ]
  },
  'sameer-desai': {
    id: 'sameer-desai',
    name: 'Dr. Sameer Desai',
    verified: true,
    degree: 'MS Orthopedics',
    regNumber: 'MMC-89321',
    verifiedDate: 'Verified on 12 Jan 2023',
    department: 'Orthopedic Surgery',
    institution: 'KEM Hospital, Mumbai',
    batch: 'Batch 2015, AIIMS',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
    sharedRecords: [
      { name: 'Patient_49201_MRI.dcm', size: '24.5 MB' }
    ]
  }
};

export const institutionalUpdates = [
  {
    id: 'update-1',
    type: 'POLICY UPDATE',
    time: 'Today, 09:00 AM',
    title: 'Revised Protocols for Post-Op Cardiology Care',
    excerpt: 'The hospital administration has published an updated guideline regarding immediate post-operative care for bypass patients. Please review the attached documentation before your next...',
    attachment: {
      name: 'KEM_Cardio_Protocol_v2.pdf',
      size: '1.2 MB Document'
    }
  },
  {
    id: 'update-2',
    type: 'RESEARCH',
    time: 'Yesterday, 14:30 PM',
    title: 'Call for Papers: Annual Cardiac Symposium 2024',
    excerpt: 'The organizing committee is now accepting submissions for the upcoming symposium. Submissions emphasizing AI in diagnostic imaging are highly encouraged.',
    actionText: 'VIEW SUBMISSION GUIDELINES'
  }
];

export const medicalFeedPosts = [
  {
    id: 'post-1',
    author: {
      id: 'anjali-menon',
      name: 'Dr. Anjali Menon',
      verified: true,
      title: 'Senior Consultant Physician • Internal Medicine',
      institution: 'Apollo Hospitals, Mumbai',
      avatar: 'https://images.unsplash.com/photo-1594824813566-78a933758f46?auto=format&fit=crop&q=80&w=400',
    },
    time: '2 hrs ago',
    category: 'Clinical Cases',
    content: 'Fascinating case in the outpatient clinic today. A 42-year-old male presented with atypical chest pain and unexplained syncopal episodes. High-resolution ECG showed prolonged QTc with subtle T-wave alternans.\n\nAlways remember: never dismiss syncope in young patients without a comprehensive cardiac workup! Attached the anonymized ECG strip below for discussion.',
    tags: ['#Cardiology', '#ClinicalCase', '#ECG', '#InternalMedicine'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    likes: 42,
    comments: [
      {
        id: 'c1',
        author: 'Dr. Vikram Patel',
        avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200',
        text: 'Great catch, Dr. Anjali. Did you check serum electrolytes or family history of sudden cardiac death?',
        time: '1 hr ago'
      },
      {
        id: 'c2',
        author: 'Dr. Anjali Menon',
        avatar: 'https://images.unsplash.com/photo-1594824813566-78a933758f46?auto=format&fit=crop&q=80&w=400',
        text: 'Yes! Hypokalemia was ruled out. We are currently performing genetic testing for Long QT Syndrome type 1.',
        time: '45 mins ago'
      }
    ],
    shares: 12,
    bookmarked: false,
    isLiked: false
  },
  {
    id: 'post-2',
    author: {
      id: 'rohan-mehta',
      name: 'Rohan Mehta',
      verified: false,
      title: '3rd Year MBBS Student',
      institution: 'Grant Medical College & JJ Hospital, Mumbai',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    },
    time: '5 hrs ago',
    category: 'Student Corner',
    content: 'Finished my 2-month Clinical Rotations in Emergency Medicine! 🩺 Group study session on Harrison\'s Principles of Internal Medicine scheduled for this weekend.\n\nSeniors and Residents: What are your top tips for tackling case presentations effectively during morning rounds?',
    tags: ['#MedicalStudent', '#MBBS', '#EmergencyMedicine', '#MedEd'],
    likes: 89,
    comments: [
      {
        id: 'c3',
        author: 'Dr. Sameer Desai',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
        text: 'Structure is key Rohan! Master SBAR (Situation, Background, Assessment, Recommendation) and always lead with vital signs.',
        time: '3 hrs ago'
      }
    ],
    shares: 8,
    bookmarked: true,
    isLiked: true
  },
  {
    id: 'post-3',
    author: {
      id: 'vikram-singh',
      name: 'Dr. Vikram Singh',
      verified: true,
      title: 'HOD, Neurology & Neuro-Research',
      institution: 'AIIMS, New Delhi',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    },
    time: '1 day ago',
    category: 'Research & Papers',
    content: 'Thrilled to publish our multicenter trial results in the Indian Journal of Neurology! We investigated the efficacy of early thrombolysis protocols combined with neuroprotective agents in acute ischemic stroke.\n\nFull open-access paper is attached below.',
    tags: ['#Neurology', '#StrokeResearch', '#AIIMS', '#MedicalResearch'],
    attachment: {
      name: 'AIIMS_Neuro_Thrombolysis_Trial_2024.pdf',
      size: '2.8 MB PDF Document'
    },
    likes: 154,
    comments: [],
    shares: 45,
    bookmarked: false,
    isLiked: false
  },
  {
    id: 'post-4',
    author: {
      id: 'priya-sharma',
      name: 'Dr. Priya Sharma',
      verified: true,
      title: 'Senior Resident - General Surgery',
      institution: 'KEM Hospital, Mumbai',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    },
    time: '2 days ago',
    category: 'Residency & CME',
    content: 'Completed 100 successful laparoscopic cholecystectomies during my residency tenure! Huge thanks to our mentors and OT nursing staff at KEM Hospital for guidance and support.',
    tags: ['#Surgery', '#ResidencyLife', '#KEMHospital', '#SurgicalTraining'],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    likes: 230,
    comments: [],
    shares: 19,
    bookmarked: false,
    isLiked: true
  }
];

export const trendingMedicalNews = [
  { id: 'tn-1', title: 'NMC updates guidelines for National Exit Test (NExT) 2025', readers: '14,210 readers' },
  { id: 'tn-2', title: 'AIIMS Delhi launches AI-driven Early Detection ECG Lab', readers: '9,840 readers' },
  { id: 'tn-3', title: 'ICMR issues revised Antibiotic Stewardship Protocol for ICUs', readers: '7,320 readers' },
  { id: 'tn-4', title: 'DNB & MD/MS seat matrix expanded across government colleges', readers: '18,500 readers' },
  { id: 'tn-5', title: 'Cardiological Society of India Annual Summit registration open', readers: '4,150 readers' }
];


export const upcomingMeetings = [
  {
    id: 'm1',
    month: 'OCT',
    day: '12',
    title: 'Departmental Review',
    time: '14:00 - 15:30',
    location: 'Conference Room B'
  },
  {
    id: 'm2',
    month: 'OCT',
    day: '15',
    title: 'M&M Conference',
    time: '08:00 - 09:30',
    location: 'Main Auditorium'
  }
];

export const suggestedPeers = [
  {
    id: 'anita-desai',
    name: 'Dr. Anita Desai',
    dept: 'Thoracic Surgery | Tata Mem.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'vikram-patel',
    name: 'Dr. Vikram Patel',
    dept: 'Interventional Cards | Fortis',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
  }
];

export const clinicalOpportunities = [
  {
    id: 'job-1',
    role: 'Senior Consultant - Cardiology',
    institution: 'Apollo Indraprastha',
    location: 'New Delhi, DL',
    matchScore: '98%',
    matchTag: 'Alumni Match',
    status: 'Closing Soon',
    statusType: 'alert'
  },
  {
    id: 'job-2',
    role: 'Head of Interventional Cardiology',
    institution: 'Max Super Speciality',
    location: 'Saket, Delhi',
    matchScore: '94%',
    matchTag: 'Skill Match',
    status: 'Active',
    statusType: 'active'
  },
  {
    id: 'job-3',
    role: 'Associate Professor - Clinical',
    institution: 'AIIMS',
    location: 'New Delhi, DL',
    matchScore: '88%',
    status: 'Active',
    statusType: 'active'
  },
  {
    id: 'job-4',
    role: 'Junior Resident - Internal Medicine',
    institution: 'Fortis Memorial Research Institute',
    location: 'Gurugram, HR',
    matchScore: '92%',
    matchTag: 'New Grad',
    status: 'Active',
    statusType: 'active'
  },
  {
    id: 'job-5',
    role: 'Staff Nurse - ICU',
    institution: 'Medanta - The Medicity',
    location: 'Gurugram, HR',
    matchScore: '85%',
    status: 'Closes in 5 days',
    statusType: 'alert'
  },
  {
    id: 'job-6',
    role: 'Visiting Consultant - Pediatrics',
    institution: 'Rainbow Children\'s Hospital',
    location: 'Malviya Nagar, Delhi',
    matchScore: '96%',
    matchTag: 'Top Match',
    status: 'Active',
    statusType: 'active'
  }
];

export const alumniNetwork = [
  {
    id: 'ananya-desai',
    name: 'Dr. Ananya Desai',
    verified: true,
    title: 'SENIOR CONSULTANT, ONCOLOGY',
    institution: 'KEM Hospital, Mumbai',
    regNo: 'MAH/7842/2012',
    avatar: 'https://images.unsplash.com/photo-1594824813566-78a933758f46?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'vikram-singh',
    name: 'Dr. Vikram Singh',
    verified: true,
    title: 'HOD, NEUROLOGY',
    institution: 'AIIMS, New Delhi',
    regNo: 'DEL/1104/1998',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'anita-desai-net',
    name: 'Dr. Anita Desai',
    verified: true,
    title: 'SENIOR SURGEON, THORACIC',
    institution: 'Tata Memorial Center, Mumbai',
    regNo: 'MAH/9012/2008',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'vikram-patel-net',
    name: 'Dr. Vikram Patel',
    verified: true,
    title: 'CONSULTANT, INTERVENTIONAL CARDIOLOGY',
    institution: 'Fortis Healthcare, Gurgaon',
    regNo: 'HR/4432/2014',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
  }
];

export const chatConversations = [
  {
    id: 'conv-1',
    peerId: 'sameer-desai',
    name: 'Dr. Sameer Desai',
    dept: 'Orthopedics - KEM Hospital',
    time: '10:42 AM',
    unread: false,
    preview: 'Please review the MRI scans for patient ID 49201. The L4-L5 compression seems more...',
    messages: [
      {
        id: 'msg-1',
        sender: 'peer',
        text: "Good morning Dr. Sharma. I've uploaded the preliminary findings for the trauma case from last night.",
        time: '10:30 AM',
        dateDivider: 'Today, 12 Oct 2023'
      },
      {
        id: 'msg-2',
        sender: 'self',
        text: 'Received. I will review them before rounds. Did you note any vascular compromise?',
        time: '10:35 AM',
        status: 'read'
      },
      {
        id: 'msg-3',
        sender: 'peer',
        text: 'Please review the MRI scans for patient ID 49201. The L4-L5 compression seems more severe than initially indicated.',
        time: '10:42 AM'
      }
    ]
  },
  {
    id: 'conv-2',
    peerId: 'anjali-gupta',
    name: 'Dr. Anjali Gupta',
    dept: 'Neurology - AIIMS',
    time: 'Yesterday',
    unread: true,
    preview: 'The consultation scheduled for Thursday needs to be moved to Friday afternoon if possible.',
    messages: [
      {
        id: 'msg-201',
        sender: 'peer',
        text: 'The consultation scheduled for Thursday needs to be moved to Friday afternoon if possible.',
        time: 'Yesterday 16:20'
      }
    ]
  },
  {
    id: 'conv-3',
    peerId: 'surgical-desk',
    name: 'Surgical Admin Desk',
    dept: 'Operations - Safdarjung',
    time: 'Mon',
    unread: false,
    preview: 'OT 4 is blocked for maintenance tomorrow. Please re-route schedule accordingly.',
    messages: [
      {
        id: 'msg-301',
        sender: 'peer',
        text: 'OT 4 is blocked for maintenance tomorrow. Please re-route schedule accordingly.',
        time: 'Mon 09:15'
      }
    ]
  }
];

export const institutionData = {
  name: 'Seth GS Medical College and KEM Hospital',
  address: 'Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012',
  est: '1926',
  type: 'Public Medical College',
  affiliation: 'MUHS, Nashik',
  verified: true,
  metrics: {
    alumni: '12,450+',
    active: '8,210',
    verificationRate: '98.5%'
  },
  accreditations: [
    'NMC Recognized',
    'NABH Accredited Hospital',
    'NABL Accredited Labs'
  ],
  pathways: [
    { target: 'MD General Med', institution: 'AIIMS Delhi', percentage: '18%' },
    { target: 'MS Gen Surgery', institution: 'KEM Hospital', percentage: '14%' },
    { target: 'MD Pediatrics', institution: 'PGI Chandigarh', percentage: '9%' },
    { target: 'Other Specializations', institution: '', percentage: '59%' }
  ],
  alumniLog: [
    {
      id: 'log-1',
      type: 'update',
      title: 'Dr. S. Kulkarni updated registration',
      detail: 'Added MD (Cardiology) | MMC',
      time: '2 hrs ago'
    },
    {
      id: 'log-2',
      type: 'verification',
      title: 'Verification Batch #492 Complete',
      detail: "14 MBBS records verified with Dean's office.",
      time: 'Yesterday'
    },
    {
      id: 'log-3',
      type: 'change',
      title: 'Institutional Change',
      detail: 'Dr. A. Desai transitioned to Apollo Hospitals, Chennai.',
      time: 'Oct 12, 2023'
    },
    {
      id: 'log-4',
      type: 'disciplinary',
      title: 'Disciplinary Note Appended',
      detail: 'Record #8921-M flagged by NMC. Access restricted.',
      time: 'Oct 10, 2023'
    }
  ]
};
