from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Security: Use environment variables
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-change-in-production')
app.config['DEBUG'] = os.getenv('FLASK_DEBUG', 'False') == 'True'

# Demo Products Data
products = [
    {"id": 1, "name": "Docker Container", "description": "Containerization tool", "price": 29.99, "stock": 50},
    {"id": 2, "name": "Kubernetes Cluster", "description": "Orchestration platform", "price": 99.99, "stock": 30},
    {"id": 3, "name": "AWS EC2 Instance", "description": "Cloud computing", "price": 49.99, "stock": 100},
    {"id": 4, "name": "Jenkins Pipeline", "description": "CI/CD automation", "price": 39.99, "stock": 75},
    {"id": 5, "name": "Terraform Module", "description": "Infrastructure as Code", "price": 59.99, "stock": 60},
    {"id": 6, "name": "Prometheus Monitor", "description": "Monitoring solution", "price": 44.99, "stock": 40},
    {"id": 7, "name": "Grafana Dashboard", "description": "Visualization tool", "price": 34.99, "stock": 55},
    {"id": 8, "name": "Ansible Playbook", "description": "Configuration management", "price": 24.99, "stock": 80}
]

@app.route('/')
def home():
    return jsonify({"message": "DevOps E-Commerce API", "status": "running"})

@app.route('/health')
def health():
    return jsonify({"status": "healthy"}), 200

@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products), 200

@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = next((p for p in products if p["id"] == product_id), None)
    if product:
        return jsonify(product), 200
    return jsonify({"error": "Product not found"}), 404

@app.route('/api/orders', methods=['POST'])
def create_order():
    data = request.get_json()
    # Security: Input validation
    if not data:
        return jsonify({"error": "Invalid request"}), 400
    return jsonify({"message": "Order created", "order_id": 12345, "data": data}), 201

if __name__ == '__main__':
    # Security: Never use debug=True in production
    app.run(host='0.0.0.0', port=5000, debug=app.config['DEBUG'])
