import "../style/Chat.css";
import Form from "react-bootstrap/Form";
import { useState } from 'react'
import axios from 'axios'

const Chat = () => {

  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState('');

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
  });

  const interact = async () => {
    //sends textInput to the AI and receives the response, then prints the response and clears the text box.
    //the message history should appear above the active text box like a traditional texting app
    //console.log(textInput);   
    try {
      setResponse(await axiosInstance.post('ask-openai', textInput));
      return response.data;
    } catch (error) {
      console.error('L:', error);
    }
  }

  return (
    <div className="main">
      <h1> Say Hi to Ferestha </h1>
      <div className="chatInterface">
        <div className="input">
          <Form>
            <Form.Group>
              <Form.Control as="textarea" rows={5} placeholder="" onChange={(e) => setTextInput(e.target.value)}></Form.Control>       
              <br></br>
              <button type="button" onClick={interact}>Submit</button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
