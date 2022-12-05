import React from "react";
import classes from "./TicketDescription.module.css"
import {BsChevronDoubleDown} from "react-icons/bs";

const TicketDescription = (props) =>{

return(

<div className={classes.ticketDescription}>


 <div className={classes.descriptionTitle}> <button className={classes.descriptionButton}> <b>  Description</b> <BsChevronDoubleDown/> </button> </div>


 <div className={classes.descriptionContent}>  

 {props.data.content}


 </div>

 
 <div> 
  <hr className={classes.hrLine}/>

</div>	




</div>

);

}

export default TicketDescription;


