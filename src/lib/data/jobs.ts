export interface Job {
    id: string;
    title: string;
    category: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
}

export const jobs: Job[] = [
    {
        id: "cybersecurity-analyst",
        title: "Cybersecurity Analyst",
        category: "Cybersecurity",
        location: "Australia",
        type: "Full-time",
        description: "We are looking for a highly skilled Cybersecurity Analyst to join our team. You will be responsible for protecting our clients' technical infrastructure and scale their growth securely.",
        requirements: [
            "3+ years of experience in cybersecurity operations.",
            "Strong understanding of network protocols and security tools.",
            "Experience with incident response and threat intelligence.",
            "Relevant certifications such as CompTIA Security+, CEH, or CISSP."
        ],
        responsibilities: [
            "Monitor networks for security breaches and investigate violations.",
            "Install and use software, such as firewalls and data encryption programs.",
            "Conduct penetration testing and vulnerability assessments.",
            "Develop security standards and best practices for the organization."
        ]
    },
    {
        id: "penetration-tester",
        title: "Senior Penetration Tester",
        category: "Cybersecurity",
        location: "Australia",
        type: "Full-time",
        description: "Join us as a Senior Penetration Tester to help identify vulnerabilities in our systems and infrastructure before malicious actors do.",
        requirements: [
            "5+ years of experience in offensive security.",
            "Proven track record of finding critical vulnerabilities.",
            "Expertise in web application, network, and cloud penetration testing.",
            "Strong report writing and communication skills."
        ],
        responsibilities: [
            "Perform manual and automated penetration tests.",
            "Simulate cyberattacks to identify vulnerabilities.",
            "Work with development teams to remediate identified security flaws.",
            "Stay up-to-date with the latest security threats and techniques."
        ]
    },
    {
        id: "security-architect",
        title: "Security Architect",
        category: "Cybersecurity",
        location: "Australia",
        type: "Full-time",
        description: "As a Security Architect, you will design, build, and oversee the implementation of network and computer security for our clients.",
        requirements: [
            "7+ years of experience in security architecture.",
            "Expert knowledge of secure network design and encryption.",
            "Experience with cloud security (AWS, GCP, Azure).",
            "Bachelor's or Master's degree in Computer Science or related field."
        ],
        responsibilities: [
            "Design secure network architectures and systems.",
            "Evaluate new security technologies and tools.",
            "Ensure compliance with industry standards and regulations.",
            "Lead security reviews and architecture assessments."
        ]
    },
    {
        id: "incident-response-manager",
        title: "Incident Response Manager",
        category: "Cybersecurity",
        location: "Australia",
        type: "Full-time",
        description: "Lead our incident response efforts and help our clients minimize the impact of security incidents.",
        requirements: [
            "5+ years of experience in incident response and digital forensics.",
            "Strong leadership and project management skills.",
            "Experience working with legal and compliance teams.",
            "Deep understanding of the threat landscape."
        ],
        responsibilities: [
            "Coordinate the response to security incidents.",
            "Develop and maintain incident response plans.",
            "Perform digital forensics and post-incident analysis.",
            "Communicate incident status to stakeholders and management."
        ]
    }
];
