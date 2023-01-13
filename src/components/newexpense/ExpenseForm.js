import './ExpenseForm.css'
import {useState} from "react"
function ExpenseForm(props){
  const [title,setTitle]=useState('');
  const [amount,setAmount]=useState('');
  const [date,setDate]=useState('');
   
   function titlechange(event){
     setTitle(event.target.value)
   }
   function amountchange(event){
    setAmount(event.target.value)
   }  
   function datechange(event){
    setDate(event.target.value)
   }

   function add(e){
    e.preventDefault()
    setTitle('')
    setAmount('')
    setDate('')
    
    let form={id:Math.floor(Math.random()*100),loan:title,cost:amount ,date:new Date(date)} 
  //  console.log(form);
  props.chg1(form)
  // props.start()
 
   }
  
    return(
        <div>
            <h1 id='app'>Expense App</h1>
        <div className='form'>
       
            
     <form>
     <label htmlFor='title'>Title :</label>     
     <input type='text' id='title' value={title} onChange={titlechange}></input>

     <label htmlFor='amount'>Amount :</label>
     <input type='number' id='amount' value={amount} onChange={amountchange}></input><br></br>
     <label htmlFor='datee'> Date : </label>
     <input type='date' id='datee' value={date} onChange={datechange}></input>  
<div id='button'>
     <button id='cancel' type='button' onClick={props.cancel}>Cancel</button>
     <button id='add' onClick={add}>Add Expense</button></div> 
     </form>
     </div></div>
    );
}

export default ExpenseForm;