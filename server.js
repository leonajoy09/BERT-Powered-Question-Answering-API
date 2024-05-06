// server.js
const express = require('express');
const axios = require('axios');
const { loadBertModel } = require('./bert');

const app = express();
const PORT = 3000;

// Define an async function to start the server after loading the BERT model
async function startServer() {
    try {
        // Load the BERT model
        const bertModel = await loadBertModel();

        // Define the route handling logic
        app.post('/ask', async (req, res) => {
            const { question } = req.body;
            try {
                // Send question to BERT model server
                const response = await axios.post('http://localhost:3000/ask', { question });
                res.json({ answer: response.data });
            } catch (error) {
                console.error('Error asking question:', error);
                res.status(500).json({ error: 'Error processing question' });
            }
        });

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error loading BERT model:', error);
    }
}

// Call the async function to start the server
startServer();
