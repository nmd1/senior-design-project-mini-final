# EC463 Senior Design: Software Mini Project 
# Device Monitor
## Authors: Rachel Manzelli, Nehemiah Dureus

## Description
Device Monitor is a web application that displays temperature and humidity information of a given device for any number of users.

## Web Application Implementation & User Interface
Users are able to log in or sign up at https://mini-project.com. The site is hosted on an Amazon Web Services EC2 Ubuntu instance with an Elastic IP address, connected to a secure public domain via Route53 and CertBot. The site is hosted continuously via PM2, a production process manager for Node.js. The pages were designed using Bootstrap, an open-source toolkit for HTML, CSS, and Javascript development.

## Authentication
The user authenticates with the Google+ API (via Google Cloud Platform), which securely authenticates and stores their login information along with simulated sensor data in MongoDB.

## Database Schema
The database of user information is updated and stored in a cluster in MongoDB remotely with the following schema. Note that there are a variable number of users and sensors per user. `senior-des` is the name of the database collection within the cluster in MongoDB, and `users` is the name of the database within that collection.

![Picture of Schema](https://github.com/manzelli/senior-design-mini/blob/master/.resources/schema.png)

As an example, one registered user in the MongoDB database looks like this: 

![MongoDB](https://github.com/manzelli/senior-design-mini/blob/master/.resources/mongo.PNG)

## Infrastructure of Codebase
The infrastructure of the application as represented in this repository is as follows:

```bash
├── .resources (contains image of database schema)
├── app
│   ├── models
│   │   ├── user.js (contains user schema)
│   ├── routes.js (contains routes for different pages of application)
├── config
│   ├── auth.js (contains private keys for GCloud)
│   ├── database.js (contains private keys for MongoDB)
│   ├── passport.js (configuration for Passport.js, an authentication middleware for Node.js)
├── legacy (contains old code)
├── views
│   ├── profile
│   │   ├── dash.css (stylesheet for profile page)
│   │   ├── profile.ejs (HTML file for profile page after user is logged in - contains graph)
│   ├── index.ejs (HTML file for home page, with default Bootstrap stylesheet)
├── .gitmodules (for the old code)
├── README.md
├── package-lock.json (dependencies)
├── package.json (dependencies)
└── server.js (configures and runs the entire application)
```

## Integration Between Platforms
Each of the platforms we used in our implementation (AWS, GCP, Javascript/HTML/CSS...) must interact and communicate in order for our application to be realized. A visualization of this workflow is provided below. 

![Workflow](https://github.com/manzelli/senior-design-mini/blob/master/.resources/workflow.PNG)
