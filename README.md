# BookEshop Microservice Application 📚

This project is a simple web application composed of three main services:

- **Frontend**: React application served via Nginx.
- **Backend**: Spring Boot REST API.
- **Database**: PostgreSQL for data persistence.

The application allows users to view, add, edit, and delete books.

## 🐳 Dockerized Setup

To run the entire application locally using Docker and Docker Compose:
docker-compose up --build

## Services:

frontend: Available at http://localhost:5173
backend: Runs on port 8080
db: PostgreSQL container with default port 5432

## 🔁 CI/CD Pipeline

The project uses GitHub Actions to:
 - Build Docker images for frontend and backend
 - Push images to DockerHub

## ☸️ Kubernetes Manifests

Kubernetes deployment includes:
 - Deployments for frontend and backend
 - Service objects
 - Ingress routing via NGINX Ingress Controller
 - StatefulSet for PostgreSQL with persistent volume
 - ConfigMaps and Secrets for environment variables
 - All resources are deployed in a custom namespace

## 🔧 Configuration

Environment variables are managed via .env and secrets in CI.

## 📁 Project Structure

project-kiii/
├── BookEshop/             # Spring Boot backend
├── bookeshopfrontend/     # React + Nginx frontend
├── k8s/                   # Kubernetes manifests
├── docker-compose.yml     # Compose file for local orchestration
├── .github/workflows/     # GitHub Actions CI/CD pipeline
└── README.md 

## 🚀 Deployment

Kubernetes manifests are deployed using:
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/
You can access the frontend via Ingress once deployed.

## 🛠 Requirements

 - Docker & Docker Compose
 - Kubernetes (Minikube, Docker Desktop, or cloud provider)
 - kubectl
 - Node.js & Java (for local builds)

## 👤 Author

Dimitar Trposki
