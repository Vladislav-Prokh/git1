import React, {Component} from "react";
import ExpensesComponent from './ExpensesComponent';
import ExpensesItemComponent from './ExpensesItemComponent';
import ReactDOM from 'react-dom';
import App from './App';

export default class AddingPanel extends Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			visibility:true,
			expense:{
				id:"",
				title:"Some",
				amount:100,
				date:new Date(2021, 5, 12),
			}
		};
		this.handleClick = this.handleClick.bind(this);
		this.add = this.add.bind(this);
		this.update = this.update.bind(this);
		}
	handleClick(){
		this.setState(state=>({
			visibility:!state.visibility
		}));
	}
	update(obj){
		this.setState({expense:obj});
	}
	add(){
		var date = document.getElementById('date').value;
		const Expense = {
			id:String(document.getElementById('title').value.concat(new Date().toString())),
			title:document.getElementById('title').value,
			amount:document.getElementById('amount').value,
			date:new Date(date),
		};
		this.state.expense = Expense;
		this.props.updateMethod(this.state.expense);
	}

	render(){
		if(this.state.visibility){
			return(
				<div className ="callAddingFormBlock">
			        <button id ="callFormBtn" onClick={this.handleClick}>Add new Expense</button> 
			    </div>
						);
				}
		else{
			return(
				<div className ="divForFrom">
					<div id = "addExpenseForm" >
						<input type="text" placeholder = "Title" id = "title"/>
						<input type="number" placeholder = "price" id = "amount"/>
						<input type="date" placeholder = "date" id="date"/>
						<button id="CancelBtn" onClick={this.handleClick}>Cancel</button>
						<button id="AddExpenseBtn" onClick={this.add}>Add Expense</button> 
					</div>
			    </div>
			    );
		}

	}
}