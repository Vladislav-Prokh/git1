import React from 'react';

export default function ExpensesCardComponent(props){
	return(
      <div className="expense-item__description"><h2>{props.description}</h2>
      <div className="expense-item__price">${props.price}</div>
      </div>
	)
}