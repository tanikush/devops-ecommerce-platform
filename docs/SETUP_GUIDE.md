# 📖 Complete Setup Guide

## Step-by-Step Instructions for Recruiters

### 1️⃣ Local Development Setup

#### Install Prerequisites
1. **Install Docker Desktop**
   - Download: https://www.docker.com/products/docker-desktop
   - Install and start Docker Desktop

2. **Install Git**
   - Download: https://git-scm.com/downloads

#### Run the Project Locally
```bash
# Navigate to project directory
cd devops-ecommerce-platform

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### 2️⃣ AWS Deployment (Free Tier)

#### Prerequisites
1. Create AWS Free Tier account: https://aws.amazon.com/free/
2. Install AWS CLI: https://aws.amazon.com/cli/
3. Install Terraform: https://www.terraform.io/downloads

#### Deploy Infrastructure
```bash
# Configure AWS credentials
aws configure

# Navigate to Terraform directory
cd infrastructure/terraform

# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Apply infrastructure
terraform apply

# Get EC2 instance IP
terraform output instance_public_ip
```

### 3️⃣ Kubernetes Deployment

#### Using Minikube (Local)
```bash
# Install Minikube
# Windows: choco install minikube
# Mac: brew install minikube

# Start Minikube
minikube start

# Deploy application
kubectl apply -f infrastructure/kubernetes/

# Check status
kubectl get pods
kubectl get services

# Access application
minikube service frontend-service
```

#### Using AWS EKS (Production)
```bash
# Create EKS cluster
eksctl create cluster --name devops-ecommerce --region us-east-1

# Deploy application
kubectl apply -f infrastructure/kubernetes/

# Get LoadBalancer URL
kubectl get service frontend-service
```

### 4️⃣ CI/CD Setup

#### GitHub Actions
1. Push code to GitHub
2. Go to repository Settings → Secrets
3. Add secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `DOCKER_USERNAME`
   - `DOCKER_PASSWORD`

4. Pipeline will run automatically on push

### 5️⃣ Monitoring Setup

#### Access Monitoring Tools
- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3000
  - Username: admin
  - Password: admin

#### Configure Grafana
1. Add Prometheus data source
2. Import dashboards
3. Set up alerts

### 6️⃣ Testing the Application

#### Test Frontend
```bash
# Open browser
http://localhost

# Should see e-commerce website
```

#### Test Backend API
```bash
# Test health endpoint
curl http://localhost:5000/health

# Get products
curl http://localhost:5000/api/products
```

### 7️⃣ Troubleshooting

#### Docker Issues
```bash
# Check running containers
docker ps

# View logs
docker logs <container_id>

# Restart containers
docker-compose restart
```

#### Kubernetes Issues
```bash
# Check pod status
kubectl get pods

# View pod logs
kubectl logs <pod_name>

# Describe pod
kubectl describe pod <pod_name>
```

### 8️⃣ Cleanup

#### Stop Local Services
```bash
docker-compose down
```

#### Destroy AWS Infrastructure
```bash
cd infrastructure/terraform
terraform destroy
```

#### Delete Kubernetes Resources
```bash
kubectl delete -f infrastructure/kubernetes/
```

## 🎯 What Recruiters Should See

✅ **Working Application**: Fully functional e-commerce site
✅ **Docker Containers**: All services containerized
✅ **Kubernetes Deployment**: Scalable architecture
✅ **AWS Infrastructure**: Cloud deployment ready
✅ **CI/CD Pipeline**: Automated deployment
✅ **Monitoring**: Real-time metrics and dashboards
✅ **Documentation**: Clear and comprehensive

## 📊 Key Metrics to Highlight

- **Container Size**: Optimized Docker images
- **Build Time**: Fast CI/CD pipeline
- **Uptime**: High availability setup
- **Scalability**: Auto-scaling configured
- **Security**: Vulnerability scanning enabled

## 🔗 Useful Commands

```bash
# Build specific service
docker-compose build backend

# Scale services
docker-compose up -d --scale backend=3

# View resource usage
docker stats

# Clean up everything
docker system prune -a
```

## 📞 Support

If you encounter any issues:
1. Check logs: `docker-compose logs`
2. Verify prerequisites are installed
3. Ensure ports are not in use
4. Check Docker is running

---

**Good luck with your interviews! 🚀**
