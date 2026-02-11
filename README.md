# 🚀 DevSecOps E-Commerce Platform

A complete production-ready e-commerce platform showcasing modern **DevSecOps** practices and tools.

## 📋 Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Security Features](#security-features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Monitoring](#monitoring)
- [CI/CD Pipeline](#cicd-pipeline)

## 🎯 Overview

This project demonstrates a full **DevSecOps** lifecycle including:
- Microservices architecture
- Containerization with Docker
- Orchestration with Kubernetes
- Infrastructure as Code with Terraform
- **Security-first CI/CD** with GitHub Actions
- Monitoring with Prometheus & Grafana
- **5 Security Scanning Tools** integrated
- **Shift-left security** approach

## 🔒 Security Features

### Security Tools Integrated:
1. **GitLeaks** - Secret detection in code
2. **Bandit** - Python SAST (Static Application Security Testing)
3. **Safety** - Dependency vulnerability scanning
4. **Trivy** - Container image security scanning
5. **Pre-commit Hooks** - Automated security checks before commits

### Security Best Practices:
- ✅ No hardcoded secrets
- ✅ Environment variable management
- ✅ Non-root Docker containers
- ✅ Input validation
- ✅ Security scanning in CI/CD pipeline
- ✅ Automated vulnerability detection

## 🛠️ Technologies Used

### Frontend
- HTML5, CSS3, JavaScript
- Bootstrap 5
- Nginx

### Backend
- Python Flask
- REST APIs
- Gunicorn

### DevOps Tools
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **IaC**: Terraform
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus, Grafana
- **Cloud**: AWS (EC2, VPC, S3)
- **Configuration**: Ansible

### Security Tools (DevSecOps)
- **Secret Scanning**: GitLeaks
- **SAST**: Bandit
- **SCA**: Safety (Dependency Check)
- **Container Security**: Trivy
- **Pre-commit Hooks**: Automated security checks

## 🏗️ Architecture

```
┌─────────────┐
│   Users     │
└──────┬──────┘
       │
┌──────▼──────────────────┐
│   Load Balancer (AWS)   │
└──────┬──────────────────┘
       │
┌──────▼──────────────────┐
│   Frontend (Nginx)      │
│   HTML/CSS/JS           │
└──────┬──────────────────┘
       │
┌──────▼──────────────────┐
│   Backend (Flask)       │
│   REST APIs             │
└──────┬──────────────────┘
       │
┌──────▼──────────────────┐
│   Database (PostgreSQL) │
└─────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose
- Git
- AWS Account (Free Tier)
- kubectl (for Kubernetes)
- Terraform

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/devops-ecommerce-platform.git
cd devops-ecommerce-platform
```

2. **Run with Docker Compose**
```bash
docker-compose up -d
```

3. **Access the application**
- Frontend: http://localhost
- Backend API: http://localhost:5000
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000 (admin/admin)

## 📦 Deployment

### Deploy to AWS with Terraform

1. **Configure AWS credentials**
```bash
aws configure
```

2. **Initialize Terraform**
```bash
cd infrastructure/terraform
terraform init
```

3. **Plan and Apply**
```bash
terraform plan
terraform apply
```

### Deploy to Kubernetes

1. **Apply Kubernetes manifests**
```bash
kubectl apply -f infrastructure/kubernetes/
```

2. **Check deployment status**
```bash
kubectl get pods
kubectl get services
```

## 📊 Monitoring

### Prometheus
- Metrics collection from all services
- Custom alerts configured
- Access: http://localhost:9090

### Grafana
- Pre-configured dashboards
- Real-time monitoring
- Access: http://localhost:3000

## 🔄 CI/CD Pipeline

The **DevSecOps** GitHub Actions pipeline includes:

### Security Gates:
1. **Secret Scanning** - GitLeaks detects exposed credentials
2. **SAST Scanning** - Bandit analyzes Python code for security issues
3. **Dependency Scanning** - Safety checks for vulnerable packages
4. **Container Scanning** - Trivy scans Docker images

### Pipeline Stages:
1. **Security Stage**
   - Secret detection
   - Static code analysis
   - Dependency vulnerability check

2. **Test Stage**
   - Unit tests
   - Integration tests

3. **Build Stage**
   - Docker image build
   - Container security scanning
   - Push to registry

4. **Deploy Stage**
   - Deploy to Kubernetes
   - Health checks
   - Rollback on failure

## 🔒 Security

### Security Scanning Tools:
- **GitLeaks**: Secret detection in commits
- **Bandit**: Python SAST scanning
- **Safety**: Dependency vulnerability scanning
- **Trivy**: Container image scanning
- **Pre-commit Hooks**: Automated checks before commits

### Security Best Practices:
- Container scanning with Trivy
- Non-root Docker user
- Security groups configured
- Secrets management with environment variables
- Input validation
- HTTPS/TLS enabled
- Automated security testing in CI/CD

### Run Security Scans Locally:

```bash
# Install security tools
pip install bandit safety

# Run SAST scan
bandit -r backend/

# Check dependencies
safety check -r backend/requirements.txt

# Scan Docker image
trivy image devops-ecommerce-backend:latest
```

## 📝 Project Structure

```
devops-ecommerce-platform/
├── frontend/              # HTML/CSS/JS frontend
├── backend/               # Python Flask backend
├── infrastructure/
│   ├── terraform/        # AWS infrastructure
│   ├── kubernetes/       # K8s manifests
│   └── ansible/          # Configuration management
├── ci-cd/
│   └── .github/workflows/ # CI/CD pipelines
├── monitoring/
│   ├── prometheus/       # Monitoring config
│   └── grafana/          # Dashboards
├── scripts/              # Utility scripts
└── docs/                 # Documentation
```

## 🎓 Skills Demonstrated

### DevSecOps Skills:
✅ Security-first CI/CD Pipeline
✅ Secret Detection & Management
✅ SAST (Static Application Security Testing)
✅ SCA (Software Composition Analysis)
✅ Container Security Scanning
✅ Shift-left Security Approach
✅ Pre-commit Security Hooks
✅ Vulnerability Management

### DevOps Skills:
✅ Docker & Containerization
✅ Kubernetes Orchestration
✅ AWS Cloud Services
✅ Infrastructure as Code (Terraform)
✅ CI/CD Automation
✅ Monitoring & Logging
✅ Microservices Architecture
✅ REST API Development
✅ Git & Version Control

## 📧 Contact

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 📄 License

This project is licensed under the MIT License.

---

⭐ **Star this repo if it helped you!**

Built with ❤️ to showcase DevOps skills
