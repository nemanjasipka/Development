import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //ova putanja mora da postoji u src fajlovima da bi radilo
import Test from './Math/Test';
class App extends Component {
	state={
	persons:[
			{name:'Max', age:28},
			{name:'Nemanja', age:30},
			{name:'Damir', age:31}
			]
	}


	switchNameHandler = (newName)=>{
		console.log("test");
		this.setState({
		persons:[
				{name:newName, age:28},
				{name:'Nemanja', age:30},
				{name:'Damir', age:31}
				]
			}
		)
	}
	nameChangedHandler=(event)=>{
		console.log("test");
			this.setState({
			persons:[
					{name:'Max', age:28},
					{name: event.target.value, age:30},
					{name:'Damir', age:31}
					]
				}
			)
	

	}


  render() {

	const style={
		backgroundColor:'#7b68ee',
		font:'inherit',
		border:'2px solid #aeacb0',
		padding: '5px 20px',
		borderRadius: '5px',
		color:'white',
		cursor:'pointer'
	}
    return (
      <div className="App">
       <h1>Test app</h1>
		<button  style={style} onClick={() => this.switchNameHandler('Makso')}> Switch</button> {/*Prvi nacin preko metode dodela vrednosti*/}
		<p>Treba da ispise tekst iz Person.js fajla</p>
		<div className="test">
		<Person 
			name={this.state.persons[0].name} 
			age= {this.state.persons[0].age} />
		<Person 
			name={this.state.persons[1].name} 
			age= {this.state.persons[1].age}
			changed={this.nameChangedHandler}/>
		<Person 
			name={this.state.persons[2].name} 
			age= {this.state.persons[2].age}
			click={this.switchNameHandler.bind(this, 'Maximilian')}>Moj hobi je sakupljanje slicica
		</Person>{/*Drugi nacin preko bind-a se prosledjuje vrednost*/}
		</div>
		<Test />   
      </div>
    );
  }
}

export default App; 
