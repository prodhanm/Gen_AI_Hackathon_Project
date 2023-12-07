//import "../style/Login.css"
import "../style/Chat.css";

const Login = () => {
    return (
        <div className="loginBox">
            <h1> Login </h1>
            <div className="userInfoBox">
                <label htmlFor="username">Username</label>
                <br/>
                <input
					type="text"
					id="Username"
				/>
            </div>
            <div className="userInfoBox">
                <label htmlFor="username">Password</label>
                <br/>
                <input
					type="text"
					id="Password"
				/>
            </div>
            <div className="userloginBtn">
            <button className="loginBtn" type="submit">
              Send
            </button>
            </div>
        </div>
    );
};

export default Login;