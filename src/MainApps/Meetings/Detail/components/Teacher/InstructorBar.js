import React,{useState, useEffect} from 'react';
import classes from './InstructorBar.module.css';
//import seema from './profSeema.png'
//import {MdStopCircle} from 'react-icons/md';
import {BsPeopleFill} from 'react-icons/bs'

import { getuserbyId} from '../../../../../CommonApps/AllAPICalls';




const InstructorBar=(props)=>{


   //console.log("course: ", props.selectedCourse);

   const [hostData, setUserData]= useState({
     usertitle:'',
     firstname:'',
     lastname:''
    });




  let hostId=props.selectedMeeting.creater.id;


   //console.log("hostId : ", hostId);

   useEffect(()=>{

     let userId = hostId;
     getuserbyId({userId, setUserData});

     return ()=>{
      setUserData(hostData=>({usertitle:'',firstname:'',lastname:''}));
      }

    },[hostId]);





return (

<div className={classes.instructorBar}>

   <i > <span> HOST</span>  
	<span>  <BsPeopleFill className={classes.participantIcon}/> 
	   <span className={classes.numParticipant}>  
	      {/*props.selectedCourse.length>0 && props.selectedCourse[0].enrolledstudents.length*/}
	   </span> 
	</span>  
   </i>
   <button >
	{ (hostData.usertitle +" "+ hostData.firstname +" "+ hostData.lastname)}
	{/*<img className={classes.instructorImage} src={seema} alt='edr Logo' />*/}
   </button> 
  



</div>

);

}

export default InstructorBar;
