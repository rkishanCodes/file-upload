
# MERN Stack Project

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application designed to facilitate file uploads. The project includes a client application built with React and a server application built with Node.js and Express.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Client Setup](#client-setup)
- [Server Setup](#server-setup)
- [Environment Variables](#environment-variables)
- [File Uploads](#file-uploads)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)

## Features

- User authentication (login and registration)
- File upload functionality
- File preview for images, videos, PDFs, and audio files
- Private route protection

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **File Uploads:** Axios

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (locally or using MongoDB Atlas)

### Client Setup

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Start the client development server:

   ```bash
   npm run dev
   ```

### Server Setup

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your environment variables (see below).

4. Start the server:

   ```bash
   npm run dev
   ```

## Environment Variables
### Server (`server/.env`)

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Cloudinary configuration
CLOUDINARY_URL=your_cloudinary_url
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

```

## File Uploads

The application allows users to upload various file types, including images, videos, PDFs, and audio files. After successful uploads, users can view their uploaded files directly from the application.

## Running the Application

1. Start the MongoDB server (if you're running it locally).
2. Start the server by running `npm run dev` in the `server` directory.
3. Start the client by running `npm run dev` in the `client` directory.
4. Open your browser and navigate to `http://localhost:5173` to access the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.


