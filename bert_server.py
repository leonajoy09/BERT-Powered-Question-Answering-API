import torch
from transformers import BertForQuestionAnswering, BertTokenizer
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load pre-trained BERT model and tokenizer
model_name = 'bert-large-uncased-whole-word-masking-finetuned-squad'
model = BertForQuestionAnswering.from_pretrained(model_name)
tokenizer = BertTokenizer.from_pretrained(model_name)

# Define endpoint to receive questions and send responses
@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data['question']

    # Tokenize input question
    inputs = tokenizer(question, return_tensors='pt')

    # Perform inference using BERT model
    outputs = model(**inputs)

    # Get start and end scores for each token
    start_scores = outputs.start_logits
    end_scores = outputs.end_logits

    # Find the tokens with the highest start and end scores
    answer_start = torch.argmax(start_scores)
    answer_end = torch.argmax(end_scores)

    # Convert token IDs to tokens
    answer = tokenizer.convert_tokens_to_string(tokenizer.convert_ids_to_tokens(inputs['input_ids'][0][answer_start:answer_end+1]))

    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)
