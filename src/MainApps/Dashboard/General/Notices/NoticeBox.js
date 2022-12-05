import React,{useState,useEffect} from 'react';
import classes from './NoticeBox.module.css';
import {BsCheckCircle} from 'react-icons/bs';
import {deletenoticebyId, removenoticebyId} from '../../../../CommonApps/AllAPICalls';




const NoticeBox =(props)=>{



     let bkgColor= props.read? "var(--tintGreyColor3)": "white";

     const noticeCreationTime=({datetime})=>{

     let DatetimeLocalFull = new Date(datetime);


     let DatetimeLocalFullStr= String(DatetimeLocalFull);

     let dayStr=DatetimeLocalFullStr.split(" ").at(0);
     let dateStr=DatetimeLocalFullStr.split(" ").at(2);
     let month= DatetimeLocalFullStr.split(" ").at(1);
     let year = DatetimeLocalFullStr.split(" ").at(3);	    

     let fullTimeLocal = DatetimeLocalFullStr.split(" ").at(4);

     let fullTimeLocalStr = String(fullTimeLocal);

     let localTimeHour = fullTimeLocalStr.split(":").at(0);
     let localTimeMin = fullTimeLocalStr.split(":").at(1);



     let ampm ="am";


     if (localTimeHour == 12) {
        ampm = 'pm';
     } else if (localTimeHour == 0) {
        localTimeHour = 12;
     } else if (localTimeHour > 12) {
        localTimeHour -= 12;
        ampm = 'pm';
     }









     let time=String(localTimeHour)+":"+String(localTimeMin)+String(ampm)+", "+String(dateStr)+" "+String(month)+" "+String(year);

     return time;

   }


   let datetime= props.Notice.creationTime;



   const deleteNoticeHandler=()=>{

     let noticeId=props.Notice.id;	   
     deletenoticebyId({noticeId,props});


   }


   const removeNoticeHandler=()=>{
     let noticeId=props.Notice.id;
     console.log("remove handler")	   
     removenoticebyId({noticeId, props});
   }	











return (

<div className={classes.noticeBox} style={{backgroundColor:bkgColor}}>


   <div className={classes.topSection}> 
	<i className={classes.noticeID}>Notice ID: EDR-{props.Notice.id}</i>  
	<i className={classes.creationTime}> Created at: {noticeCreationTime({datetime})}</i>  
   </div>



   <div className={classes.midSection}> 
	<div className={classes.midSection__title}>  <b> {props.Notice.noticeTitle} </b></div>
	<div>  {props.Notice.noticeText}</div>
   </div>

   <div className={classes.buttomSection}> 

        <div className={classes.noticeBoxButtonView}> <i>Posted by : 
	{props.Notice.creater.firstname !==""? props.Notice.creater.firstname+" "+props.Notice.creater.lastname : props.Notice.creater.username}
	</i>
	</div>


        {props.read && 
		<button type="button" onClick={props.markAsUnread} className={classes.markAsUnreadButton}> 
		    <BsCheckCircle className={classes.noticeReadIcon}/>
		</button>
	}	


	{!props.read && <button type="button" className={classes.noticeBoxButtonRead} onClick={props.markAsRead}> 

 	<i>mark as read</i>

        </button>}

   { props.userData !==null && Number(props.userData.id) === Number(props.Notice.creater.id) &&
   <button className={classes.noticeBoxButtonHide} onClick={deleteNoticeHandler}> 
	<i>delete</i>
   </button>
   }

   { props.userData !==null && Number(props.userData.id) !== Number(props.Notice.creater.id) &&
   <button className={classes.noticeBoxButtonHide} onClick={removeNoticeHandler}> 
        <i>remove</i>
   </button>
   }




</div>	




</div>

);

}


export default NoticeBox;
