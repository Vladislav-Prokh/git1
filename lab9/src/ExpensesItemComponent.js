import React from 'react';
import ExpensesDateComponent from './ExpenseDate';
import ExpensesCardComponent from './CardComponent';
export default function ExpensesItemComponent(props){
	return(
	<div className="card expense-item">
    	<ExpensesDateComponent year={props.year} day={props.day} month={props.month}/>
    	<ExpensesCardComponent description={props.description} price = {props.price}/>
    </div>
	)
}

