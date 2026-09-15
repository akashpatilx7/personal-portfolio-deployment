export const projectsData = {
  title: 'Featured Work',
  projects: [
    {
      image: '/projects/cloud-continuum-platform.jpg',
      title: 'Cloud Continuum Platform (CCP)',
      description:
        'Architected an end-to-end CI/CD platform on AWS CodePipeline managing infrastructure, AI agents, and frontend delivery from a single source of truth, reducing deployment efforts by 60%. Automated Python AI agent lifecycles on Amazon Bedrock and secured APIs via Amazon API Gateway.',
      tags: [
        'AWS CodePipeline',
        'Terraform',
        'Amazon Bedrock',
        'API Gateway',
        'Lambda',
        'Step Functions',
        'CloudWatch',
      ],
      codeLink: 'https://github.com/akashpatilx7',
      comingSoon: false,
    },
    {
      image: '/projects/agentic-yodha.jpg',
      title: 'Agentic Yodha – AI Healthcare Platform',
      description:
        'Designed and deployed a cloud-native AI platform on Amazon EKS comparing medical documents using FastAPI, Gemini AI, and agentic workflows, cutting document review time by 70%. Implemented GitOps via ArgoCD and Helm, automated secret injection, and HPA.',
      tags: [
        'AWS EKS',
        'ArgoCD',
        'Helm',
        'Gemini AI',
        'FastAPI',
        'CloudWatch',
        'Splunk',
        'AWS Secrets Manager',
      ],
      codeLink: 'https://github.com/akashpatilx7',
      comingSoon: false,
    },
    {
      image: '/projects/devsecops-pipeline.png',
      title: 'DevSecOps CI/CD Pipeline on Azure AKS',
      description:
        'Implemented an end-to-end DevSecOps CI/CD pipeline for a containerized MERN application deployed on Azure Kubernetes Service (AKS). Automated infrastructure with Terraform, integrated SonarQube quality gates, Trivy scanning, and centralized logging via Splunk & Prometheus.',
      tags: [
        'Azure AKS',
        'Terraform',
        'Jenkins',
        'Argo CD',
        'Prometheus',
        'Grafana',
        'Splunk',
        'SonarQube',
        'Trivy',
      ],
      codeLink: 'https://github.com/akashpatilx7',
      comingSoon: false,
    },
    {
      image: '/projects/terraform-automation.png',
      title: 'Azure Infrastructure Automation with Terraform',
      description:
        'Automated CI/CD via Jenkins to deploy a Flask REST API with Azure Database for MySQL, ensuring seamless updates. Provisioned scalable Azure infrastructure (VNet, Azure VMs, Azure Load Balancer) using Terraform, enforcing security via subnet isolation and Azure RBAC.',
      tags: [
        'Terraform',
        'Jenkins',
        'Azure',
        'Python Flask',
        'MySQL',
        'Azure Load Balancer',
        'Azure RBAC',
      ],
      codeLink: 'https://github.com/akashpatilx7',
      comingSoon: false,
    },
    {
      image: '/projects/cloud-resource-tracker.jpg',
      title: 'Cloud Resource Tracker',
      description:
        'Automated multi-service tracking of AWS resources (EC2, S3, Lambda) via Shell scripts and AWS CLI, leveraging JQ for advanced data parsing and scheduled Cron jobs for consistent reporting, anomaly detection, and cost optimization.',
      tags: [
        'Shell Scripting',
        'AWS CLI',
        'Cron',
        'JQ',
        'AWS EC2',
        'AWS S3',
        'AWS Lambda',
        'Cost Optimization',
      ],
      codeLink: 'https://github.com/akashpatilx7',
      comingSoon: false,
    },
    {
      image: '/projects/repo-access-automator.jpg',
      title: 'Repo-Access Automator',
      description:
        'Developed an enterprise-grade shell utility using GitHub API and Curl to automate repository access governance and permission management, featuring robust input validation and modular execution.',
      tags: [
        'Shell Scripting',
        'GitHub API',
        'Curl',
        'Automation',
        'RBAC',
        'DevOps Security',
      ],
      codeLink: 'https://github.com/akashpatilx7',
      comingSoon: false,
    },
  ],
  viewAllProjects: {
    title: 'View All Projects',
    link: 'https://github.com/akashpatilx7?tab=repositories',
  },
};
