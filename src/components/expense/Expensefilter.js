import './Expensefilter.css'
 
function Expensefliter(props){
  
 
    return(
<div>
    <div id='h3'>  
    <div id='yer'><h3>Fliter By Year</h3></div>
    <select onChange={props.chageyear} value={props.filter}>
        <option>year</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        
        
        
    </select>
</div></div>
    );
}
export default Expensefliter; 