import logo from './logo.svg';
import './App.css';
import ExpensesComponent from './ExpensesComponent';
import ExpensesItemComponent from './ExpensesItemComponent';
import ExpensesDateComponent from './ExpenseDate';
import ExpensesCardComponent from './CardComponent';
import ReactDOM from 'react-dom';
import AddingPanel from './AddingPanelComponent';


function App() {
  return (
  <div className="App">
      <header className="App-header">
        <ExpensesComponent/>
      </header>
    </div>
  );
}

export default App;
