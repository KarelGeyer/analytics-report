# 💻Xzone Data Analytics Report

Welcome to Xzone Data Analytics report

### Requirements

- Node.js
- yarn
- npm

### Start the project

Clone the repository

```sh
git clone https://github.com/KarelGeyer/analytics-report.git
cd frontend
yarn
yarn start
open a new console
cd backend
npm install
npm start
```

## Frontend

### Technologies

- React
- React Bootstrap
- Styled component
- React router dom
- ChartJs
- Axios

Next create your `.env` file and set port to http://localhost:3009.
You can set it to other ports as well but you will need to update the preset URLs in `src/assets/static_data/StaticData.js`

## Backend
### Technologies

- NodeJs
- Express
- MongoDB
- JWT
- nodemon
- bcrypt
- Joi

### Database

You are going to need to use your own mongoDB database
```sh
create your .env file and add:
CONNECTION_URL = (place url for your mongoDB database)
PORT = You should run the backend on http://localhost:3027, otherwise you are going to have update preset URLs in `src/assets/static_data/StaticData.js`
TOKEN_SECRET = (add your token here for security)
```

## Plan
### Here are some ideas I would like to implement for the application:

- Add Code Formatter -> possibly prettier, eslint
- Create event page
- Create user roles -> specifically add admin roles
- Backend routes documentation
- Implement mailing system -> for user creation, for instace https://nodemailer.com/about/
- Create an admin page -> to manage users for instance

ENJOY!!
