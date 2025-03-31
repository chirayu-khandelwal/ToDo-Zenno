# ToDo App - Zenno

A modern, full-stack Todo application built with React, Node.js, and MongoDB, containerized with Docker.

## Features

- 🎨 Modern and responsive UI with animations
- ✅ Real-time task management
- 🔄 RESTful API architecture
- 🐳 Docker containerization
- 🔒 Secure and production-ready setup
- 📊 Health monitoring and logging
- 🔄 Automatic service recovery
- 📱 Mobile-friendly design

## Tech Stack

### Frontend
- React.js
- Vite
- CSS3 with modern features
- Nginx (production)

### Backend
- Node.js
- Express.js
- MongoDB
- RESTful API

### DevOps
- Docker
- Docker Compose
- Health checks
- Resource management
- Logging system

## Prerequisites

- Docker (v20.10 or higher)
- Docker Compose (v2.0 or higher)
- Git

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-zenno.git
cd todo-zenno
```

2. Create environment files:
```bash
# Frontend
cp frontend/.env.example frontend/.env

# Backend
cp backend/.env.example backend/.env
```

3. Build and start the containers:
```bash
docker compose up -d --build
```

4. Access the application:
- Frontend: http://localhost:80
- Backend API: http://localhost:5000/api
- MongoDB: localhost:27017

## Docker Commands

### Development
```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Stop all services
docker compose down

# Rebuild and restart services
docker compose up -d --build
```

### Production
```bash
# Start with production settings
docker compose -f docker-compose.yml up -d

# View service status
docker compose ps

# Check service health
docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Health}}"
```

## Project Structure

```
todo-zenno/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── nginx.conf
├── backend/
│   ├── src/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── README.md
```

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `GET /api/health` - Health check endpoint

## Security Features

- Non-root users in containers
- Secure file permissions
- Environment variable management
- Network isolation
- Resource limits
- Health monitoring
- Log rotation

## Performance Optimizations

- Multi-stage builds
- Nginx caching
- MongoDB optimization
- Resource reservations
- Proper dependency caching
- Optimized image sizes

## Monitoring and Maintenance

### Health Checks
- Frontend: Checks web server availability
- Backend: Monitors API health
- MongoDB: Verifies database connectivity

### Logging
- JSON-formatted logs
- Log rotation (10MB per file, 3 files)
- Accessible via Docker logs

### Resource Management
- CPU and memory limits
- Resource reservations
- Automatic service recovery

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js team
- Node.js community
- MongoDB team
- Docker team 