This project implements a Question Answering API using BERT (Bidirectional Encoder Representations from Transformers), a state-of-the-art NLP model. The API is built with Flask (Python) for the backend and Express.js (Node.js) as a server interface. It allows users to submit a question via an API request and receive an AI-generated response.


Key Features:
✅ BERT-Based NLP Processing – Utilizes a fine-tuned BERT model (bert-large-uncased-whole-word-masking-finetuned-squad) to process natural language questions and generate answers.
✅ Flask API for BERT Inference – The Python-based API (bert.py) loads the BERT model and handles inference using PyTorch and the Hugging Face Transformers library.
✅ Express.js as Middleware Server – The Node.js server (server.js) acts as a middleware between the client and the BERT model, ensuring structured communication and error handling.
✅ JSON-Based REST API – Users can send questions via HTTP POST requests, and the API returns structured JSON responses with the predicted answer.


How It Works:
The Flask API (bert.py) loads the BERT model and listens for incoming POST requests at /ask.
When a question is received, the API tokenizes the input using BERT’s tokenizer and performs inference to identify the most relevant answer span.
The predicted answer is extracted and returned as a JSON response.
The Express.js server (server.js) acts as a wrapper, handling client requests and forwarding them to the Python-based BERT API for processing


Tech Stack:
Backend (Inference & Processing): Python, Flask, PyTorch, Hugging Face Transformers
Middleware Server: Node.js, Express.js, Axios
