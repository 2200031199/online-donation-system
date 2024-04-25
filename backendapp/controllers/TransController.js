const { response } = require('express');
const Trans = require('../models/Transaction');

const inserttrans = async (request, response) => {
    try {
        const { firstName, lastName, email, donatedAmount } = request.body;
        const transaction = new Transaction({
            firstName,
            lastName,
            email,
            donatedAmount
        });
        await transaction.save();
        response.send('Donation recorded successfully!');
    } catch (error) {
        console.error('Error in recording donation:', error);
        response.status(500).send('Error recording donation');
    }
};

const viewtrans = async (request, response) => {
    try {
        const transactions = await Trans.find();
        if (transactions.length === 0) {
            response.send("Data not found");
        } else {
            response.json(transactions);
        }
    } catch (e) {
        response.status(500).send(e.message);
    }
};

const viewtransbyemail = async (request, response) => {
    try {
        const email = request.params.email; // Assuming email is passed as a parameter
        const transactions = await Trans.find({ email: email });
        if (transactions.length === 0) {
            response.send("No transactions found for this email.");
        } else {
            response.json(transactions);
        }
    } catch (e) {
        response.status(500).send(e.message);
    }
};

module.exports = {
    inserttrans,
    viewtrans,
    viewtransbyemail
};
