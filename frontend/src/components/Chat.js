import "../style/Chat.css";
import Form from "react-bootstrap/Form";
import { useState } from 'react';
import axios from 'axios';
import useCookie from './hooks/useCookie';

const Chat = () => {
  const [textInput, setTextInput] = useState('');
  const [chat, setChat] = useState([]);
  const [basePath, setBasePath] = useState('C:\\Users\\joshu_yu92ohr\\Desktop\\HACKT\\Gen_AI_Hackathon_Project\\backend');

  const { getCookie } = useCookie(); // Use the useCookie hook
  const csrfToken = getCookie('localhost'); // Replace 'csrf_token' with the actual name of your CSRF cookie

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
      'Content-Type': 'application/json',
      //withCredentials : true,
      'X-CSRFToken': csrfToken // Add CSRF token to the request headers
    }
  });

  const interact = async () => {
    try {
        const response = await axiosInstance.post('api/ask-openai', { user_input: textInput, base_path: basePath, chat: chat });
        setChat([...chat, { text: textInput, response: response.data }]);
        setTextInput('');
        console.log(textInput)
        console.log(response.data)
    } catch (error) {
        console.error('Error:', error);
    }
  }

  return (
    <div className="main">
      <h1> Say Hi to Ferestha </h1>
      <div className="chatInterface">
      <div className="convDisplay">
        {chat.map((item, index) => (
          <div key={index}>
            <p><strong>You:</strong> {item.text}</p>
            <p><strong>AI:</strong> {item.response.response}</p>
          </div>
        ))}
      </div>
        <div className="input">
          <Form>
            <Form.Group>
              <Form.Control as="textarea" rows={5} value={textInput} placeholder="" onChange={(e) => setTextInput(e.target.value)}
                style={{width:'90vw',height:'20vh',fontSize:'18px',marginTop:'40vh',marginLeft:'5vw',backgroundColor:'darkgray',borderColor:'black',borderRadius:'10px'}}></Form.Control>       
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
