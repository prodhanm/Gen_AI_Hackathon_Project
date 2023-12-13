from flask import Blueprint, request, jsonify
from flask_login import login_required
from flask_cors import cross_origin
import pandas as pd
import os
import openai
from dotenv import load_dotenv

load_dotenv()

open_AI_routes = Blueprint('open_AI_routes', __name__)
openai.api_key= os.environ['your_api_key']

def get_response(messages):
    # Create a chat completion with the conversation history
    #Start-time utilizing decorator
    completion = openai.chat.completions.create(
        model="gpt-3.5-turbo-1106",
        messages=messages
    )#
    #Endtime
    # Return the response text
    return completion.choices[0].message.content

def find_and_save_model_files(base_path):
    model_directories = ['model', 'models', 'entity']
    all_file_contents = []
    allowed_extensions = ('.java', '.class', '.py', '.js')

    for root, dirs, files in os.walk(base_path):
        if any(model_dir in root for model_dir in model_directories):
            for file in files:
                if file.endswith(allowed_extensions):
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as file:
                            file_contents = file.read()
                            all_file_contents.append({'file_path': file_path, 'content': file_contents})
                    except Exception as e:
                        print(f"Error reading {file_path}: {e}")

    return all_file_contents

def handle_initial_schema(base_path):
    model_files = find_and_save_model_files(base_path) #Finds the file contents
    user_input = f"""Project model and backend contents:
                {model_files}

                The above lines are the model contents, create a schema from the contents, the user will now ask questions regarding it. You will provide the schema, then you will ask "What questions do you have regarding your schema?".
                """
    messages = [{"role": "user", "content": user_input}]
    response = get_response(messages)
    return [{"role": "assistant", "content": response}]


@open_AI_routes.route('/ask-openai', methods=['POST'])
@cross_origin(origins=["http://localhost:3000"])
@login_required
def ask_openai():
    try:
        data = request.get_json()

        if 'user_input' not in data:
            return jsonify({'error': 'Missing user_input parameter'}), 400

        user_input = data['user_input']
        base_path = data.get('base_path', '')  # Retrieve base_path from the request data

        if user_input.lower() == 'initialize schema':
            if not base_path:
                return jsonify({'error': 'Missing base_path parameter'}), 400
            messages = handle_initial_schema(base_path)
        else:
            messages = [{"role": "user", "content": user_input}]

        response = get_response(messages)
        messages.append({"role": "assistant", "content": response})

        return jsonify({'response': response})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

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

