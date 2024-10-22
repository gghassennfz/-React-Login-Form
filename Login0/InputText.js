import React, {useState, useEffect, useRef} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

export function InputText({
	id,
	label,
	type,
	hintText,
	errorText,
	value,
	onChange,
	isRequired,
	isValid
}) {
	const hintTextId = hintText ? `${label}-hintText` : '';
	const errorTextId = (errorText && !isValid) ? `${label}-errorText` : '';
		
	const inputRef = useRef();
	const labelRef = useRef();
	const errorTextRef = useRef();
	
	useEffect(() => {
		const input = inputRef.current;
		const label = labelRef.current;
		const errorText = errorTextRef.current;
		
		if (isValid === true) {
			input.classList.remove('is-invalid');
			label.classList.remove('text--red');
			error.classList.add('hidden');
		} else if (isValid === false) {
			input.classList.add('is-invalid');
			label.classList.add('text--red');
			errorText.classList.remove('hidden');
		}
	}, [isValid, value]);
		
	return (
		<>	
			<label htmlFor={id} ref={labelRef}>{label}</label>
			<input
				id={id}
				ref={inputRef}
				type={type}
				value={value}
				onChange={(e) => {
					onChange(e.target.value);
				}}
				valid={isValid}
				aria-describedby={`${hintTextId} ${errorTextId}`}
			/>
			{hintText && (
				<div id={hintTextId} className="hint-text">{hintText}</div>
			)}
			
			{errorText && (
				<div id={errorTextId} ref={errorTextRef} className="text--red error-text hidden">{errorText}</div>
			)}
		</>
	);
}