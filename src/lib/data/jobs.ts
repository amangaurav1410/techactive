export interface Job {
    id: string;
    title: string;
    category: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
}

export const jobs: Job[] = [
    {
        id: "cyber-security-analyst",
        title: "Cyber Security Analyst",
        category: "Cybersecurity",
        location: "Sydney, Australia (On-site)",
        type: "Full-time",
        experience: "1–3 Years",
        description: "We are seeking a Cyber Security Analyst to support security monitoring, vulnerability management, and incident response activities. The role involves analysing security alerts, identifying vulnerabilities, and working with IT teams to strengthen the organisation’s cybersecurity posture.",
        responsibilities: [
            "Monitor organisational systems, endpoints, and network environments to detect potential security threats.",
            "Analyse SIEM alerts and security logs to support incident detection, triage, and escalation.",
            "Conduct vulnerability assessments and security scanning using tools such as Nessus, OpenVAS, and Nmap.",
            "Perform network analysis and attack surface identification to detect exposed services and misconfigurations.",
            "Support incident investigation and response activities to mitigate security risks.",
            "Collaborate with IT and infrastructure teams to remediate vulnerabilities and implement security best practices.",
            "Maintain security documentation and assist with compliance and audit preparation.",
            "Promote cybersecurity awareness and best practices across the organisation."
        ],
        requirements: [
            "Security monitoring and SOC operations",
            "SIEM tools such as Splunk or Microsoft Sentinel",
            "Vulnerability management tools (Nessus, OpenVAS)",
            "Network analysis tools such as Nmap and Wireshark",
            "Understanding of security frameworks (NIST, CIS Controls, ISO 27001)",
            "Knowledge of incident response and threat detection"
        ]
    },
    {
        id: "senior-tester-automation",
        title: "Senior Tester (Automation)",
        category: "Quality Assurance",
        location: "Sydney, Australia (On-site)",
        type: "Full-time",
        experience: "8+ Years",
        description: "The Senior Tester (Automation) is responsible for designing and executing test strategies, developing automated test frameworks, and ensuring highquality delivery across web, mobile, and API layers. This role requires strong handson experience in automation along with the ability to lead testing efforts, mentor junior team members, and collaborate closely with development and product teams.",
        responsibilities: [
            "Design, develop, and maintain automation frameworks for web, API, and mobile applications (Selenium, Playwright, Cypress, Appium, etc.).",
            "Create and execute automated and manual test cases based on business and technical requirements.",
            "Perform functional, regression, integration, performance, and endtoend testing.",
            "Build and maintain automated test suites integrated into CI/CD pipelines (Azure DevOps, Jenkins, GitHub Actions, GitLab CI).",
            "Collaborate with developers and business analysts to identify defects and drive resolutions.",
            "Lead test planning, test strategy creation, estimation, and risk assessment activities.",
            "Ensure traceability between requirements, test scenarios, and test results.",
            "Troubleshoot automation failures and maintain test stability and reliability.",
            "Work with tools like Postman, RestAssured, SoapUI for API testing.",
            "Participate in Agile ceremonies and contribute to continuous improvement initiatives.",
            "Mentor junior testers and provide guidance on testing best practices.",
            "Prepare test reports, dashboards, and documentation for stakeholders."
        ],
        requirements: [
            "Bachelor’s degree in IT, Computer Science, Engineering, or related field.",
            "8+ years of experience in software testing, with strong automation exposure.",
            "Hands-on experience with automation tools and frameworks: Selenium WebDriver, Playwright, Cypress, Appium",
            "API automation (RestAssured, Postman scripts, Karate, etc.)",
            "Strong programming/scripting experience in C#, Python, or JavaScript",
            "Solid understanding of testing methodologies (Agile, Scrum, BDD/TDD).",
            "Experience working with CI/CD processes and version control (Git).",
            "Strong understanding of SDLC, STLC, and defect management.",
            "Experience with test management tools (Jira, Azure DevOps, Zephyr, TestRail).",
            "Good understanding of databases and ability to write SQL queries."
        ]
    }
];
