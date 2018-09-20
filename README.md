# EC463 Senior Design: Software Mini Project 
# Device Monitor
## Authors: Rachel Manzelli (Frontend: Authentication, Web App), Nehemiah Dureus (Backend: Database, Number Generator)

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

## Testing & Verification
To test our application, we had multiple peers sign up for our service. We then verified that data was generated for multiple sensors in MongoDB, and that this data matched the dashboard of the application and the JavaScript output. We also verified that users were able to log in multiple times, and that when they did so, the same data was associated with each user. Additionally, multiple users were logged in at the same time to make sure the web application was able to handle more than one user simultaneously.

## References & Logistics
* Many references, tutorials, and sources were used in the making of this application. For a complete list, please contact the authors.
* *Please note that there are private keys for AWS, Google Cloud, and MongoDB that are not posted in this repository.* A given viewer will not be able to download the code and run it locally without these keys. The project is still functional and running on https://mini-project.com. (The keys were securely removed from the repository, and then the repository was made public. The EC2 instance contains the version of the codebase with the private keys.) 
