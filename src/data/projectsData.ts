export const projectsData = {
  title: 'Featured Work',
  projects: [
    {
      image: '/projects/devsecops-pipeline.png',
      title: 'End-to-End DevSecOps CI/CD Pipeline on AWS EKS',
      description:
        'Implemented an end-to-end DevSecOps CI/CD pipeline for a containerized MERN stack application deployed on AWS EKS. Automated cloud infrastructure provisioning using Terraform, built secure CI pipeline with SonarQube, OWASP, and Trivy scanning, and implemented GitOps-based continuous delivery with Argo CD.',
      tags: ['Terraform', 'Jenkins', 'AWS EKS', 'Argo CD', 'Docker', 'Prometheus', 'Grafana'],
      codeLink: 'https://github.com/akashpatilx7',
      comingSoon: false,
    },
    {
      image: '/projects/containerized-deployment.png',
      title: 'Scalable Containerized Deployment System',
      description:
        'Developed an end-to-end CI/CD pipeline using Docker, Jenkins and AWS EC2 to automate deployments, integrating GitHub for version control and Docker Hub for container storage. Implemented manual/automated deployments with Jenkins Groovy pipelines, emphasizing Infrastructure as Code (IaC) and security configurations.',
      tags: ['Docker', 'Jenkins', 'AWS EC2', 'CI/CD', 'GitHub'],
      codeLink: 'https://github.com/akashpatilx7',
      comingSoon: false,
    },
    {
      image: '/projects/terraform-automation.png',
      title: 'AWS Infrastructure Automation with Terraform',
      description:
        'Automated CI/CD via Jenkins to deploy a Flask REST API with AWS RDS MySQL, ensuring seamless updates. Provisioned scalable AWS infrastructure (VPC, EC2, RDS, Load Balancer) using Terraform, enforcing security via subnet isolation and IAM roles.',
      tags: ['Terraform', 'Jenkins', 'AWS', 'Python Flask', 'MySQL', 'RDS'],
      codeLink: 'https://github.com/akashpatilx7',
      comingSoon: false,
    },
  ],
  viewAllProjects: {
    title: 'View All Projects',
    link: 'https://github.com/akashpatilx7?tab=repositories',
  },
};
