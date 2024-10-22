import React from 'https://cdn.skypack.dev/react';
import { InputText } from './InputText.js';

const App = () => {

	return (
		<main>
			<form>
				<fieldset>
					<InputText
						placeholder="Username"
						type="text"
					/>
					<InputText
						placeholder="Password"
						type= "password"
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