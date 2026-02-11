# 🔒 DevSecOps Security Guide

## Security Tools Integrated

### 1. **Secret Scanning** - GitLeaks
Prevents secrets/credentials from being committed

### 2. **SAST** - Bandit
Static code analysis for Python security issues

### 3. **Dependency Scanning** - Safety
Checks for vulnerable dependencies

### 4. **Container Scanning** - Trivy
Scans Docker images for vulnerabilities

### 5. **DAST** - OWASP ZAP
Dynamic security testing of running application

## Quick Setup

### Install Security Tools

```bash
# Install pre-commit
pip install pre-commit

# Install security scanners
pip install bandit safety

# Install GitLeaks (Windows)
# Download from: https://github.com/gitleaks/gitleaks/releases

# Install Trivy (Windows)
# Download from: https://github.com/aquasecurity/trivy/releases
```

### Setup Pre-commit Hooks

```bash
pre-commit install
```

### Run Security Scans Manually

```bash
# Secret scanning
gitleaks detect --source . -v

# SAST scanning
bandit -r backend/ -c security/.bandit

# Dependency check
safety check -r backend/requirements.txt

# Container scan
trivy image devops-ecommerce-backend:latest
```

## Security Checklist

- ✅ Secrets not hardcoded
- ✅ Environment variables used
- ✅ Input validation added
- ✅ HTTPS enabled
- ✅ Non-root Docker user
- ✅ Dependencies updated
- ✅ Security scanning in CI/CD
- ✅ Monitoring & alerts configured

## Interview Points

1. "Integrated 5 security tools in CI/CD pipeline"
2. "Implemented shift-left security with pre-commit hooks"
3. "Automated vulnerability scanning catching issues before production"
4. "Reduced security risks by X% through automated scanning"
