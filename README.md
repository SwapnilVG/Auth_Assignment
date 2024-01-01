# Full-Stack User Management System

## Description
This is a simple Instagram clone with user registration, login, and user profile functionalities. The application is built using HTML, CSS, JavaScript, Express.js, and MongoDB.


## Features
- User Registration
- User Login
- Secure Password Storage (Hashing and Salting)
- JWT Token Authentication
- User Profile Page

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Express.js
- Database: MongoDB
- Authentication: JWT


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SwapnilVG/Auth_Assignment.git

2. Install dependencies:
   ```bash
   cd Auth_Assignment/server
   npm install

3. Set up MongoDB:
   - Create a MongoDB database and update the connection string.

4. Start the application:
   ```bash
   npm start

The application will be running on http://localhost:8081.



## Usage
1. Open your browser and go to http://localhost:8081.
2. Navigate to the signup page and create a new account.
3. Once registered, log in with your credentials.
4. Explore the user profile page.


## API Endpoints
- #### POST/signup
  Create a new user account. Requires { name, username, bio, email, password }.

- ####  POST/login
  Log in with an existing account. Requires { username, password }.

- ####  GET/
  Retrieve user data after successful authentication.


## Security
- Passwords are hashed and salted before storing in the database.
- JWT tokens are used for authentication.
- Sensitive routes are protected, and only authenticated users can access them.




     
   

   
