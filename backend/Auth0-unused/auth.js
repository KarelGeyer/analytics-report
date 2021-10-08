// Imports
// import express from "express";
// import mongoose from 'mongoose';

// requires
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// var guard = require('express-jwt-permissions')();

//---- JWT

/* var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-cadzz-n9.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://www.analytics-api.com',
  issuer: 'https://dev-cadzz-n9.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/permisions', guard.check(['read:permisions']), function (req, res) {
    res.send({
        req
    });
});

// AUTH
const tokenEndpoint = 'https://dev-cadzz-n9.us.auth0.com/oauth/token'
const oAuth = (req, res, next) => {
    var code = req.query.code;

    if(!code) {
        res.status(401).send('Missing authorization code');
    }

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', 'r6SbPItwLsCXANdQpU4doxowdMmtQ6Ip');
    params.append('client_secret', '4LufsmC2ZOvQQkrsm-NE3hpMSCHEs6ZoATaAPaLwRd5OBw-x-aeMTYZwL-m2hyMm');
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:3009/charts');

    axios.post(tokenEndpoint, params)
    .then(response => {
        req.oauth = response.data;
        next();
    })
    .catch(err => {
        console.log(err)
        res.status(403).json(err)
    })
}

app.use(oAuth)
app.get('/authorize', async (req, res) => {
    const enpoint = 'http://localhost:3027/permisions'

    try {
        const {access_token} = req.oauth;
        const response = await axios({
            method: 'get',
            url: enpoint,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        res.json(req.oauth);
    } catch (err) {
        console.log(err);
        if (err.response.status === 401){
            res.status(401).json(res.status);
        } else if (err.response.status === 403){
            res.status(403).json(res.status);
        } else {
            res.status(500).json(res.status);
        } 
    }
})
*/
