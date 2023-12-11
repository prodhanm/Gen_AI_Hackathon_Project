from flask import Blueprint, request, jsonify
from flask_login import login_required
import pandas as pd
import os
import openai

open_AI_routes = Blueprint('auth', __name__)

# openai_client = openai(api_key= os.environ['your_api_key'])

@open_AI_routes.route('ask-openai', methods=['POST'])
@login_required
def ask_openai():
    try:
        data = request.get_json()

        if 'user_input' not in data:
            return jsonify({'error': 'Missing user_input parameter'}), 400

        user_input = data['user_input']

        # Handle initial schema
        messages = [{"role": "user", "content": user_input}]
        response = get_response(messages)

        return jsonify({'response': response})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def get_response(messages):
    completion = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    return completion.choices[0].message.content

# if __name__ == '__main__':
#     open_API_routes.run(debug=True)


# @open_API_routes.route('/upload', methods=['POST'])
# def upload():
#     if 'file' not in request.files:
#         return 'No file part'

#     file = request.files['file']

#     if file.filename == '':
#         return 'No selected file'

#     if file:
#         # Process CSV file using Pandas
#         df = pd.read_csv(file)

#         question = "What is the structure of the database?"

#         prompt = f"Database Information:\n{df.head()}\n\nQuestion: {question}\nAnswer:"

#         response = openai.Completion.create(
#             engine="davinci",
#             prompt=prompt,
#             max_tokens=100
#         )

#         answer = response['choices'][0]['text']

#         return f'Answer: {answer}'

