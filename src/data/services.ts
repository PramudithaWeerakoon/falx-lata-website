import React from 'react';
import { Users, Briefcase, BarChart, FileText, Award, Clock, Search, CheckSquare, RefreshCw, Settings, PieChart, ShieldCheck, Zap, Target, BarChart2, BookOpen } from 'lucide-react';

export const servicesData = [
  {
    id: 'recruitment-headhunting',
    title: 'Recruitment & Headhunting',
    description: 'Our specialized recruitment services help you find and hire the perfect talent for your organization. We utilize our extensive network and industry expertise to identify candidates who not only possess the required skills but also align with your company culture.',
    shortDescription: 'Find the perfect talent for your organization with our specialized recruitment services.',
    icon: React.createElement(Users, { className: "text-primary-600", size: 40 }),
    features: [
      'Executive search and headhunting',
      'Job posting and candidate sourcing',
      'Resume screening and shortlisting',
      'Interview coordination and facilitation',
      'Background checks and reference verification',
      'Offer negotiation and onboarding support'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    approach: [
      {
        title: 'Needs Analysis',
        description: 'We begin by thoroughly understanding your organization, culture, and specific requirements for the role.',
        icon: React.createElement(Search, { size: 40 })
      },
      {
        title: 'Strategic Sourcing',
        description: 'Our team utilizes multiple channels to identify and attract the best candidates for your position.',
        icon: React.createElement(Target, { size: 40 })
      },
      {
        title: 'Comprehensive Screening',
        description: 'We conduct in-depth assessments to ensure candidates meet your technical and cultural requirements.',
        icon: React.createElement(CheckSquare, { size: 40 })
      }
    ],
    benefits: [
      {
        title: 'Time and Cost Efficiency',
        description: 'Save valuable time and resources by outsourcing the recruitment process to our experts.'
      },
      {
        title: 'Access to Wider Talent Pool',
        description: 'Leverage our extensive network to find exceptional candidates not available through conventional channels.'
      },
      {
        title: 'Reduced Hiring Risks',
        description: 'Our thorough screening process minimizes the risk of making costly hiring mistakes.'
      },
      {
        title: 'Industry Expertise',
        description: 'Benefit from our deep understanding of various industries and their specific talent requirements.'
      }
    ],
    process: [
      {
        title: 'Discovery and Requirements',
        description: 'We begin by understanding your organization and the specific requirements for the position.',
        points: [
          'In-depth consultation with stakeholders',
          'Job analysis and role definition',
          'Compensation benchmarking',
          'Timeline and expectations setting'
        ]
      },
      {
        title: 'Candidate Sourcing',
        description: 'Our team uses multiple channels to identify qualified candidates who match your requirements.',
        points: [
          'Database search and targeted networking',
          'Passive candidate outreach',
          'Strategic job advertising',
          'Social media and digital marketing'
        ]
      },
      {
        title: 'Screening and Selection',
        description: 'We conduct a comprehensive evaluation to ensure candidates meet your criteria.',
        points: [
          'Resume and application review',
          'Preliminary phone interviews',
          'Skills assessment and testing',
          'In-depth candidate interviews'
        ]
      },
      {
        title: 'Client Presentation',
        description: 'You receive a shortlist of qualified candidates with detailed profiles and our recommendations.',
        points: [
          'Candidate profiles and assessment reports',
          'Interview coordination and scheduling',
          'Feedback collection and processing',
          'Additional screening if required'
        ]
      },
      {
        title: 'Offer and Onboarding',
        description: 'We assist with finalizing the selection and ensuring a smooth transition for the new hire.',
        points: [
          'Offer negotiation support',
          'Reference and background checks',
          'Onboarding coordination',
          'Follow-up and retention monitoring'
        ]
      }
    ],
    faqs: [
      {
        question: 'How long does the recruitment process typically take?',
        answer: 'The recruitment timeline varies depending on the role complexity and seniority. For most positions, we can present qualified candidates within 2-3 weeks. Executive searches may take 4-6 weeks. We always establish clear expectations for timelines during our initial consultation.'
      },
      {
        question: 'What industries do you specialize in for recruitment?',
        answer: 'We have expertise across multiple industries including technology, finance, healthcare, manufacturing, and professional services. Our team includes recruiters with specialized industry knowledge who understand the unique talent requirements in each sector.'
      },
      {
        question: 'Do you offer guarantees on your placements?',
        answer: 'Yes, we provide a replacement guarantee period for all our placements. If a candidate leaves within the specified period (typically 3-6 months depending on the position), we will find a replacement at no additional cost. This reflects our confidence in our selection process.'
      },
      {
        question: 'How do you ensure candidates will fit our company culture?',
        answer: 'Cultural fit is a key part of our assessment process. We conduct detailed interviews to evaluate candidates\' values, work style, and preferences. We also invest time in understanding your organization\'s culture, values, and team dynamics to ensure proper alignment.'
      },
      {
        question: 'What is your pricing model for recruitment services?',
        answer: 'We typically work on a success-based fee structure, which is a percentage of the annual salary for the position. For executive searches or high-volume hiring, we can also discuss retainer arrangements. We provide transparent pricing with no hidden costs.'
      }
    ],
    relatedServices: ['hr-function-setup', 'hr-consultation', 'training-development']
  },
  {
    id: 'hr-function-setup',
    title: 'HR Function Setup',
    description: 'We help establish efficient HR systems and processes tailored to your organization\'s specific needs. Our comprehensive approach ensures that your HR infrastructure supports your business objectives and fosters a positive workplace culture.',
    shortDescription: 'Establish efficient HR systems and processes tailored to your organization\'s needs.',
    icon: React.createElement(Briefcase, { className: "text-primary-600", size: 40 }),
    features: [
      'HR department structure design',
      'HR technology implementation',
      'Workflow and process development',
      'HR documentation and templates',
      'Compliance framework establishment',
      'Employee handbook creation'
    ],
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    approach: [
      {
        title: 'Assessment',
        description: 'We conduct a thorough analysis of your current HR infrastructure and identify areas for improvement.',
        icon: React.createElement(BarChart2, { size: 40 })
      },
      {
        title: 'Strategic Design',
        description: 'Our team creates a customized HR framework aligned with your business objectives and industry standards.',
        icon: React.createElement(Settings, { size: 40 })
      },
      {
        title: 'Implementation',
        description: 'We support the execution of the HR framework with comprehensive training and guidance.',
        icon: React.createElement(Zap, { size: 40 })
      }
    ],
    benefits: [
      {
        title: 'Strategic Alignment',
        description: 'Ensure your HR function directly supports your business goals and organizational strategy.'
      },
      {
        title: 'Increased Efficiency',
        description: 'Streamlined processes and systems reduce administrative burden and improve operational effectiveness.'
      },
      {
        title: 'Compliance Assurance',
        description: 'Build a strong foundation of HR practices that meet legal requirements and industry standards.'
      },
      {
        title: 'Scalable Foundation',
        description: 'Create HR infrastructure that can grow and adapt as your organization evolves and expands.'
      }
    ],
    process: [
      {
        title: 'Diagnostic Assessment',
        description: 'We evaluate your current HR capabilities, processes, and needs.',
        points: [
          'Stakeholder interviews and surveys',
          'Documentation review',
          'Process mapping and evaluation',
          'Gap analysis and opportunity identification'
        ]
      },
      {
        title: 'Strategic Planning',
        description: 'We develop a comprehensive roadmap for your HR function setup.',
        points: [
          'HR strategy alignment with business goals',
          'Function structure and staffing recommendations',
          'Technology and tools selection',
          'Budget and resource planning'
        ]
      },
      {
        title: 'Design and Development',
        description: 'Our team creates customized HR processes, policies, and tools.',
        points: [
          'HR policies and procedures',
          'Workflow and process design',
          'Documentation templates',
          'System configuration'
        ]
      },
      {
        title: 'Implementation',
        description: 'We support the rollout of your new HR function and processes.',
        points: [
          'Change management planning',
          'Training and knowledge transfer',
          'Phased implementation approach',
          'Stakeholder communication'
        ]
      },
      {
        title: 'Review and Optimization',
        description: 'We ensure your HR function is operating effectively and make refinements as needed.',
        points: [
          'Performance metrics establishment',
          'Process effectiveness evaluation',
          'Feedback collection and incorporation',
          'Continuous improvement recommendations'
        ]
      }
    ],
    faqs: [
      {
        question: 'How long does it typically take to set up an HR function?',
        answer: 'The timeline for setting up an HR function varies based on your organization\'s size and complexity. For small to mid-sized companies, the process typically takes 2-3 months. For larger organizations with multiple locations or complex requirements, it may take 4-6 months. We establish clear milestones and timelines during our planning phase.'
      },
      {
        question: 'Do we need to hire HR staff before working with you on HR setup?',
        answer: 'No, you don\'t need existing HR staff to begin the process. In fact, we can help define the HR roles needed and assist with recruitment of HR personnel as part of our service. We can also provide interim HR support during the transition period if required.'
      },
      {
        question: 'What HR technology systems do you recommend?',
        answer: 'We evaluate and recommend HR systems based on your specific needs, size, industry, and budget. We remain vendor-neutral to ensure you get the best solution for your organization. Our team has experience with various HRIS platforms ranging from solutions for small businesses to enterprise-level systems.'
      },
      {
        question: 'How do you ensure our HR function will be compliant with local regulations?',
        answer: 'Compliance is a core component of our HR function setup. We stay current with employment laws and regulations across different jurisdictions. Our team includes specialists who ensure your policies, procedures, and practices align with relevant legal requirements. We also build in periodic compliance reviews to maintain ongoing adherence.'
      },
      {
        question: 'Can you help with just specific aspects of HR setup rather than the entire function?',
        answer: 'Absolutely. Our services are modular, allowing you to engage us for specific components such as HR policy development, performance management system design, or HRIS implementation. We tailor our approach to address your most pressing needs while ensuring alignment with your overall HR strategy.'
      }
    ],
    relatedServices: ['policies-procedures', 'hr-consultation', 'payroll-outsourcing']
  },
  {
    id: 'payroll-outsourcing',
    title: 'Payroll Outsourcing',
    description: 'Our payroll outsourcing service streamlines your payment processes, ensuring accuracy, compliance, and confidentiality. We manage all aspects of your payroll, allowing you to focus on your core business activities.',
    shortDescription: 'Streamline your payroll process with our accurate and secure outsourcing services.',
    icon: React.createElement(BarChart, { className: "text-primary-600", size: 40 }),
    features: [
      'Salary and wage processing',
      'Tax calculations and filings',
      'Statutory compliance',
      'Leave and attendance management',
      'Payslip generation and distribution',
      'Payroll reporting and analytics'
    ],
    image: 'https://images.pexels.com/photos/7048043/pexels-photo-7048043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    approach: [
      {
        title: 'Systematic Processing',
        description: 'We implement structured payroll procedures that ensure accuracy and timeliness every cycle.',
        icon: React.createElement(RefreshCw, { size: 40 })
      },
      {
        title: 'Compliance Management',
        description: 'Our team stays current with changing regulations to ensure your payroll meets all legal requirements.',
        icon: React.createElement(ShieldCheck, { size: 40 })
      },
      {
        title: 'Data Security',
        description: 'We employ robust security measures to protect sensitive employee and financial information.',
        icon: React.createElement(ShieldCheck, { size: 40 })
      }
    ],
    benefits: [
      {
        title: 'Cost Reduction',
        description: 'Eliminate the need for in-house payroll staff and expensive payroll software subscriptions.'
      },
      {
        title: 'Time Savings',
        description: 'Free up valuable time for your HR and finance teams to focus on strategic initiatives.'
      },
      {
        title: 'Error Minimization',
        description: 'Reduce payroll errors and the associated costs of correcting mistakes with our expert processing.'
      },
      {
        title: 'Compliance Assurance',
        description: 'Stay compliant with changing tax laws and regulations without having to monitor updates yourself.'
      }
    ],
    process: [
      {
        title: 'Setup and Transition',
        description: 'We establish your payroll system and ensure a smooth transition from your current process.',
        points: [
          'Data collection and verification',
          'System configuration',
          'Process documentation',
          'Parallel run testing'
        ]
      },
      {
        title: 'Monthly Processing',
        description: 'Our team handles the complete monthly payroll cycle with precision and care.',
        points: [
          'Data input and validation',
          'Salary calculation and verification',
          'Tax and statutory deductions',
          'Final approval process'
        ]
      },
      {
        title: 'Disbursement',
        description: 'We manage the secure distribution of payments and documentation to employees.',
        points: [
          'Payslip generation',
          'Bank transfer file preparation',
          'Payment disbursement',
          'Employee communications'
        ]
      },
      {
        title: 'Compliance and Reporting',
        description: 'We ensure all statutory requirements are met and provide comprehensive reports.',
        points: [
          'Tax remittances',
          'Statutory filings',
          'Management reports',
          'Audit support'
        ]
      },
      {
        title: 'Continuous Optimization',
        description: 'We regularly review and improve your payroll processes for maximum efficiency.',
        points: [
          'Process audit and refinement',
          'System updates and enhancements',
          'Policy and procedure reviews',
          'Feedback incorporation'
        ]
      }
    ],
    faqs: [
      {
        question: 'How do you maintain data security and confidentiality?',
        answer: 'We implement strict security protocols including data encryption, secure servers, access controls, and regular security audits. All our staff sign confidentiality agreements, and we comply with relevant data protection regulations. We can also sign custom NDAs if required by your organization.'
      },
      {
        question: 'What is the process for transitioning to your payroll services?',
        answer: 'Our transition process involves several phases: initial assessment, data collection, system setup, parallel processing, and final cutover. We work closely with your team to ensure minimal disruption. The transition typically takes 4-6 weeks depending on complexity, and we maintain open communication throughout.'
      },
      {
        question: 'How do you handle payroll queries from employees?',
        answer: 'We offer multiple support channels for employee queries including email, phone, and ticketing systems. Our team responds to inquiries within 24 hours. We can either serve as the direct point of contact for employees or work behind the scenes with your HR team depending on your preference.'
      },
      {
        question: 'Can you integrate with our existing HR or accounting systems?',
        answer: 'Yes, we have experience integrating with a wide range of HR, time and attendance, and accounting systems. We can establish automated data transfers to minimize manual entry and ensure data consistency across platforms. During our setup phase, we\'ll assess your current systems and develop the appropriate integration strategy.'
      },
      {
        question: 'What happens if there are errors in the payroll processing?',
        answer: 'While our multi-level verification process minimizes errors, if any issue occurs, we have an established error resolution protocol. We immediately notify you, identify the root cause, implement corrections, and take preventive measures for the future. We also assume responsibility for penalties that result from errors on our part.'
      }
    ],
    relatedServices: ['hr-function-setup', 'policies-procedures', 'hr-consultation']
  },
  {
    id: 'policies-procedures',
    title: 'Policies & Procedures',
    description: 'We develop comprehensive HR policies aligned with best practices and legal requirements. Our customized policies help create a structured and fair workplace environment while mitigating compliance risks.',
    shortDescription: 'Develop comprehensive HR policies aligned with best practices and compliance requirements.',
    icon: React.createElement(FileText, { className: "text-primary-600", size: 40 }),
    features: [
      'Policy development and documentation',
      'Compliance with local labor laws',
      'Employee handbooks and manuals',
      'Standard operating procedures',
      'Policy implementation support',
      'Regular policy reviews and updates'
    ],
    image: 'https://images.pexels.com/photos/6334916/pexels-photo-6334916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    approach: [
      {
        title: 'Customization',
        description: 'We create policies tailored to your industry, size, culture, and specific organizational needs.',
        icon: React.createElement(Settings, { size: 40 })
      },
      {
        title: 'Legal Compliance',
        description: 'Our policies ensure adherence to relevant laws and regulations in your operating locations.',
        icon: React.createElement(ShieldCheck, { size: 40 })
      },
      {
        title: 'Practical Application',
        description: 'We develop clear, understandable policies that can be effectively implemented and followed.',
        icon: React.createElement(BookOpen, { size: 40 })
      }
    ],
    benefits: [
      {
        title: 'Risk Mitigation',
        description: 'Reduce legal and operational risks through clear, compliant policies and procedures.'
      },
      {
        title: 'Consistent Decision-Making',
        description: 'Ensure fair and uniform handling of employee matters across the organization.'
      },
      {
        title: 'Enhanced Organizational Culture',
        description: 'Create a positive workplace environment with clear expectations and guidelines.'
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamline processes and reduce conflicts through standardized procedures and protocols.'
      }
    ],
    process: [
      {
        title: 'Assessment and Planning',
        description: 'We evaluate your current policies and identify needs based on your business and compliance requirements.',
        points: [
          'Current policy review',
          'Regulatory compliance assessment',
          'Industry benchmarking',
          'Gap analysis and prioritization'
        ]
      },
      {
        title: 'Policy Development',
        description: 'Our team creates customized policies that address your specific needs and reflect best practices.',
        points: [
          'Policy drafting',
          'Legal review and validation',
          'Stakeholder consultation',
          'Refinement and finalization'
        ]
      },
      {
        title: 'Documentation Creation',
        description: 'We compile policies into well-organized, user-friendly formats for easy reference and implementation.',
        points: [
          'Employee handbook development',
          'Procedure manual creation',
          'Digital and print format preparation',
          'Translation if required'
        ]
      },
      {
        title: 'Implementation Support',
        description: 'We help you introduce and effectively communicate new policies throughout your organization.',
        points: [
          'Communication strategy development',
          'Management training and briefings',
          'Employee orientation sessions',
          'Q&A support'
        ]
      },
      {
        title: 'Maintenance and Updates',
        description: 'We provide ongoing support to keep your policies current with changing regulations and business needs.',
        points: [
          'Regular compliance reviews',
          'Policy effectiveness assessment',
          'Periodic updates and revisions',
          'Change management support'
        ]
      }
    ],
    faqs: [
      {
        question: 'How do you ensure policies comply with local labor laws?',
        answer: 'Our team stays updated on employment legislation across various jurisdictions. We conduct thorough legal reviews of all policies to ensure compliance with federal, state, and local laws. For international operations, we work with local legal experts to validate compliance in each country of operation.'
      },
      {
        question: 'Can you update our existing policies rather than creating new ones?',
        answer: 'Absolutely. We can review and update your existing policies to address gaps, improve clarity, or ensure compliance with current regulations. Our approach is flexible—we can perform comprehensive overhauls or targeted updates depending on your needs and the state of your current documentation.'
      },
      {
        question: 'How often should HR policies be reviewed and updated?',
        answer: 'We recommend a complete policy review annually, with targeted updates whenever significant regulatory changes occur or your business undergoes substantial changes (mergers, expansions, new products/services). We offer ongoing policy maintenance services to help you maintain current and compliant documentation.'
      },
      {
        question: 'How do you help with policy implementation and employee acceptance?',
        answer: 'Successful implementation involves more than just distributing documents. We provide communication templates, training materials, and management briefings to help explain the purpose and benefit of policies. We can also conduct employee orientation sessions and develop FAQ resources to address common questions and concerns.'
      },
      {
        question: 'What types of policies do you typically develop for clients?',
        answer: 'We develop a comprehensive range of policies including: employment terms and conditions, code of conduct, diversity and inclusion, compensation and benefits, performance management, leave and attendance, workplace health and safety, disciplinary procedures, grievance resolution, data protection, and IT usage policies. We can also create industry-specific policies to address unique requirements.'
      }
    ],
    relatedServices: ['hr-function-setup', 'hr-consultation', 'training-development']
  },
  {
    id: 'hr-consultation',
    title: 'HR Consultation',
    description: 'Our experienced consultants provide expert advice on HR strategy, organizational development, and employee relations. We help you navigate complex HR challenges and implement effective solutions.',
    shortDescription: 'Get expert advice on HR strategy, organizational development, and employee relations.',
    icon: React.createElement(Award, { className: "text-primary-600", size: 40 }),
    features: [
      'HR strategy development',
      'Performance management systems',
      'Compensation and benefits structuring',
      'Employee engagement initiatives',
      'Conflict resolution and mediation',
      'Change management support'
    ],
    image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    approach: [
      {
        title: 'Diagnostic Analysis',
        description: 'We identify root causes of HR challenges through data analysis and stakeholder consultations.',
        icon: React.createElement(Search, { size: 40 })
      },
      {
        title: 'Strategic Advising',
        description: 'Our consultants provide expert guidance based on industry best practices and proven methodologies.',
        icon: React.createElement(Target, { size: 40 })
      },
      {
        title: 'Implementation Support',
        description: 'We assist with executing recommendations and measure outcomes to ensure success.',
        icon: React.createElement(PieChart, { size: 40 })
      }
    ],
    benefits: [
      {
        title: 'Expert Perspective',
        description: 'Gain insights from HR specialists with experience across various industries and challenges.'
      },
      {
        title: 'Customized Solutions',
        description: 'Receive advice and strategies tailored to your specific organizational context and objectives.'
      },
      {
        title: 'Change Facilitation',
        description: 'Navigate organizational transitions with expert guidance on change management and communication.'
      },
      {
        title: 'Enhanced HR Effectiveness',
        description: 'Improve the impact and efficiency of your HR function through strategic optimization.'
      }
    ],
    process: [
      {
        title: 'Discovery',
        description: 'We gather information to understand your organization and the specific HR challenges you face.',
        points: [
          'Initial consultation and needs assessment',
          'Documentation review and analysis',
          'Stakeholder interviews and surveys',
          'Current state assessment'
        ]
      },
      {
        title: 'Diagnosis',
        description: 'Our team analyzes the collected data to identify root causes and opportunity areas.',
        points: [
          'Data analysis and interpretation',
          'Benchmarking against industry standards',
          'SWOT analysis',
          'Root cause identification'
        ]
      },
      {
        title: 'Strategy Development',
        description: 'We create customized recommendations and action plans to address your HR challenges.',
        points: [
          'Solution design and prioritization',
          'Resource and timeline planning',
          'Cost-benefit analysis',
          'Risk assessment and mitigation'
        ]
      },
      {
        title: 'Implementation Support',
        description: 'We provide guidance and assistance as you execute the recommended strategies.',
        points: [
          'Implementation planning and coordination',
          'Stakeholder engagement',
          'Training and capability building',
          'Progress monitoring and adjustment'
        ]
      },
      {
        title: 'Evaluation and Refinement',
        description: 'We measure outcomes and refine approaches to ensure lasting positive impact.',
        points: [
          'Success metrics tracking',
          'Impact assessment',
          'Feedback collection and incorporation',
          'Strategy refinement'
        ]
      }
    ],
    faqs: [
      {
        question: 'What types of HR challenges can your consultation services address?',
        answer: 'Our consultation services can address a wide range of HR challenges including organizational restructuring, talent management strategy, employment relations issues, HR technology selection, compensation system design, performance management optimization, employee engagement improvement, succession planning, and change management during mergers or acquisitions.'
      },
      {
        question: 'How is HR consultation different from other HR services you offer?',
        answer: 'While our other services focus on specific HR functions (like recruitment or payroll), HR consultation provides strategic advice on broader HR challenges. It\'s more advisory in nature, helping you analyze situations, develop strategies, and implement solutions. Consultation is often the starting point that identifies needs for our other services.'
      },
      {
        question: 'Do you provide interim HR leadership or temporary HR support?',
        answer: 'Yes, we offer interim HR leadership services where our experienced consultants can temporarily fill HR management roles during transitions, leaves of absence, or while you search for permanent staff. We can provide part-time or full-time support at various levels from HR Manager to CHRO, ensuring continuity of your HR function.'
      },
      {
        question: 'How do you measure the success of your HR consultation services?',
        answer: 'We establish clear success metrics at the beginning of each engagement based on your specific objectives. These might include quantitative measures (turnover reduction, engagement scores, process efficiency) and qualitative outcomes (leadership capability, quality of hire). We conduct periodic reviews to track progress and make adjustments as needed.'
      },
      {
        question: 'Can you support HR challenges across multiple locations or countries?',
        answer: 'Yes, we have experience supporting organizations with operations across multiple locations and countries. Our team includes consultants with international HR expertise who understand cross-cultural nuances and regulatory differences. We can provide consistent HR approaches while respecting local requirements and cultural contexts.'
      }
    ],
    relatedServices: ['hr-function-setup', 'policies-procedures', 'recruitment-headhunting']
  },
  {
    id: 'training-development',
    title: 'Training & Development',
    description: 'Our customized training programs enhance employee skills and productivity. We design and deliver engaging learning experiences that address specific development needs and support your organizational goals.',
    shortDescription: 'Enhance employee skills and productivity with our customized training programs.',
    icon: React.createElement(Clock, { className: "text-primary-600", size: 40 }),
    features: [
      'Training needs assessment',
      'Customized program development',
      'Leadership and management training',
      'Soft skills and communication workshops',
      'Technical and functional training',
      'Training effectiveness evaluation'
    ],
    image: 'https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    approach: [
      {
        title: 'Needs-Based Design',
        description: 'We create programs based on careful assessment of your organization\'s specific skill gaps and objectives.',
        icon: React.createElement(Target, { size: 40 })
      },
      {
        title: 'Interactive Learning',
        description: 'Our training programs utilize engaging methodologies that promote active participation and retention.',
        icon: React.createElement(Users, { size: 40 })
      },
      {
        title: 'Practical Application',
        description: 'We focus on translating learning into workplace behaviors through practical exercises and follow-up.',
        icon: React.createElement(Briefcase, { size: 40 })
      }
    ],
    benefits: [
      {
        title: 'Enhanced Employee Performance',
        description: 'Improve individual and team effectiveness through targeted skill development and knowledge acquisition.'
      },
      {
        title: 'Increased Employee Engagement',
        description: 'Boost motivation and commitment by investing in employee growth and development.'
      },
      {
        title: 'Leadership Pipeline Development',
        description: 'Build internal capabilities and prepare future leaders through structured development programs.'
      },
      {
        title: 'Improved Organizational Adaptability',
        description: 'Enhance your team\'s ability to navigate change and adopt new methodologies and technologies.'
      }
    ],
    process: [
      {
        title: 'Needs Assessment',
        description: 'We identify specific skills gaps and development needs within your organization.',
        points: [
          'Performance analysis',
          'Skills gap identification',
          'Stakeholder interviews',
          'Business objectives alignment'
        ]
      },
      {
        title: 'Program Design',
        description: 'Our team creates customized training content and methodologies to address identified needs.',
        points: [
          'Learning objectives definition',
          'Content development',
          'Methodology selection',
          'Materials creation'
        ]
      },
      {
        title: 'Delivery Preparation',
        description: 'We prepare all logistics and materials for effective training implementation.',
        points: [
          'Schedule coordination',
          'Facilitator preparation',
          'Venue and equipment arrangement',
          'Participant communication'
        ]
      },
      {
        title: 'Training Delivery',
        description: 'Our experienced facilitators conduct engaging, interactive learning sessions.',
        points: [
          'Professional facilitation',
          'Participant engagement techniques',
          'Practice opportunities',
          'Real-time feedback'
        ]
      },
      {
        title: 'Evaluation and Follow-up',
        description: 'We assess training effectiveness and provide support for skill application.',
        points: [
          
          'Learning assessment',
          'Participant feedback collection',
          'Implementation support',
          'Impact measurement'
        ]
      }
    ],
    faqs: [
      {
        question: 'What types of training programs do you offer?',
        answer: 'We offer a comprehensive range of training programs including leadership development, management skills, communication, customer service, sales techniques, diversity and inclusion, conflict resolution, time management, team building, and change management. We also develop custom programs for industry-specific skills or unique organizational needs.'
      },
      {
        question: 'How do you deliver training (in-person, virtual, hybrid)?',
        answer: 'We offer flexible delivery options including in-person workshops, virtual live sessions, self-paced e-learning, and hybrid approaches. Our recommendation depends on content type, participant location, schedule constraints, and learning objectives. All formats incorporate interactive elements and practical application opportunities.'
      },
      {
        question: 'How long are your typical training programs?',
        answer: 'Program length varies based on content depth and complexity. We offer options ranging from 2-hour focused workshops to multi-day immersive programs. For comprehensive skill development, we often design learning journeys that spread training over time with practice and application between sessions for better retention and behavior change.'
      },
      {
        question: 'How do you measure training effectiveness?',
        answer: 'We use a multi-level evaluation approach that includes participant satisfaction (reaction), knowledge acquisition (learning), behavior change (application), and business impact (results). Methods include pre/post assessments, participant surveys, manager feedback, on-the-job observation, and business performance metrics tied to training objectives.'
      },
      {
        question: 'Can you create industry-specific or technical training programs?',
        answer: 'Yes, we develop specialized training for industry-specific and technical needs. Our approach involves working with your subject matter experts to capture content while applying our instructional design expertise to create engaging, effective learning experiences. We have experience creating technical training across various industries and functions.'
      }
    ],
    relatedServices: ['hr-consultation', 'hr-function-setup', 'policies-procedures']
  }
];