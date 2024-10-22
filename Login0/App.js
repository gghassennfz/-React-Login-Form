import React, {useState} from 'https://cdn.skypack.dev/react';
import { InputText } from './InputText.js';

const App = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [isValidUsername, setIsValidUsername] = useState('');
	const [isValidPassword, setIsValidPassword] = useState('');
	
	const onSubmit = () => {
		setIsValidUsername(!!username);
		setIsValidPassword(!!password);
	};

	return (
		<main>
			<form>
				<fieldset>
					<legend>Login</legend>
					<InputText 
						id="username"
						label="Username"
						type="text"
						value={username}
						onChange={setUsername}
						hintText="Your username is likely your email address."
						errorText="Please enter in your Username"
						isValid={isValidUsername}
					/>
					<InputText
						id="password"
						label="Password"
						type= "password"
						value={password}
						onChange={setPassword}
						hintText="Passwords are case sensitive."
						errorText="Please enter in your password"
						isValid={isValidPassword}
					/>
					<button 
						type="button" 
						onClick={onSubmit}
					>
						Login
					</button>
				</fieldset>
			</form>
		</main>
	)
}

export default App;