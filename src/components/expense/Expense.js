 import ExpenseItem from './ExpenseItem';
import Expensefliter from './Expensefilter';
import './Expanse.css';
import { useState } from "react";
 
function Expense(props){
  const [year,setyear]=useState('year')

 
  function changeyear(e){
   setyear(e.target.value)
   console.log(e.target.value)
  }

  const filter=props.obj1.filter((e) =>{
    return e.date.getFullYear().toString() === year;
  })
  
    return(    
  <div id='fliter'>   
<div id='f1'>
  
  <Expensefliter filter={year} chageyear={changeyear} />
  
   </div>
{year==="year" ? (props.obj1.map((ob)=>( <ExpenseItem obj2={ob} del={props.del}></ExpenseItem>))) :
  filter.length===0?(<h4>Empty</h4>) :
 (filter.map((o)=>( <ExpenseItem obj2={o}></ExpenseItem>)))}
{/* {filter.map((o)=>(
  <ExpenseItem obj2={o}></ExpenseItem>

))} */}
     </div>  
    );
}
export default Expense;
 