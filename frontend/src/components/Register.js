import React, { useState } from "react";
import "../style/Login.css";

const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
    
	const handleRegister = async () => {
		const requestObject = {
            email: email,
			username: username,
			password: password,
		};
/*
		try {
			const response = await fetch("http://localhost:8080/authenticate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestObject),
			});

			if (response.ok) {
				const data = await response.json();
				const { jwt } = data;
				localStorage.setItem("jwtToken", jwt);
				localStorage.setItem("username", username);
				navigate("/main");
			} else {
				setSuccessMessage("");
				setErrorMessage("Login failed. Please check your information.");
			}
		} catch (error) {
			console.log(error);
			setSuccessMessage("");
			setErrorMessage("An error occurred. Please try again later.");
		}
        */
	};

    return (
        <div className="login-container">

        <h1 className="center">Register a new Account</h1>
            <div className="login-text-container">		

                <div className="loginBox">
                    <label htmlFor="username">Email</label>
                    <br />
                    <input
                        type="text"
                        id="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>		

                <div className="loginBox">
                    <label htmlFor="username">Username</label>
                    <br />
                    <input
                        type="text"
                        id="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="loginBox">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        type="password"
                        id="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br/>

                <div className="centerBtn">
                    <button onClick={handleRegister}>
                    Register
                    </button>
                    <br/>
                    <button>Back</button>
                </div>
                <br/>

                {successMessage && (
                    <p style={{ color: "green" }}>{successMessage}</p>
                )}
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Register;