import React,{useState} from 'react';
import classes from './ClassTimeNAddress.module.css';
import {BiEdit} from 'react-icons/bi';
import {BsLink45Deg,BsFillCameraVideoFill} from 'react-icons/bs';

import EditMeetingForm from './Forms/EditMeetingForm'


const InstituteBar=(props)=>{


   const [showEditForm, setShowEditForm] =useState(false);



   const showEditFormHandler=()=>{

     //setShowEditForm(true);

    //console.log("host: ",props.selectedMeeting.creater.id);
    //console.log("current user: ", props.userData.id);
    if(props.selectedMeeting !==null && props.userData.id !==null){

      if(Number(props.selectedMeeting.creater.id) === Number(props.userData.id) ){

      setShowEditForm(true);


      }else{

       alert("Only hosts can edit meetings");
      }





    }


   }


   const closeTimeNAddressEditForm=()=>{
   setShowEditForm(false);   
   props.rerender();
   }



   const joinMeetingHandler=()=>{

     //window.open("https://meet.google.com/pfq-vkvp-zeq", "_blank")

       let meetingLink = props.selectedMeeting.meetingLink;
       window.open(meetingLink, "_blank")


    }

  let NumToMonth =["N/A","Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]


return (

<div className={classes.instituteBar}>

   <i className={classes.titleSpace}> <span>TIME AND ADDRESS</span>   
	<button className={classes.editButton} onClick={showEditFormHandler}> 
	     <BiEdit className={classes.editIcon}/>
	</button>
   </i>


    { showEditForm &&  <EditMeetingForm onPress={closeTimeNAddressEditForm} meeting={props.selectedMeeting}/>}


    <div className={classes.timeAndAddressInfo}>

               <i style={{color:"grey",backgroundColor:'white',marginLeft:"30px"}}>
                           <b>{props.selectedMeeting.meetingtime.split(":")[0]}
                              {":"}
                              {props.selectedMeeting.meetingtime.split(":")[1]}
                               {", "}{props.selectedMeeting.duration}{" mins "}
                               |
                              {" "}
                              {" "+props.selectedMeeting.meetingdate.split("-")[2]+" "}
                              {NumToMonth[Number(props.selectedMeeting.meetingdate.split("-")[1])]}{" "}
                              {props.selectedMeeting.meetingdate.split("-")[0]}
                           </b>
               </i>








        <i className={classes.meetingLinki} style={{marginLeft:"30px"}}>Meeting Link: 
	   <button className={classes.copyMeetingLink} onClick={() => {navigator.clipboard.writeText(props.selectedMeeting.meetingLink)}}>
	     Copy <BsLink45Deg/> 
	   </button>
       </i> 


       <i className={classes.meetingLinki}><span>ABOUT:</span>
       
         <span style={{marginLeft:"10px"}}> {props.selectedMeeting.about} </span> 


       </i>






     <button className={classes.goLiveButton} onClick={joinMeetingHandler}> 
	<h2> Join Meeting</h2>
     </button>

   </div>

</div>

);

}

export default InstituteBar;
