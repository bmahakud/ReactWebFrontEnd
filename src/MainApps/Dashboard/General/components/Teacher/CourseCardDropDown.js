import React,{useState, memo} from 'react';
import classes from './CourseViewDashboard_v2.module.css';
import OutsideAlerter from '../../../../../CommonApps/OutsideAlerter'; 



const CourseCardDropDown=(props)=>{

   //console.log("drop down rendering")

 
   const editCourseCardButtonHandler=()=>{
     props.showCourseEditFormHandler();
     //props.setDropDown(false);  	  
   }

   //<OutsideAlerter setDropDown={props.setDropDown}>	







return (

<OutsideAlerter setDropDown={props.setDropDown}>

<div className={classes.dropdownButtons}>


                                    <button type="button" 
	                                    className={classes.dropdownButton} 
	                                    onClick={editCourseCardButtonHandler}> 
	                                    edit
                                    </button>
                                    <button type="button" 
	                                    className={classes.dropdownButton} 
	                                    onClick={props.deleteCourseHandler}> 
	                                     delete
                                    </button>

                                    <button type="button"
                                            className={classes.dropdownButton}>
                                             publish
                                    </button>

                                    <button type="button"
                                            className={classes.dropdownButton}>
                                             archive
                                    </button>
 



                                </div>



</OutsideAlerter>


);



}

export default memo(CourseCardDropDown);
