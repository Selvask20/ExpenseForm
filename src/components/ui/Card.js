

function Card(props){
    return(
        <div>
      
        <div className={props.className}>
{props.children}
        </div></div>
    );
}
export default Card;