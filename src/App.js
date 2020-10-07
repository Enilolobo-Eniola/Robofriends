import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import { Scroll } from './Scroll';
import { notification } from 'antd';
import './App.css';

class App extends Component
{
	
	constructor()
	{
		super();
		this.state =
		{
			robots: robots,
			searchField: '',
			selectedRobots: []
		};
	}

	// componentDidMount()
	// {
	// 	this.setState({selectedRobots: selectedRobots});
	// }
	componentDidUpdate()
	{
		console.log("updated");
	}

	clickk = (id,name,email) =>
	{
		const sel = this.state.selectedRobots
		const length = sel.length;
		let i = 0;
		let isPresent = false;
		if (length === 0)
		{
			sel.push({id:id,name:name,email:email});
		}
		else
		{
			while (i < length)
			{
				if (sel[i].id === id)
				{
					isPresent = true;
					break;
				}
				i++;
			}
		}
		if (isPresent === true)
		{
			notification.open({
    		message: 'You already selected this robot!',
    		duration: 1.5})
		}
		else if (isPresent === false && length > 0)
		{
			sel.push({id:id,name:name,email:email});
		}
		this.setState({selectedRobots: sel});
	}

	onChange = (event) =>
	{
		this.setState({searchField: event.target.value});
	}

	render()
	{
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		return(
			<>
				<div>
					<h1 className='f3 near-white bg-navy ml0-ns'>ROBOFRIENDS</h1>
					<div className = 'tc'>
						<SearchBox searchChange={this.onChange}/>
						<Scroll>
							<CardList robots={filteredRobots} clickk={this.clickk}/>
						</Scroll>
						<CardList robots={this.state.selectedRobots}/>
					</div>
				</div>
			</>
			);
	};
}

export default App;