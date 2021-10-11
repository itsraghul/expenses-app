import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense";
import React , {useState} from "react";

 const DUMMY_EXPENSES = [
   { id: "e1", title: "Car", amount: 297.45, date: new Date(2021, 2, 28) },
   { id: "e2", title: "Bike", amount: 297.45, date: new Date(2021, 10, 2) },
   { id: "e3", title: "Cycle", amount: 397.45, date: new Date(2021, 4, 9) },
 ];

const  App= () => {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler =(expense)=>{
    setExpenses(prevExpenses=>{
      return [expense, ...prevExpenses];
      
    });
    
    console.log(expenses);
  };
  return (
    <div>
     <NewExpenses onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
