import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props ){
 
    const[but,setedit]=useState(false)
     
    function chg(da){
        props.on(da)
        setedit(false)
       }
    function button(){
        setedit(true)
    }
    function cancel(){  
        setedit(false)
    }

    return(
<div>
  
   
    {but=== true? ( <ExpenseForm chg1 ={chg} cancel={cancel} ></ExpenseForm>):
                  (  <button onClick={button} id='viewform'>View Form</button>)}
</div>
    )
}
export default NewExpense;