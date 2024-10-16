# PropertyPal – Discover Your Space

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

**PropertyPal** is a Real Estate Application built using the **MERN stack** (MongoDB, Express, React, Node.js) along with **Prisma** ORM. The application allows users to browse, save, and chat about properties. It also implements user authentication, state management, and real-time messaging between users using **WebSockets**. The project demonstrates a full-stack web application with both backend and frontend integration.

![Screenshot (1)](https://github.com/user-attachments/assets/2c6271ff-1540-4ae4-9799-753572d55a84)


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
![Screenshot (8)](https://github.com/user-attachments/assets/d2411ac3-0ea9-484b-94a0-ba53e12bff7c)
![Screenshot (9)](https://github.com/user-attachments/assets/855145e8-4db3-403f-ab88-e398841e980b)

- **Property Listings**: Browse property listings, view details, and save properties to user profiles.
  ![Screenshot (2)](https://github.com/user-attachments/assets/d64513c6-801a-4e7c-ab8a-1170c9a91f8a)

- **Save Posts**: Users can save properties to their favorites, and the state is preserved even after a page refresh.
  ![Screenshot (3)](https://github.com/user-attachments/assets/e71e1c46-17b2-4589-8cfe-56856674dbcc)

- **Real-time Chat**: Chat with other users about properties using Socket.io for real-time messaging.
  <img width="299" alt="image" src="https://github.com/user-attachments/assets/2a111974-1247-4d5f-98f0-ba3132a19c0d">

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
   git clone https://github.com/arzav18/PropertyPal.git
   cd PropertyPal
   ```

2. **Install dependencies for both backend and frontend**:

   - Backend:

     ```bash
     cd api
     npm install
     ```

   - Frontend:
     ```bash
     cd client
     npm install
     ```

3. **Set up environment variables**:

   Create a `.env` file in the `api` folder with the following variables:

   ```bash
   DATABASE_URL=your_mongo_db_url
   JWT_SECRET=your_jwt_secret_key
   CLIENT_URL=http://localhost:5173
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
   cd api
   nodemon app.js
   ```

6. **Run the frontend**:

   ```bash
   cd client
   npm run dev
   ```

7. **Run the socket (for chat)**:
   ```bash
   cd socket
   nodemon app.js
   ```

---

## Usage

1. **Sign Up and Login**:

   - Navigate to the sign-up page and create a new account.
   - Log in with your credentials to browse and save properties.

2. **Save Posts**:

   - You can save posts by clicking the **Save the Place** button. Saved posts will persist even after refreshing the page.

3. **Chat in Real-Time**:

   - Users can chat with each other using the real-time messaging feature powered by **Socket.io**.

4. **Browse Properties**:
   - Explore different properties and view detailed information, including images, prices, contact information and locations.

---

## API Endpoints

### Authentication

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Log in an existing user
- `POST /auth/logout`: Log out the user

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

- `/`: Home page
- `/login`: User login page
- `/register`: User registration page
- `/list`: Property detail page

## License

This project is licensed under the MIT License.

---
