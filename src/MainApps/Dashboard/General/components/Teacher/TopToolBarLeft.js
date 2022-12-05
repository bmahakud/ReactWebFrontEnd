import React,{useState,memo} from 'react';
import classes from './TopToolBarV1.module.css';
import {BsChevronDown} from 'react-icons/bs';
import {changeusertype} from '../../../../../CommonApps/AllAPICalls';
import OutsideAlerter from "../../../../../CommonApps/OutsideAlerter";


//import {Typography} from '@material-ui/core';

const TopToolBarLeft=(props)=>{



        const showUsertypeChangeHandler=()=>{

           setShowDropDown(showDropDown=>!showDropDown);

        }

        const [showDropDown, setShowDropDown] = useState(false);


        const changeUserTypeToStudentHandler=()=>{

	    let usertypeId=2;	
            changeusertype({usertypeId});

	}


       const changeUserTypeToTeacherHandler=()=>{
            let usertypeId=1;
            changeusertype({usertypeId});
       }






return (

        <div className={classes.topToolBarLeft}>

	        <div className={classes.dashboardTitle}> 	              
	              <div className={classes.topbarTitle}> 
	                   Dashboard
	              </div> 
	        
                
                <div className={classes.userTypeInfo}>
                      {props.userData.usertype===1 && 
			           <div>
                                     
                                      <span className={classes.buttonsDivTnS}>
                                          <button className={classes.teacherButton} onClick={showUsertypeChangeHandler}>
                                             <span className={classes.teacherTitle}>Teacher </span>
                                             <span className={classes.downArrowSpan}><BsChevronDown/></span>
                                          </button>

                                           {showDropDown && 

						       <OutsideAlerter setDropDown={()=>setShowDropDown(false)}>

						           <button className={classes.studentButton} 
						                    onClick={changeUserTypeToStudentHandler}> 
						              <span className={classes.teacherTitle}> Student </span> 
						            </button>

						       </OutsideAlerter>
					   }

                                       </span>
                                    </div>
                      }
                      {props.userData.usertype===2 && <div>
                                      
                                        <span className={classes.buttonsDivTnS}>
                                          <button className={classes.teacherButton} onClick={showUsertypeChangeHandler}>
                                             <span className={classes.teacherTitle}>Student </span>
                                             <span className={classes.downArrowSpan}><BsChevronDown/></span>
                                          </button>
  
                                           {showDropDown &&
						         <OutsideAlerter setDropDown={()=>setShowDropDown(false)}>
						           <button className={classes.studentButton} onClick={changeUserTypeToTeacherHandler}>
                                                               <span className={classes.teacherTitle}> Teacher</span>
                                                            </button>
						          </OutsideAlerter>
                                           }

                                       </span>

				      </div>
                      }
                </div>
		

            </div>

         </div>





);

}

export default memo(TopToolBarLeft);
