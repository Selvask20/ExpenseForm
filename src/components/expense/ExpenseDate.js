// import {useState} from 'react';
import './ExpenseDate.css'
function ExpenseDate(props){
  
        const month = props.obj3.toLocaleString('en-US',{month:'long'})
        const date = props.obj3.toLocaleString('en-US',{day:'2-digit'})
        const year = props.obj3.getFullYear() 
       
        // const [color,setColor]=useState(month);
        // function FavoriteColor(){
        //     setColor('updated')
        //     console.log(month)
        // }
        return(
            <div id='p'>
                {/* <h3>{color}</h3> */}
                <h3>{month}</h3>
                <h2>{date}</h2>
                <h2>{year}</h2>
                {/* <button type='button' onClick={FavoriteColor}>click</button> */}
            </div>


     


    );
}
export default ExpenseDate;