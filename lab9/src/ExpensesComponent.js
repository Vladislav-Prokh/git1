import React, {Component} from "react";
import ExpensesItemComponent from './ExpensesItemComponent';
import AddingPanel from './AddingPanelComponent';

export default class ExpensesComponent extends Component{
	
	constructor(props){
		super(props);
		
		this.state = {
	expenses:[ 
		    { id: 'e1',title: 'Toilet Paper',amount: 94.12,date: new Date(2020, 7, 14),},
	    	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		    { id: 'e3',title: 'Car Insurance',amount: 294.67,date: new Date(2021, 2, 28),},
		    { id: 'e4',title: 'New Desk (Wooden)',amount: 450,date: new Date(2021, 5, 12),}
		     ]
			
	};
		this.Update = this.Update.bind(this);
	}
	Update(obj){
		const copy = this.state.expenses.slice();
		copy.push(obj);
		this.setState({expenses:copy});
	}
	render(){

		return(
			<div className="card expenses">
					<AddingPanel updateMethod = {this.Update}/>
				{this.state.expenses.map(el=><ExpensesItemComponent key={el.id} price={el.amount} description={el.title} year = {el.date.getFullYear()} day = {el.date.getDay()} month = {el.date.getMonth()}/>)}

			</div>
		)
	}
}

