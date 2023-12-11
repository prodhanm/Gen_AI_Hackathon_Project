from flask import Blueprint, Flask, render_template, request
from flask_login import login_required
import pandas as pd
import openai

open_API_routes = Blueprint('auth', __name__)

openai.api_key = 'your_openai_api_key'

@open_API_routes.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return 'No file part'

    file = request.files['file']

    if file.filename == '':
        return 'No selected file'

    if file:
        # Process CSV file using Pandas
        df = pd.read_csv(file)

        question = "What is the structure of the database?"

        prompt = f"Database Information:\n{df.head()}\n\nQuestion: {question}\nAnswer:"

        # Use OpenAI GPT to generate an answer
        response = openai.Completion.create(
            engine="davinci",
            prompt=prompt,
            max_tokens=100
        )

        answer = response['choices'][0]['text']

        return f'Answer: {answer}'

