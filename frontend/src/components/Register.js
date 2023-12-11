//import "../style/Register.css"
import "../style/Chat.css";

const Register = () => {
    return (
        <div className="registerBox">
            <h1> Register </h1>
            <div className="userInfoBox">
                <label htmlFor="email">Email</label>
                <br/>
                <input
					type="text"
					id="Email"
				/>
            </div>
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
            <div className="userRegisterBtn">
            <button className="registerBtn" type="submit">
              Send
            </button>
            </div>
        </div>
    );
};

export default Register;