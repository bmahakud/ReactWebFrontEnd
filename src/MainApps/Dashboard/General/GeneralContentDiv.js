import React,{useState,useEffect} from 'react';
import classes from './GeneralContentDiv.module.css';
import base from '../../CommonAppUtilities/AppContentDiv.module.css';
import TopToolBar from './components/Teacher/TopToolBarV1';

import CoursesGridContainerTeacher from './components/Teacher/CoursesGridContainer'
import ClassesTeacher from './components/Teacher/Classes/Classes';
import ExamsTeacher from './components/Teacher/Exams/Exams';

import CoursesGridContainerStudent from './components/Student/CoursesGridContainer'
import ClassesStudent from './components/Student/Classes/Classes';
import ExamsStudent from './components/Student/Exams/Exams';

import NoticeBoxContainer from './NoticeBoardOld/NoticeBoxContainer';
import Notices from './Notices/Notices';
import Meetings from './Meetings/Meetings';
import {Route,Switch, useHistory} from 'react-router-dom';

import { getdashboardnotice } from './../../../CommonApps/AllAPICalls';



const GeneralContentDiv=(props)=>{

    const history = useHistory();


    const [showCourses, setShowCourses] = useState(true);
    const [showExams, setShowExams] = useState(false);
    const [showNoticeBoard, setShowNoticeBoard]= useState(false);
    const [showClasses, setShowClasses] = useState(false);
    const [showMeetings,setShowMeetings] = useState(false);

    const [showOneMeeting, setShowOneMeeting] = useState(false);	



    const [generalMeetingsMounted, setGeneralMeetingsMounted] = useState(false);
    const [generalCoursesMounted, setGeneralCoursesMounted] = useState(false);
    const [generalClassesMounted, setGeneralClassesMounted] = useState(false);
    const [generalExamsMounted, setGeneralExamsMounted] = useState(false);
    const [generalNoticesMounted, setGeneralNoticesMounted] = useState(false);


    const [generalOneMeetingMounted, setGeneralOneMeetingMounted] = useState(false);


   const showCoursesHandler=()=>{
    setShowCourses(true);
    setShowNoticeBoard(false);	   
    setShowClasses(false);
    setShowExams(false);	   
    setShowMeetings(false);
    history.push("/dashboard/general/courses");	   
   }

   




    const showNoticeBoardHandler=()=>{
        setShowNoticeBoard(true);
	setShowCourses(false);   
        setShowClasses(false); 
	setShowMeetings(false);
	setShowExams(false);
	history.push("/dashboard/general/notices");

    }

    const closeNoticeBoardHandler=()=>{
       setShowNoticeBoard(false);
       setShowCourses(true);
       setShowClasses(false);
       setShowExams(false);	    
    }



    const showClassesHandler=()=>{
     setShowClasses(true);
     setShowNoticeBoard(false);	    
     setShowCourses(false);
     setShowExams(false);
     setShowMeetings(false);	    
     history.push("/dashboard/general/classes");	    

    }


    const showMeetingsHandler=()=>{
     setShowClasses(false);
     setShowNoticeBoard(false);
     setShowCourses(false);
     setShowExams(false);
     setShowMeetings(true);
     history.push("/dashboard/general/meetings");


    }



    const showExamsHandler=()=>{

     setShowClasses(false);
     setShowNoticeBoard(false);
     setShowCourses(false);
     setShowExams(true);
     setShowMeetings(false);
     history.push("/dashboard/general/exams");


    }


    const closeClassesHandler=()=>{


    }

   

    const [dashboardNotice, getDashboardNotice]=useState(null);
    let temp_notice=null;
     useEffect(()=>{
        getdashboardnotice({getDashboardNotice});

     },[props.dashboardCourses ]);






return (

<div className={base.appContentDiv}>
   <div className={classes.contentDiv}>
     
        <div className={base.pwdAppDirectory}> <i className={base.pwdAppDirectoryText}> </i>   </div>    




     
  
	       
              <TopToolBar onPress= {props.rerender}  
	                       showNoticeBoard= {showNoticeBoardHandler} 
	                       showClasses = {showClassesHandler}
	                       showCourses = {showCoursesHandler}
	                       showExams={showExamsHandler}
	                       showMeetings = {showMeetingsHandler}
	                       dashboardCourses= {props.dashboardCourses}
	                       dashboardNotice= {dashboardNotice !==null ? dashboardNotice:null}
	                       userData = {props.userData}
	                       generalMeetingsMounted={generalMeetingsMounted}
	                       generalCoursesMounted={generalCoursesMounted}
	                       generalClassesMounted={generalClassesMounted}
                               generalExamsMounted={generalExamsMounted}
                               generalNoticesMounted={generalNoticesMounted}
	                       generalOneMeetingMounted={generalOneMeetingMounted}
	                       rerender={props.rerender}
	                       />
          


 
	 

              <Switch>

             
                 
                 <Route exact path='/dashboard/general/courses' >
                        { props.userData.usertype===1 &&
		          <CoursesGridContainerTeacher 
			          rerender={props.rerender} 
			          courseData={props.dashboardCourses} 
			          userData={props.userData}
	                          passMountInfo={setGeneralCoursesMounted}
				  /> 		
                        }

	                {  props.userData.usertype===2 &&

			  <CoursesGridContainerStudent
                                  rerender={props.rerender}
                                  courseData={props.dashboardCourses}
                                  userData={props.userData}
                                  passMountInfo={setGeneralCoursesMounted}
                                  />

			}





                 </Route>
                 



                 <Route exact path='/dashboard/general/classes' >
                         <ClassesTeacher passMountInfo={setGeneralClassesMounted}/>
                 </Route>
                 

	         <Route exact path='/dashboard/general/exams' >
                         <ExamsTeacher passMountInfo={setGeneralExamsMounted}/>
                 </Route>



               





                 <Route exact path='/dashboard/general/notices' >

                     <Notices
                         closeNoticeBoard={closeNoticeBoardHandler}
                         userData={props.userData}
                         courseData={props.dashboardCourses}
                         socketObj={props.socketObj}
                         rerender={props.rerender}
	                 dashboardNotice= {dashboardNotice !==null ? dashboardNotice.results:null}
                         passMountInfo={setGeneralNoticesMounted}
                         />

                 </Route>

	     
                 <Route  path='/dashboard/general/meetings' >
	                     
	                    <Meetings
	                           userData={props.userData}
	                           passMeetingMountInfo={setGeneralMeetingsMounted}
                                   passOneMeetingMountInfo={setGeneralOneMeetingMounted}
	                           rerender={props.rerender}
	                     />
                       
                            
                </Route>


             </Switch>
             



   
    {/*

        props.userData.usertype===2 && <>

            <TopToolBarStudent onPress={props.rerender} 
	                       showNoticeBoard={showNoticeBoardHandler}
		               />



              { showNoticeBoard &&  <NoticeBoxContainer  
		                    closeNoticeBoard={closeNoticeBoardHandler} 
		                    userData={props.userData} 
		                    courseData={props.dashboardCourses}/>
	      }






              { !showNoticeBoard && <CoursesGridContainerStudent rerender={props.rerender} 
		                                    courseData={props.dashboardCourses} 
		                                    userData={props.userData}/> 
	      }


        </>

   */}













   </div>
</div>	

);

}


export default GeneralContentDiv;
