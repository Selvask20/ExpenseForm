import { useState } from 'react';
import './App.css';    
import Expense from './components/expense/Expense';                        
import NewExpense from './components/newexpense/NewExpense';                  

function App() {
//  function expanse(ke){
//   console.log('Newexpense')
//  console.log(ke)
// }

  let obj=[{ id:Math.floor(Math.random()*100), date : new Date(2021,8,5),loan:'Bank Loan',cost:'Rs:2000'},
           {id:Math.floor(Math.random()*100),date : new Date(2021,7,6),loan:'bike Loan',cost:'Rs:6000'},
           {id:Math.floor(Math.random()*100),date : new Date(2020,6,4),loan:'car Loan',cost:'Rs:8000'}];

    const [expense,setExense] = useState(obj);

    const addExpenseitem =(expense =>{
      setExense((per) =>{
        return[expense, ...per];
      })
    })

    function del(id){
      setExense((exp)=> {return exp.filter((lo)=> lo.id !== id)}
    )}

  return ( 
    <div className="App">
       <NewExpense on={addExpenseitem}></NewExpense>
       <Expense obj1={expense} del={del} ></Expense>
    </div>
  );
 }

export default App;
