import "../style/Chat.css";

const Chat = () => {
  return (
    <div className="main">
      <h1> Say Hi to *Bot Name* </h1>
      <div className="chatInterface">
        <div className="convDisplay"></div>
        <div className="input">
          <form>
            <input className="UserSubmit" type="text" required />
            <button className="submitBtn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
