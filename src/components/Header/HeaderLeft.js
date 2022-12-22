import React,{useState} from 'react'; 
import classes from './HeaderLeft.module.css';
import companyLogo from './img/logoBlueWhite.PNG'
//import {Link} from 'react-router-dom';
import {BsList} from 'react-icons/bs';
import CourseDropDown from './CourseDropDown';
import { useHistory } from "react-router-dom";

import {IoMdArrowRoundBack } from 'react-icons/io';


import {SiRedux} from 'react-icons/si';

//import {Typography} from '@material-ui/core';


function HeaderLeft(props){

    let history = useHistory();
    const [courseDropDown, setCourseDropDown]=useState(false);


    const showCourses=()=>{
       setCourseDropDown(true);
    }


    const hideCourses=()=>{
      setCourseDropDown(false);
    }


   const dashClickHandler=()=>{
   
   history.push("../../dashboard/general/courses");	   

   }


   const backToDashboard=()=>{
     localStorage.removeItem('preferredCourseId');
     history.push('../../dashboard/general/courses');



   }	







return (

 <div className={classes.headerLeft} > 


      { localStorage.getItem('preferredCourseId') !=null && 
      <button type="button" className={classes.backButton} onClick={backToDashboard}> <IoMdArrowRoundBack className={classes.BackIcon}/> </button>
      }


        {/*
         <img className={classes.logo} src={companyLogo} alt='edr Logo' />
        */}

       <div className={classes.logoText}>
	  <b>Di</b> 
	  <div className={classes.styleBar}> </div>
       </div>
       

      <button className={classes.ExpConButton} onClick={props.onPress}> 
	  <BsList className={classes.ExpConIcon} />
      </button>	

      <div className={classes.courseNameButton}  onMouseOver={showCourses} onMouseLeave={hideCourses} >
          
 	 <i> <b> {    props.selectedCourse !==null  && 
		      props.selectedCourse[0].courseLocalCode !=="N/A" && 
		      props.selectedCourse[0].courseLocalCode !==""? props.selectedCourse[0].courseLocalCode+": ":""}
	         { props.selectedCourse !==null  &&  props.selectedCourse[0].courseShortName}
	     </b>   
	</i>
           
         

	 <i onClick={dashClickHandler} className={classes.clickDash}> { props.selectedCourse ===null &&  <span><b> Home </b></span>} </i>



	 { props.selectedCourse !==null && <sup className={classes.superScript}>@ {props.selectedCourse[0].designedFor} </sup> }

         { courseDropDown && props.selectedCourse !==null && <CourseDropDown userData={props.userData} dashboardCourses={props.dashboardCourses} />}

      </div>	




  </div>

);


}

export default HeaderLeft;

