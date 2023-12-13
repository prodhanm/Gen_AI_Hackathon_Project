import "../style/Chat.css";
import Form from "react-bootstrap/Form";
import { useState } from 'react'
import axios from 'axios'

const Chat = () => {

  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState('');

  const interact = async () => axios({
    method: 'POST',
    url: 'http://localhost:5000/ask-openai',
    data: {
        user_input: 'Hello',
        base_path: 'C:\\Users\\joshu_yu92ohr\\Desktop\\HACKT\\Gen_AI_Hackathon_Project\\backend',
    },
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : ''
    },
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });

  return (
    <div className="main">
      <h1 style={{marginLeft:'3vw'}}> Say Hi to Ferestha </h1>
      <div className="chatInterface">
        <div className="convDisplay"></div>
        <div className="input">
          <Form>
            <Form.Group>
              <Form.Control as="textarea" rows={5} placeholder="" onChange={(e) => setTextInput(e.target.value)}
                style={{width:'90vw',height:'20vh',fontSize:'18px',marginTop:'40vh',marginLeft:'5vw',backgroundColor:'darkgray',borderColor:'black',borderRadius:'10px'}}></Form.Control>       
              <br></br>
              <button type="button" onClick={interact} style={{marginLeft:'5vw',marginTop:'3vh',fontSize:'18px'}}>Submit</button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
