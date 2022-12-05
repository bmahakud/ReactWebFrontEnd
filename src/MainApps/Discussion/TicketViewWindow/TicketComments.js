import React,{useState,useEffect} from "react";
import classes from "./TicketComments.module.css"
//import {BsChevronDoubleDown} from "react-icons/bs";
//import {getuserbyId} from '../../../CommonApps/AllAPICalls';

const localTime=(serverTime)=>{

        let timeData = new Date(serverTime);
        let timeDataStr=timeData.toString()
        let fulltime=timeDataStr.split(" ")[4];
        let hrmin = fulltime.split(":")[0]+":"+fulltime.split(":")[1]
        let year = timeDataStr.split(" ")[3];
        let month = timeDataStr.split(" ")[1];
        let day = timeDataStr.split(" ")[2];

        let displayTime =  hrmin+", "+day+" "+month+" "+year;

        return displayTime;

}




const TicketComments = (props) =>{

   let serverTime=props.commenttime;
   let commentTime= localTime(serverTime);


return(

<div className={classes.ticketComments}>


         <div className={classes.commentTitle}> 
	   <button className={classes.commenterButton}> {props.commenter.firstname} {props.commenter.lastname}  </button> 
	   <span className={classes.addedComment}>added a comment at {commentTime}</span> 
	</div>

         <div className={classes.descriptionContent}>  
              	{props.commenttext}
         </div>

 
        <div>
	    <hr className={classes.hrLine}/>
        </div> 











  </div>



);

}

export default TicketComments;


