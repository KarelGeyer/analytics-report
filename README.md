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

Next create your `.env` file and set port to http://localhost:3009.
You can set it to other ports as well but you will need to update the preset URLs in `src/assets/static_data/StaticData.js`

## Frontend

### Technologies

- React
- React Bootstrap
- Styled component
- React router dom
- ChartJs
- Axios

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

ENJOY!!
