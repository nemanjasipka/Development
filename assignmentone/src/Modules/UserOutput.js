import React from 'react';
import './Css/UserOutput.css';

const outPutField= (props)=>{
	return (
            
			<div className="outPutFields">
				<p> Welcome to the workstation number: {props.stationNumber} </p>
				<p> Happy coding, {props.username}</p>	
			</div>
			)
}
export default outPutField;