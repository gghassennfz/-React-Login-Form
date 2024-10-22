import React, {useState, useEffect, useRef} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

export function InputText({
	placeholder,
	type
}) {		
	return (
		<input
			placeholder={placeholder}
			type={type}
		/>
	);
}