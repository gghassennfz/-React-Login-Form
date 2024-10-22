import React, {useState, useEffect, useRef} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

export function InputText({
	id,
	placeholder,
	type,
	label
}) {		
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
			/>
		</>
	);
}