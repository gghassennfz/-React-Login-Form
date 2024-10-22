import React, {useState, useEffect, useRef} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

export function InputText({
	id,
	label,
	type,
	hintText
}) {
		
	return (
		<>	
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
			/>
			{hintText && (
				<div className="hint-text">{hintText}</div>
			)}
		</>
	);
}