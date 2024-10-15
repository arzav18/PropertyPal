# Real Estate Application - MERN Stack

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Socket Integration](#socket-integration)
- [Prisma ORM](#prisma-orm)
- [JWT Authentication](#jwt-authentication)
- [Context API](#context-api)
- [React Router](#react-router)

---

## Introduction

This is a **Real Estate Application** built using the **MERN stack** (MongoDB, Express, React, Node.js) along with **Prisma** ORM. The application allows users to browse, save, and chat about properties. It also implements user authentication, state management, and real-time messaging between users using **WebSockets**. The project demonstrates a full-stack web application with both backend and frontend integration.

---

## Technologies Used

### Frontend:
- **React**: For building the user interface and component-based structure.
- **React Router DOM**: For handling routing between different pages in the application.
- **Context API**: For state management across components, particularly user authentication and saved properties.
- **Cookies**: For managing user sessions and JWT tokens on the client-side.

### Backend:
- **Node.js**: For building the backend server using Express.js.
- **Express.js**: The server framework for handling HTTP requests and routing.
- **MongoDB**: As the database to store user data, property listings, and chat history.
- **Prisma**: Used as an ORM (Object-Relational Mapping) tool to manage database interactions efficiently with MongoDB.
- **Socket.io**: To enable real-time chat functionality between users.
- **JWT (JSON Web Token)**: For secure authentication and authorization of users.
- **Cookies**: For managing and storing JWT tokens.

---

## Features

- **User Authentication**: Users can sign up, log in, and maintain sessions using JWT tokens stored in cookies.
- **Property Listings**: Browse property listings, view details, and save properties to user profiles.
- **Save Posts**: Users can save properties to their favorites, and the state is preserved even after a page refresh.
- **Real-time Chat**: Chat with other users about properties using Socket.io for real-time messaging.
- **Responsive Design**: The application is mobile-friendly and adapts to different screen sizes.
  
---

## Installation

### Prerequisites
- **Node.js** (v14+)
- **MongoDB** (Set up a local instance or use a cloud service like MongoDB Atlas)
- **Prisma** (You’ll need to set up Prisma with MongoDB)

### Steps to Install:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/real-estate-app.git
   cd real-estate-app
   ```

2. **Install dependencies for both backend and frontend**:

   - Backend:
     ```bash
     cd api
     npm install
     ```

   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set up environment variables**:

   Create a `.env` file in the `api` folder with the following variables:
   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/realestate
   JWT_SECRET=your_jwt_secret_key
   SOCKET_PORT=5001
   ```

4. **Set up Prisma with MongoDB**:

   Run the following commands to set up Prisma:
   ```bash
   npx prisma init
   npx prisma db push
   ```

   This will generate the Prisma schema and synchronize the MongoDB database.

5. **Run the backend server**:
   ```bash
   npm start
   ```

6. **Run the frontend**:
   ```bash
   cd frontend
   npm start
   ```

---

## Project Structure

```bash
├── api               # Backend Node.js + Express.js
│   ├── controllers   # API request handlers
│   ├── models        # Mongoose + Prisma models for database
│   ├── routes        # Express routes
│   ├── sockets       # Socket.io setup for real-time chat
│   └── .env          # Environment variables
└── frontend          # React Frontend
    ├── components    # Reusable React components
    ├── context       # Context API for global state
    ├── pages         # Page components for different views
    ├── services      # API request handling
    ├── .env          # Environment variables for frontend
```

---

## Usage

1. **Sign Up and Login**:
   - Navigate to the sign-up page and create a new account.
   - Log in with your credentials to browse and save properties.

2. **Save Posts**:
   - You can save posts by clicking the **Save** button. Saved posts will persist even after refreshing the page, thanks to state management and the backend integration.

3. **Chat in Real-Time**:
   - Users can chat with each other using the real-time messaging feature powered by **Socket.io**.

4. **Browse Properties**:
   - Explore different properties and view detailed information, including images, prices, and locations.

---

## API Endpoints

### Authentication
- `POST /auth/register`: Register a new user
- `POST /auth/login`: Log in an existing user
- `POST /auth/logout`: Log out the user

### Property Listings
- `GET /properties`: Fetch all property listings
- `POST /properties/save`: Save a property to user’s favorites
- `GET /properties/:id`: Get details of a specific property

### Chat
- `GET /chat`: Fetch chat history
- `POST /chat`: Send a message between users

---

## Socket Integration

The application uses **Socket.io** to implement real-time chat between users. Users can communicate in real-time, and their messages are instantly updated across all connected clients.

- The backend listens for incoming chat messages and broadcasts them to the appropriate users.
- On the frontend, the socket connection is established on component mount, and incoming messages are appended to the chat window.

---

## Prisma ORM

**Prisma** is used as an ORM to interact with the MongoDB database. Prisma provides an abstraction layer over the database, making it easier to write and manage database queries.

- The Prisma schema defines models for users, properties, and chat messages.
- Queries such as saving a property or fetching chat history are handled by Prisma using a clean and simple API.

---

## JWT Authentication

User authentication is managed using **JWT** tokens. When a user logs in, a JWT token is generated and stored in cookies. This token is used to authenticate API requests and maintain user sessions.

- **Login**: Generates a JWT token and stores it in a secure HTTP-only cookie.
- **Protected Routes**: Certain API routes are protected and can only be accessed by authenticated users.
- **Token Validation**: JWT tokens are validated on each request to ensure secure access to resources.

---

## Context API

The **Context API** is used to manage global state across the application, including:
- User authentication state
- Saved posts
- Real-time chat data

This helps share state between different components without the need for prop drilling.

---

## React Router

The application uses **React Router DOM** for navigation between pages. Some of the key routes include:
- `/`: Home page listing all properties
- `/login`: User login page
- `/register`: User registration page
- `/property/:id`: Single property detail page

## License

This project is licensed under the MIT License.

---

Feel free to modify this README file as needed for your project!
