# Social Network API

## Description
This command-line application API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

User Story & Acceptance Criteria follow the AS AN / I WANT / SO THAT format.


## Table of Contents 
  
   * [User Story](#User-Story) 
  
   * [Acceptance Criteria](#Acceptance-Criteria)
  
   * [Technologies Used](#Technologies-Used) 

   * [Installation](#Installation) 

   * [Usage](#Usage) 

   * [Demo](#Demo) 

   * [License](#license) 


## User Story

AS A social media startup

* I WANT an API for my social network that uses a NoSQL database
    SO THAT my website can handle large amounts of unstructured data.


## Acceptance Criteria

GIVEN a functional Express.js API

* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
    THEN I am able to connect to a database using Sequelize
* WHEN I enter schema and seed commands
    THEN a development database is created and is seeded with test data
* WHEN I enter the command to invoke the application
    THEN my server is started and the Sequelize models are synced to the MySQL database
* WHEN I open API GET routes in Insomnia Core for categories, products, or tags
    THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
    THEN I am able to successfully create, update, and delete data in my databas


## Technologies Used
* Javascript
* Node.js
* Express
* Insomnia
* MongoDB and
* Mongoose ODM.

## Installation
To install this project:
* Start by forking this repository and clone repository to your local machine.
* Open the project in your preffered IDE
* Look at package.json file that specifies dependencies for this project, so be sure to run "npm    install". This will install all the required packages. Also look at the above section and install all the required Tools

## Usage
* In your IDE treminal and run command "npm run start" (or "node server.js").  
* Open insomnia and type in "localhost:3001/api/_" in the address bar and check out the following routes: 

User + Friends:-
- `/api/users` to get all users or create user
- `/api/users/:userId` to get one user, update and delete user
- `/api/users/:userId/friends/:friendId` to add or delete a friend

Thought + Reactions:-
- `/api/thoughts` to get all thoughts or create thought
- `/api/thoughts/:thoughtId` to get one thought, update or delete. 
- `/api/thoughts/:thoughtId/reactions` to create reaction 
- `/api/thoughts/:thoughtId/reactions/:reactionId` to delete reaction 

## Demo

[![Watch the video](./imgs/demo.jpg)](https://drive.google.com/file/d/1MuLlWazhDAwvh-jc_8EOcJwFuNNzAOLJ/view)


Demo Video Link: https://drive.google.com/file/d/1MuLlWazhDAwvh-jc_8EOcJwFuNNzAOLJ/view


## License
* Please refer to the LICENSE in the repo. <a href="https://github.com/SajithAravindan/E-commerce_APP/blob/main/LICENSE">(MIT License)</a>


---

Copyright (c) 2023 SajithAravindan.

