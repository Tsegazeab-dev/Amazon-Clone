const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(`${process.env.SECRET_KEY}`);

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (req, res)=> res.status(200).send('hello World'));
app.post('/payments/create', async (req, res)=>{
    const total = req.query.total;
    console.log('Payment Request Recieved for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    console.log(paymentIntent);
    //201 status Ok- created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);