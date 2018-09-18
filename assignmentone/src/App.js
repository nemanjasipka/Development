import React, { Component } from 'react';

import './App.css';
import UserOutput from './Modules/UserOutput';

class App extends Component {

state={
	users:[
			{username:'Max', stationNumber:1},
			{username:'Nemanja', stationNumber:2},
			{username:'Damir', stationNumber:3}
			]
	}
  render() {
    return (
		<div className="App">
			<p>Output login information</p>
				<div className="testLoginOutput">
					<UserOutput 
						username={this.state.users[0].username}
						stationNumber={this.state.users[0].stationNumber} />
					<UserOutput 
						username={this.state.users[1].username} 
						stationNumber={this.state.users[1].stationNumber} />
					<UserOutput 
						username={this.state.users[2].username} 
						stationNumber={this.state.users[2].stationNumber} />
				</div>
		</div>
    );
  }
}

export default App;
