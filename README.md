# ToDo App - Zenno

A modern, responsive Todo application built with React.js and Node.js, featuring a clean design and smooth animations.

## Features

- ✨ Modern and responsive UI design
- 🎨 Smooth animations and transitions
- 📱 Mobile-friendly interface
- 🔄 Real-time task updates
- ✅ Task completion tracking
- 📝 Edit and delete functionality
- 🎯 Clean and intuitive user experience

## Tech Stack

### Frontend
- React.js
- CSS3 with modern features
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## Project Structure

```
ToDo-Zenno/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ToDo.jsx
│   │   ├── utils/
│   │   │   └── HandleApi.js
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
└── backend/
    ├── models/
    │   └── Todo.js
    ├── routes/
    │   └── todo.js
    └── server.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ToDo-Zenno.git
cd ToDo-Zenno
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/) 