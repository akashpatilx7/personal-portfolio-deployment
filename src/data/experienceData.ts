export const experienceData = {
  title: 'My Experience',
  experiences: [
    {
      company: 'Equations Work',
      position: 'Software Engineer',
      timeline: 'Mar 2024 - Present',
      location: 'Pune, India',
      companyLink: 'https://www.equationswork.com/',
      projects: [
        {
          name: 'Cloud Continuum Platform (CCP)',
          technologies: 'AWS CodePipeline, Terraform, Amazon Bedrock, API Gateway',
          descriptions: [
            'Architected an end-to-end CI/CD platform on AWS CodePipeline managing infrastructure, AI agents, and frontend delivery from a single source of truth, reducing deployment efforts by 60% across dev, QA, and production environments.',
            'Provisioned complete AWS infrastructure using Terraform via CodePipeline, covering Amazon Bedrock, API Gateway, AWS Amplify, CloudWatch, Lambda, and Step Functions with remote state stored in S3, eliminating all manual infrastructure setup.',
            'Built and automated Python-based AI agent lifecycle — packaging, versioning, and deploying intelligent agents into Amazon Bedrock via CodePipeline, ensuring consistent environment-specific delivery with automated rollback on failure.',
            'Secured enterprise API access by registering Bedrock endpoints in Amazon API Gateway via Terraform, enforcing IAM authentication, rate limiting, and request logging, reducing unauthorized access incidents by 40%.',
            'Implemented AI quality governance using AWS Lambda and Step Functions, auto-creating ServiceNow tickets on failures and reducing MTTR by 35%.',
            'Established full-stack observability using Amazon CloudWatch across Bedrock, API Gateway, Amplify, and Lambda, improving incident detection time by 30%.',
          ],
        },
        {
          name: 'Agentic Yodha | Genworks Health',
          technologies: 'AWS EKS, ArgoCD, Helm, Gemini AI, CloudWatch',
          descriptions: [
            'Designed and deployed a cloud-native AI platform on Amazon EKS comparing customer documents using FastAPI, Gemini AI, and agentic workflows, reducing document review time by 70%.',
            'Implemented end-to-end CI/CD pipelines using AWS CodePipeline and CodeBuild to automate build, test, and containerization workflows, increasing deployment frequency by 3x across environments.',
            'Implemented GitOps-based continuous delivery using ArgoCD and Helm charts for environment-specific deployments, achieving zero-downtime rolling updates and automated rollback on failure.',
            'Secured application secrets using AWS Secrets Manager with Kubernetes secret injection, eliminating hardcoded credentials entirely across all environments.',
            'Enabled Horizontal Pod Autoscaling (HPA) on EKS to handle variable AI processing workloads, maintaining 99.9% uptime and reducing infrastructure costs by 25%.',
            'Established end-to-end observability using Splunk, Amazon CloudWatch, AWS X-Ray, and Container Insights for centralized log analysis, proactive alerting, and faster root-cause analysis, reducing MTTR by 35%.',
          ],
        },
        {
          name: 'DevSecOps CI/CD Pipeline | Johndeere',
          technologies: 'Terraform, Jenkins, Azure AKS, Argo CD, Prometheus',
          descriptions: [
            'Implemented an end-to-end DevSecOps CI/CD pipeline for a containerized MERN stack application deployed on Azure Kubernetes Service (AKS).',
            'Automated cloud infrastructure provisioning (VNet, AKS cluster, node pools, Azure RBAC, Application Gateway integration) using Terraform, orchestrated via Jenkins.',
            'Built a secure CI pipeline integrating SonarQube quality gates, OWASP dependency checks, and Trivy container vulnerability scanning.',
            'Containerized frontend, backend, and database services and managed image lifecycle using Docker and Azure Container Registry (ACR).',
            'Implemented GitOps-based continuous delivery with Argo CD, deploying Kubernetes manifests with automated rollouts.',
            'Enabled production-grade observability using Splunk, Prometheus, and Grafana by centralizing application and Kubernetes logs, accelerating production troubleshooting.',
          ],
        },
      ],
    },
  ],
};
