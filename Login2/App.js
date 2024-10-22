import React from 'https://cdn.skypack.dev/react';
import { InputText } from './InputText.js';

const App = () => {

	return (
		<main>
			<form>
				<fieldset>
					<legend>Login</legend>
					<InputText
						placeholder="username"
						type="text"
						label="Username"
					/>
					<InputText
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