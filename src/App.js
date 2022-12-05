import React,{useState,useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
//import logo from './logo.svg';

import  './App.css';
import Header from './components/Header/Header';

//import HeaderNew from './components/Header/HeaderV2';

import SideNavBar from './components/SideNavBar/SideNavBar';
import SideToolBar from './components/SideNavBar/SideToolBar';
import SideBarDashboard from './components/SideNavBar/SideBarDashboard';

import UserProfile from './MainApps/Account/UserProfile/UserProfile';
import Settings from './MainApps/Account/Settings/Settings';
//import Courses from './MainApps/Account/Courses/Courses';

//Import Applications
import General from './MainApps/Dashboard/General/General';
import Summary from './MainApps/Summary/Summary';
//import News from './MainApps/Dashboard/News/News';
//import Syllabus from './MainApps/Syllabus/Syllabus';

import VATChat from './MainApps/Chat/VATChat';
import EMail from './MainApps/EMail/EMail';
import Tickets from './MainApps/Discussion/Tickets';

import ClassOverview from './MainApps/Classes/Overview';
import Detail from './MainApps/Classes/Detail/Detail';
import Specifics from './MainApps/Classes/Specifics/Specifics';

import FindBook from './MainApps/Books/Books';
import Read from './MainApps/Books/Read/Read';
import Insights from './MainApps/Books/Insights/Insights';

import AssignmentHome from './MainApps/Assignments/Assignments.js';


import ExamsInCourse from './MainApps/Exam/Exams';


import MeetingsOverview from './MainApps/Meetings/Overview';
import MeetingsDetail from './MainApps/Meetings/Detail/Detail';

import Students from './MainApps/Students/Students';
import Teacher from './MainApps/Teacher/Teacher';

import Grades from './MainApps/Grades/Grades';



import {w3cwebsocket as W3CWebSocket } from 'websocket';

import { useMediaPredicate } from "react-media-hook";



//import CentralSocketConnection from './CentralSocketConnection';
import {getcoursesbyCourseId, getuser, getcoursesbyCourseIdArray} from './CommonApps/AllAPICalls';







/*
function Connect (){

   let client;
   let isConnected;	

   function start () {
    
       client = new W3CWebSocket('wss://td7ru13iq4.execute-api.ca-central-1.amazonaws.com/production');

       client.onclose = () => {
         isConnected=false;
	 console.log("webSocket gets disconnected");      
         setTimeout(start, 3000);
       }

       client.onopen=()=>{
         isConnected=true;
	 console.log("webSocket gets connected");      
       }


     client.onmessage = (event)=>{
     const dataFromServer = JSON.parse(event.data);
     console.log("Message receved-3", event.data);
   }






   }

   start();

   return {
       getClient: () => client,
   }
}

const wcInstance = Connect().getClient();


*/






function App() {

    
   console.log(" Main App Page reredering-----------------");
   const [wcConnected, setWCConnected]= useState(false);
   let wcInstance;
    
   // wcInstance.onmessage = (event)=>{
   //  const dataFromServer = JSON.parse(event.data);
   //  console.log("Message receved-3", event.data);
   //}
   let sideBarBreakPoint='850px';
        
    const smallerThan750px = useMediaPredicate("(max-width: 990px )");


    const [rerender,setRerender] = useState(false);

    const rerenderHandler=()=>{setRerender(!rerender);}
   
    const [sideNavBarWidth, setWidth] = useState('var(--sideNavBarWidth)');

    const [contract,setContract] = useState(true);

    const expandHandler=()=>{

        //console.log("expand handler called");
        contract && setWidth('var(--sideNavBarWidthOnContract)');
        !contract && setWidth('var(--sideNavBarWidth)');
        setContract(!contract);

    }






   const [dashboardMounted, setDashboardMounted] = useState(false);
   const [courseMounted, setCourseMounted] = useState(false);	
   const [messagesMounted, setMessagesMounted] = useState(false);
   const [emailMounted, setEmailMounted] = useState(false);

   const [discussionMounted, setDiscussionMounted] = useState(false);	
   const [classMounted, setClassMounted] = useState(false);
   const [tasksMounted, setTasksMounted] = useState(false);	
   const [booksMounted, setBooksMounted] = useState(false);
   const [examMounted, setExamMounted] = useState(false);	
   const [classmatesMounted, setClassmatesMounted] = useState(false);
   const [teacherMounted, setTeacherMounted] = useState(false);
   //const [prepareMounted, setProgressMounted] = useState(false);
   //const [analyticsMounted, setAnalticsMounted] = useState(false);	
   const [achievementsMounted, setAchievementsMounted] = useState(false);                
   const [gradesMounted, setGradesMounted] = useState(false);
   //const [calenderMounted, setCalenderMounted] = useState(false);
   //const [diaryMounted, setDiaryMounted] = useState(false);
   //const [helpcenterMounted, setHelpCenterMounted] = useState(false);

   const [generalChatMounted, setGeneralChatMounted] = useState(false);

   const [selectedCourse, getCourseData] = useState(null);
   //const [courseData, getCourseData] = useState([]);

   let selectedCourseId = localStorage.getItem('preferredCourseId')

    	
    useEffect(()=>{
      //console.log("useEffect-1");	   
      let courseId=selectedCourseId;
     	   
      getcoursesbyCourseId({courseId,getCourseData});
      return ()=>{
         getCourseData(selectedCourse=>null);
      }
    },[selectedCourseId,rerender ]);
    
    
   

    
   const [userData,setData]=useState({
   "id": null,	   
   "dashboardcourses": [],
   "dashboard_courses":[],	   
   "usertype":1,
   "noticeids":[]	   
   });
   
   //const [userData,setData] =useState(null);



     	
   useEffect(()=>{
	//console.log("useEffect-2");   
        getuser({setData});
    },[rerender])
  


   //console.log("userData: ", userData);

   
   useEffect(()=>{

   smallerThan750px && setWidth('var(--sideNavBarWidthOnContract)');	  
   smallerThan750px && setContract(false);
   !smallerThan750px && setWidth('var(--sideNavBarWidth)');	   
   !smallerThan750px && setContract(true);


   },[smallerThan750px]);








   

   const [dashboardCourses, getDashboardCourses] = useState([]);
		//useState(userData.id !==null? userData.dashboard_courses: []);



   console.log("userData: ", userData); 


  
  return (
    <div className="edrapp">


    

    
    <Header onPress={expandHandler}  
	    selectedCourse={selectedCourse} 
	    userData={userData} 
	    dashboardCourses={userData.dashboard_courses}
	    rerender={rerenderHandler}
	    /> 
  
    
    { selectedCourseId !==null &&  <>
	   
    <SideToolBar toolBarWidth={sideNavBarWidth}
	         toolBarBkgColor="var(--sideToolBarBkgColor2)"
	         />

    <SideNavBar sideNavBarWidth={sideNavBarWidth} 
	dashboardMounted={dashboardMounted} 
	courseMounted = {courseMounted}   
	messagesMounted={messagesMounted}
        discussionMounted={discussionMounted} 
        classMounted = {classMounted} 
        tasksMounted = {tasksMounted} 
        booksMounted = {booksMounted} 
        examMounted = {examMounted} 
        classmatesMounted = {classmatesMounted}
        teacherMounted = {teacherMounted}
        prepareMounted = {false}
        analyticsMounted ={false}
        achievementsMounted = {achievementsMounted}
        goalsMounted = {false} 
	gradesMounted = {gradesMounted}
        calenderMounted = {false}
        diaryMounted = {false}
        helpcenterMounted = {false}
	rerender={rerenderHandler}   
	userData={userData}   
      />
     </>

     }
    
    { selectedCourseId ===null &&
     <> 
  
     <SideToolBar toolBarWidth={sideNavBarWidth}
	          toolBarBkgColor="var(--sideToolBarBkgColor)"
		  />
     <SideBarDashboard sideNavBarWidth={sideNavBarWidth}
	              generalChatMounted={generalChatMounted}
	              homeMounted={dashboardMounted}
	              emailMounted={emailMounted}
	              userData={userData}
	              setWidth={setWidth}
	              setContract={setContract}
	              
		    />

     </>		    
    }






    
 
    <Switch>

	        	
      <Route exact path='/account/userprofile' >
      <UserProfile sideNavBarWidth={sideNavBarWidth} 
	  selectedCourse={selectedCourse}
	  userData={userData}
	  rerender={rerenderHandler}
	  />
      </Route>

      <Route exact path='/account/settings' >
        <Settings sideNavBarWidth={sideNavBarWidth} 
	  selectedCourse={selectedCourse}
	  userData={userData}
	  />
      </Route>

 
      <Route  path='/dashboard/general' >
        <General sideNavBarWidth={sideNavBarWidth} 
	    passMountInfo={setDashboardMounted} 
	    selectedCourse={selectedCourse} 
	    dashboardCourses={userData.dashboard_courses}
	    userData={userData}
	    socketObj={wcInstance}
	    rerender = {rerenderHandler}
	/>
      </Route>

      <Route path='/course/summary' >
        <Summary 
	    sideNavBarWidth={sideNavBarWidth} 
	    passMountInfo={setCourseMounted}  
	    selectedCourse={selectedCourse}
            userData={userData}
	    rerender={rerenderHandler}
	/>
      </Route>

      {/*
      <Route exact path='/course/syllabus' >
        <Syllabus
            sideNavBarWidth={sideNavBarWidth}
            passMountInfo={setCourseMounted}
            selectedCourse={selectedCourse}
            userData={userData}
        />
      </Route>
      */}


      <Route exact path='/dashboard/generalchat' >
        <VATChat sideNavBarWidth={sideNavBarWidth}
           passMountInfo={setGeneralChatMounted}
           selectedCourse={selectedCourse}
           userData={userData}
        />
      </Route>


	 
      <Route exact path='/course/chat' >
        <VATChat sideNavBarWidth={sideNavBarWidth} 
	   passMountInfo={setMessagesMounted}  
	   selectedCourse={selectedCourse}
	   userData={userData}
	/>
      </Route>
        

      <Route exact path='/home/email' >
        <EMail sideNavBarWidth={sideNavBarWidth} 
	    passMountInfo={setEmailMounted}  
	    selectedCourse={selectedCourse}
	    userData={userData}
	/>
      </Route>

      

      <Route exact path='/messages/tickets' >
        <Tickets sideNavBarWidth={sideNavBarWidth} 
	    passMountInfo={setDiscussionMounted}  
	    selectedCourse={selectedCourse}
	    userData={userData}
	    rerender={rerenderHandler}
	    
	/>
      </Route>
	 

      <Route  path='/course/classes' >
        <ClassOverview sideNavBarWidth={sideNavBarWidth} 
	          passMountInfo={setClassMounted}  
	          selectedCourse={selectedCourse}
                  userData={userData}
	          dashboardCourses={dashboardCourses}
	          onPress={rerenderHandler}
	          rerender={rerenderHandler}
	  />
      </Route>

      <Route exact path='/class/detail' >
          <Detail sideNavBarWidth={sideNavBarWidth} 
	      passMountInfo={setClassMounted}  
	      selectedCourse={selectedCourse}
	      userData={userData}
	  />
      </Route>

      <Route exact path='/class/specifics' >
        <Specifics sideNavBarWidth={sideNavBarWidth} 
	    passMountInfo={setClassMounted}  
	    selectedCourse={selectedCourse}
	  />
      </Route>
      
    
        <Route exact path='/assignment/home' >
        <AssignmentHome sideNavBarWidth={sideNavBarWidth}
                  passMountInfo={setTasksMounted}
                  selectedCourse={selectedCourse}
                  userData={userData}
                  dashboardCourses={dashboardCourses}
                  onPress={rerenderHandler}
          />
        </Route>



        <Route exact path='/books/findbook' >
        <FindBook sideNavBarWidth={sideNavBarWidth}
                  passMountInfo={setBooksMounted}
                  selectedCourse={selectedCourse}
                  userData={userData}
                  dashboardCourses={dashboardCourses}
                  onPress={rerenderHandler}
          />
        </Route>
        
        <Route exact path='/books/read' >
          <Read sideNavBarWidth={sideNavBarWidth}
              passMountInfo={setBooksMounted}
              selectedCourse={selectedCourse}
              userData={userData}
          />
        </Route>

        <Route exact path='/books/insights' >
          <Insights sideNavBarWidth={sideNavBarWidth} 
            passMountInfo={setBooksMounted}  
            selectedCourse={selectedCourse}
          />
         </Route>
         
    


        <Route exact path='/students/all' >
          <Students sideNavBarWidth={sideNavBarWidth}
              passMountInfo={setClassmatesMounted}
              selectedCourse={selectedCourse}
              userData={userData}
          />
        </Route>




         <Route path='/course/exams'>
           <ExamsInCourse
                 sideNavBarWidth={sideNavBarWidth}
                  passMountInfo={setExamMounted}
                  selectedCourse={selectedCourse}
                  userData={userData}
                  dashboardCourses={dashboardCourses}
                  onPress={rerenderHandler}
	         />


        </Route>
         Teacher


	<Route path='/course/teacher'>
           <Teacher
                 sideNavBarWidth={sideNavBarWidth}
                  passMountInfo={setTeacherMounted}
                  selectedCourse={selectedCourse}
                  userData={userData}
                  dashboardCourses={dashboardCourses}
                  onPress={rerenderHandler}
                 />


        </Route>

      

       
	 <Route path='/course/grades'>
             <Grades
                 sideNavBarWidth={sideNavBarWidth}
                  passMountInfo={setGradesMounted}
                  selectedCourse={selectedCourse}
                  userData={userData}
                  dashboardCourses={dashboardCourses}
                  onPress={rerenderHandler}
                 />
         </Route>













     
      <Route exact path='/meetings/overview' >
        <MeetingsOverview sideNavBarWidth={sideNavBarWidth}
                  passMountInfo={setAchievementsMounted}
                  selectedCourse={selectedCourse}
                  userData={userData}
                  dashboardCourses={dashboardCourses}
                  onPress={rerenderHandler}
          />
      </Route>

        	  
      <Route exact path='/meetings/detail' >
          <MeetingsDetail sideNavBarWidth={sideNavBarWidth}
              passMountInfo={setAchievementsMounted}
              selectedCourse={selectedCourse}
              userData={userData}
          />
      </Route>
      


    </Switch>	  

    
    
    
    </div>

  );

 

return (<div> </div>);


}

export default App;
