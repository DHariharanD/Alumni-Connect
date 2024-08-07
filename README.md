# Alumni Management System

## Overview

The Alumni Management System is a web application built to enhance interactions and management within alumni networks. It offers a user-friendly interface for alumni registration, login, profile management, event organization, and participation. Leveraging modern web technologies, this system ensures scalability, efficient data management, and robust security measures. Designed with ReactJS and Tailwind CSS for frontend development, and powered by Express, Node.js, and MongoDB for backend operations, this project aims to optimize alumni engagement and operational efficiency within educational institutions.

## Objectives

- **User-Friendly Interface and Design:** An intuitive and visually appealing interface for alumni interactions.
- **User Registration and Login:** Seamless registration and login process with a focus on security and user experience.
- **Alumni Profile Management:** Enables alumni to manage and update their profiles accurately.
- **Security and Password Management:** Robust security measures for protecting alumni data.
- **Event Creation and Management:** Facilitates alumni in creating and managing events with detailed features.
- **Alumni Event Participation and Details:** Easy access to event information and post-event details.
- **Admin Access and Control:** Administrators can manage user accounts and oversee system configurations.
- **Scalability and Adaptability:** The system is designed to scale with the growing number of alumni and evolving needs.

## About Project

Built using ReactJS and styled with Tailwind CSS, the Alumni Management System offers a seamless user experience with intuitive navigation and visually appealing design elements. HTML, CSS, and JavaScript enhance frontend functionalities, while Express and Node.js manage server-side operations. MongoDB serves as the database, providing robust storage for user profiles, alumni data, and event details.

## Key Features

- **User Registration and Authentication:** Secure registration and authentication process.
- **Event Participation:** Browse and participate in upcoming events.
  
## Future Enhancements

- Advanced search and filtering options.
- Dedicated sections for networking and mentorship programs.
- Discussion forums and group features.
- Section dedicated to alumni achievements and success stories.

## Commands to Clone the Repository
In order to clone the project, create a folder in a intended drive and open the **Command Prompt** or the **Git Bash** in that folder and run the following command 
######
    git clone https://github.com/DHariharanD/Alumni-Connect.git
Then change the Directory into the Project folder 
######
    cd Alumni-Connect
 
## Commands to Connect the Database

Before running the project, ensure that both MongoDB-Atlas and MongoDB-Shell is installed and running on your machine. Then follow the following procedure to ensure the connection between the MongoDB Shell and MongoDB Atlas. (Note that this procedure is for System with Windows Operating system)

1. Open your **MongoDB Compass** and Click on **Connect**
2. In the new window opened click on the '**+**' button and create a new Collection with the following name 
######
    Alumni_Connect
3. Click on Create button.
4. Open the **Command Prompt** as an Administrator and enter the following command(If needed):
######
    net start MongoDB
5. Then enter this command
######
    mongosh mongodb://localhost:27017/Alumni_Connect

## Commands to Run the Project

To get the project up and running, follow these steps. Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

### Step 1: Install Dependencies

Navigate to the root folder of the cloned repository (Already Done) and install the necessary dependencies by running:
######
    npm install

### Step 2: Start the Backend Server
Open a new terminal window, navigate to the `backend` folder:
######
    cd backend
and start the backend server:
######
    npm run

### Step 3: Start the Frontend Development Server
Open another terminal window, navigate to the `frontend` folder:
######
    cd frontend
 and start the frontend development server:
######
    npm run dev

### Step 4: Access the Application
Once both servers are running, open your browser and navigate to:
######
    http://localhost:5713
This will load the Alumni Management System web application.

## Development Environment Setup
To ensure smooth development, it's recommended to use a code editor like Visual Studio Code, which supports JavaScript, Node.js, and React.js development.

## Contribution Guidelines
We welcome contributions to improve this project. Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## Contact
For any questions or support, please reach out to the project maintainer:

- **Name:** D Hariharan
- **Email:** harisharan200425@gmail.com

Thank you for your interest in the Alumni Management System!.
