# MERN realtime Chat Application with Authentication

![App](https://img.shields.io/badge/version-0.1-blue)
![Node JS](https://img.shields.io/badge/NodeJS-v16.15.1-blue)
![npm](https://img.shields.io/badge/npm-v8.13.2-blue)
![Express JS](https://img.shields.io/badge/Express-v4.18.2-blue)


### Introduction

The MERN stack which consists of Mongo DB, Express.js, Node.js, and React.js is a popular stack for building full-stack web-based applications because of its simplicity and ease of use. In recent years, with the explosive popularity and the growing maturity of the JavaScript ecosystem, the MERN stack has been the goto stack for a large number of web applications. This stack is also highly popular among newcomers to the JS field because of how easy it is to get started with this stack

This repo consists of a Chat Application built using MERN stack and user authentication using JWT token and cookies. The chat system uses the [SocketIO](https://socket.io/) for real-time communication between the client.

### Features

* User Login and Register
* Authentication using JWT Tokens
* React State management using REDUX
* Realtime Chat

### How to use it

You can have this application up and running with just a few steps because it has both the frontend and the backend in a single repository. Follow the steps below to do so.
1. Clone this repo
2. Once you have the repo, you need to install its dependencies. So using a terminal, move into the root directory of the project and execute `npm install` to install the dependencies of the frontend. Now go inside the **backend** directory and execute `npm install` to install the dependencies of the backend API server. Go inside the **socket** directory and execute `npm install` to install the dependencies of the socket server.
3. To run the frontend excute `npm start` in your root directory.
4. To run the socket server, `cd socket` to the socket directory and execute `npm run socket`
5. **NOTE** Before running the backend server you need to rename the `.env(sample)` file to `.env` and change the necessary environment variable.
6. Run the backend server, `cd backend` to the backend directory and execute `npm run server`
