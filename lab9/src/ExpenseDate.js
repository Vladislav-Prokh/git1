import React from 'react';

export default function ExpensesDateComponent(props){
	return(
        <div className="expense-date">
            <div className="expense-date__month">{props.month}</div>
            <div className="expense-date__year">{props.year}</div>
            <div className="expense-date__day"><p>{props.day}</p></div>
        </div>
	)
}