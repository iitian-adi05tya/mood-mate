# Mood Mate

**Mood Mate** is a web-based application designed to assist individuals in managing their mental well-being. It provides real-time chat features, mood tracking, and an AI-powered chatbot to offer a supportive environment. The platform aims to help users reduce loneliness, interact with others or the AI chatbot, and improve their mental health.

## Table of Contents

- [Introduction](#introduction)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [Functionalities](#functionalities)

## Introduction

Mood Mate is a platform designed to help users with their mental health by offering a safe and interactive environment for chatting with friends or an AI chatbot. The AI chatbot is integrated with information sources like Google and Wikipedia to ensure accurate and safe responses.

### Key Uses:
- Stress reduction through interaction with the AI chatbot or friends.
- Helps alleviate loneliness.
- Acts as an "imaginary friend" when needed.
- Provides children with a safe platform to get homework help.
- The chatbot is designed not to disclose sensitive information.
- A potential tool to help combat depression.

## Design

### Architectural Design

Mood Mate's architecture leverages a **Node.js backend** and a **Next.js frontend** to manage user interactions, data storage, and API communication. The backend efficiently handles requests from the client and integrates with various APIs to provide real-time responses.

- **Backend**: Node.js handles communication with APIs and manages data flow.
- **Frontend**: Next.js for server-side rendering, fast load times, and user-friendly interface.
- **Database**: MongoDB is used for storing user data and messages, providing a scalable and flexible solution.

### System Overview:

- **Client**: The browser-based front-end built with Next.js.
- **API**: Handles communication between the client and backend.
- **Database**: MongoDB manages user messages and session data.

## Technologies Used

- **Next.js**: Provides server-side rendering (SSR) and static site generation (SSG) for fast, efficient page loading. Ideal for handling real-time chat and mood-tracking features.
- **Node.js**: Used for building the backend, ensuring speed, efficiency, and scalability.
- **MongoDB**: A NoSQL database chosen for its flexible schema, scalability, and efficient handling of diverse data structures.
- **TypeScript**: Ensures better code quality with static typing, improving maintainability and catching errors early in the development process.
- **Tailwind CSS**: A utility-first CSS framework used for styling, providing fast and flexible design implementation.
- **Prisma**: A type-safe ORM that simplifies database management, making it easier to interact with MongoDB.
- **NextAuth**: Manages user authentication and authorization seamlessly with support for various authentication providers.
- **Pusher**: Enables real-time communication, allowing live chat functionality and instant message updates.
- **Chatbase**: Enhances chatbot performance by providing analytics and insights to improve responses.

## Functionalities

1. **User Registration and Authentication**:  
   - NextAuth handles secure user registration and sign-ins.
   - Real-time updates using Pusher ensure quick reflection of user actions.

2. **Real-time Messaging**:  
   - Pusher delivers real-time message updates, enabling smooth and interactive communication between users.

3. **Group Chat**:  
   - Pusher supports group chat functionality, ensuring real-time message delivery to all participants in a chat.

4. **AI-Powered Chatbot**:  
   - Chatbase powers the AI chatbot, providing advanced analytics to improve chatbot interactions and user satisfaction.

The System Design Document is as follows:
https://drive.google.com/file/d/1o_pwZjK4CH5lqE8IObYPTwhS51ZQ9jMn/view?usp=sharing
