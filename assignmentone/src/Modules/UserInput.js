import React from 'react';

const inPutField= (props)=>{
	return (
			<div className="inPutFields">
				<input type="text" onChange={props.changed} value={props.username} />
			</div>
			) 

export default inPutField;