import React, {useState} from 'https://cdn.skypack.dev/react';
import { InputText } from './InputText.js';

const App = () => {

	return (
		<main>
			<form>
				<fieldset>
					<legend>Login</legend>
					<InputText 
						id="username"
						label="Username"
						type="text"
						hintText="Your username is likely your email address."
					/>
					<InputText
						id="password"
						label="Password"
						type= "password"
						hintText="Passwords are case sensitive."
					/>
					<button 
						type="button" 
					>
						Login
					</button>
				</fieldset>
			</form>
		</main>
	)
}

export default App;