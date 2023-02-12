# MERN realtime Chat Application with Authentication

### Introduction

The MERN stack which consists of Mongo DB, Express.js, Node.js, and React.js is a popular stack for building full-stack web-based applications because of its simplicity and ease of use. In recent years, with the explosive popularity and the growing maturity of the JavaScript ecosystem, the MERN stack has been the goto stack for a large number of web applications. This stack is also highly popular among newcomers to the JS field because of how easy it is to get started with this stack

This repo consists of a Chat Application built using MERN stack, user authentication using JWT token and cookies. I build this app when I was learning the stack and also wanted to explore the Real-Time communication using [SocketIO](https://socket.io/). But due to my busy schedule with other stack i was unable to implement the socketIO. If time permits I will surely try to implement it. I have left it here for anyone new to the stack so that they can use this repo as a guide.

### Features

* User Login and Register
* Authentication using JWT Tokens
* React State management using REDUX
* Chat with other users

### How to use it

You can have this application up and running with just a few steps because it has both the frontend and the backend in a single repository. Follow the steps below to do so.
1. Clone this repo
2. Once you have the repo, you need to install its dependencies. So using a terminal, move into the root directory of the project and execute `npm install` to install the dependencies of the frontend. Now go inside the **backend** directory and execute `npm install` to install the dependencies of the backend API server.
3. To run the frontend excute `npm start` in your root directory.
4. **NOTE** Before running the backend server you need to rename the `.env(sample)` file to `.env` and change the necessary environment variable.
5. Run the backend server, `cd backend` to the backend directory and execute `npm run server`