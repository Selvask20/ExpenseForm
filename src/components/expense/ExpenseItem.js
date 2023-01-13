// import Expensefliter from './Expensefilter';

import Card from '../ui/Card';
import ExpenseDate from './ExpenseDate'
// import Expensefliter from './Expensefilter';


import './ExpenseItem.css'
function ExpenseItem(props){
    return(    
      
        <div id='all1'>
        {/* <Expensefliter></Expensefliter> */}

  
        <div id='all'>
        <Card className='all'>
            <div id='date'>
                
                <ExpenseDate obj3={props.obj2.date}></ExpenseDate>
            </div>
            <div id='loan'>
                <h2>{props.obj2.loan}</h2>
            </div>
            <div id='cost'>
                <p>{props.obj2.cost}</p>
            </div>  
            <div>
                <button onClick={()=>props.del(props.obj2.id)} >Delete</button>
            </div>
            <br></br>
            </Card>
            </div></div> 
      
    );
}
export default ExpenseItem;