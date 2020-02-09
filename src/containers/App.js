import React, { Component } from 'react';
import CardSearch from '../component/CardSearch';
import CardList from '../component/CardList';
import {robots} from '../robots';


class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield : ''
		}
	}
componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users').then(response => {
		return response.json();
	})
	.then(user => {
		this.setState({robots: robots});
	})
		

	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		
	}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter( robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
			
		})
		return !robots.length ?
		
<h1> No data Found </h1> :
				
		 (
			<div>
			<h1> RoboFriend </h1>
				<CardSearch searchchange={this.onSearchChange}/>
			<CardList robots = {filteredRobots}/>
			</div>

		);
	

	}
}

export default App;
