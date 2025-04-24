
# BiteBuddy - Food Delivery App

A modern food delivery application with user authentication built using React.js and Node.js.

## Features

- User Registration and Login
- Home Page with Food Categories
- Responsive design for all devices
- Authentication with Email/Password and Phone OTP
- Google Sign-in Option

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- TypeScript
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd bitebuddy
```

2. **Install frontend dependencies**

```bash
npm install
```

3. **Install backend dependencies**

```bash
cd server
npm install
```

4. **Create .env file in server directory**

Create a `.env` file in the server directory with the following content:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bitebuddy
JWT_SECRET=your-secret-key-change-this-in-production
```

### Running the Application

1. **Start MongoDB**

Make sure MongoDB is running on your system.

2. **Start the backend server**

In the server directory:

```bash
npm run dev
```

This will start the backend server at http://localhost:5000

3. **Start the frontend development server**

In the project root directory:

```bash
npm run dev
```

This will start the frontend development server at http://localhost:8080


- Restaurant listings and menu items
- Cart functionality
- Order placement and tracking
- Payment integration
- User reviews and ratings
