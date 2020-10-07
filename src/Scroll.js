import React from 'react';

export const Scroll = (props) =>
{
	return(
		<div style = {{overflowY: 'scroll',
		height: '550px',
		width: '90%',
		margin: 'auto',
		marginBottom: '100px',
		padding: '20px',
		border: 'solid transparent',
		borderWidth: '3px',
		borderRadius: '5px'}} className="shadow-5 bg-lightest-blue">
			{props.children}
		</div>
	);
}