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

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Styled components](https://styled-components.com/)
- [React router dom](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md)
- [ChartJs](https://www.chartjs.org/)
- [Axios](https://axios-http.com/docs/intro)

Next create your `.env` file and set port to http://localhost:3009.
You can set it to other ports as well but you will need to update the preset URLs in `src/assets/static_data/StaticData.js`

## Backend
### Technologies

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://docs.mongodb.com/manual/)
- [JWT](https://jwt.io/)
- [Nodemon](https://nodemon.io/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
- [Joi](https://joi.dev/api/?v=17.4.2#introduction)

### Database

You are going to need to use your own mongoDB database
```sh
create your .env file and add:
CONNECTION_URL = (place url for your mongoDB database)
PORT = You should run the backend on http://localhost:3027, otherwise you are going to have update preset URLs in `src/assets/static_data/StaticData.js`
TOKEN_SECRET = (add your token here for security)
```

## Plan
### What is currently in progress:

- Improve User managment
- Unify token verification, use in all relevant scenarios
- Split code into more reusable components
- Unify responses and display them in popup on frontend

### Here are some ideas I would like to implement for the application:

- Add Code Formatter -> possibly prettier, eslint
- Improve design of the applicatiion
- Create Logout Session Timeout
- Create user roles -> specifically add admin roles
- Backend routes documentation
- Implement mailing system -> for user creation, for instace https://nodemailer.com/about/
- Create an admin page -> to manage users for instance

ENJOY!!
