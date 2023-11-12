# Sarhni Clone - MEAN Full-Stack Project

## Project Description

Sarhni Clone is a full-stack web application that allows users to receive anonymous messages from others without knowing the sender's identity. Users can create an account using their email, verify their email through a confirmation link, and then sign in to read and manage the received messages. Additionally, users can generate a sharable link to receive messages from friends without revealing their identity.
- Demo video https://drive.google.com/file/d/1sNGSPlxLdoxUD326VUggeZnJoD5DMrPs/view?usp=sharing

### Features

- User registration and authentication via email confirmation, user can't sign in without confirmation.
- Send and receive anonymous messages.
- Delete received messages.
- Generate sharable links for friends to send anonymous messages.

## Technologies Used

- **Frontend**:
  - Angular
  - Bootstrap
  - Fontawesome
  - Angular forms
  - Angular cdk
  - Angular Router
  - HttpClient for API requests

- **Backend**:
  - Node.js with Express.js
  - MongoDB for database storage
  - Mongoose for database modeling
  - Bcrypt for hashing password
  - Jwt to make token
  - Joi for validation
  - Express global error handling
  - Cors
  - Nodemailer for sending confirmation emails

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NadaAly56/Sarhni_Simulation_MEAN.git
   cd Sarhni_Simulation_MEAN

2. Install the frontend dependencies:
    ```bash
   cd frontend
   npm install

4. Install the backend dependencies:
    ```bash
    cd ../backend
    npm install

5. Set up Environment Variables:
  
      Create a .env file in the backend directory and set the following environment variables:
      ```bash
      - PASS=your_password
      - EMAIL=your_email
      - KEY=your_secret_key
      - ROUND=number_of_rounds_for_password_hashing
      - PORT=your_server_port
      - DBCONNECTION=your_mongodb_connection_string

6. Start the Frontend and Backend:
  In the frontend directory:
      ```bash
      npm start
    In the backend directory:
    npm start
    or nodemon

## Usage

1. Register for an account using your email address.
2. Verify your email address by clicking the confirmation link sent to your email.
3. Log in to your account.
4. Share the generated link with friends to receive anonymous messages.
5. View and manage received messages in your account.

## Contributing
   If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Commit your changes and create a pull request.

## Contact
   For any inquiries or support, please contact Nada Aly at nada.aly5613@gmail.com.
