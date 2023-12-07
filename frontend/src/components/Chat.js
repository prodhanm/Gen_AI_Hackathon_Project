import "../style/Chat.css";
import Form from "react-bootstrap/Form";
import { useState } from 'react'

const Chat = () => {

  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState('');

  const interact = () => {
    //sends textInput to the AI and receives the response, then prints the response and clears the text box.
    console.log(textInput);
  };

  return (
    <div className="main">
      <h1 style={{marginLeft:'3vw',marginTop:'-15vh'}}> Say Hi to *Bot Name* </h1>
      <div className="chatInterface">
        <div className="convDisplay"></div>
        <div className="input">
          <Form>
            <Form.Group>
              <Form.Control as="textarea" rows={5} placeholder="" onChange={(e) => setTextInput(e.target.value)} style={{width:'90vw',height:'20vh',fontSize:'18px',marginTop:'3vh',marginLeft:'5vw',backgroundColor:'white'}}></Form.Control>
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
