import React from 'https://cdn.skypack.dev/react';
import { InputText } from './InputText.js';

const App = () => {

	return (
		<main>
			<form>
				<fieldset>
					<legend>Login</legend>
					<InputText
						id="id-username"
						placeholder="username"
						type="text"
						label="Username"
					/>
					<InputText
						id="id-password"
						placeholder="password"
						type= "password"
						label="Password"
					/>
					<button>
						Login
					</button>
				</fieldset>
			</form>
		</main>
	)
}

export default App;