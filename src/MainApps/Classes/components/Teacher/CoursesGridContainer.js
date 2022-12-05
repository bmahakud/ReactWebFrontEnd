import React from 'react';
import classes from './CoursesGridContainer.module.css';
import ClassViewShort from './ClassViewShort_v2';
//import {getuser } from '../../../../../CommonApps/AllAPICalls';

import {Route,Switch, useHistory} from 'react-router-dom';

import ClassDetailView from './ClassDetailView/DetailChildContentDiv';


const CoursesGridContainer =(props)=>{




/*

const [data, setData] = useState({
"dashboardcourses": []
});
const [courseData,getCourseData] = useState([]);

useEffect(()=>{
     getuser({setData});
  },[])


useEffect(()=>{
 let courseIds = data.dashboardcourses;
 console.log('courseIds:', courseIds);	
//getcoursesbyCourseId({courseId, getCourseData});

    courseIds.map((id, index)=>{
       if(id !==0){
         let globalCode=100000+id;
         getcoursesbyglobalCodeArray({globalCode, getCourseData});

       }
    }); 

return ()=>{
 getCourseData(courseData=>[]);

}

},[ data.dashboardcourses, props.rerender]);

*/









return (


 <>

<div className={classes.coursesGridContainer}>

	<Route  exact path='/course/classes' >
	 {  
	    props.selectedCourse !==null && props.selectedCourse.length > 0 && props.selectedCourse[0].classes.map((eclass,index)=>{
               return <ClassViewShort key={index} Class={eclass}  userData={props.userData} rerender={props.rerender} />
            }
           )
	 }
       </Route>

         



        { props.selectedCourse !==null && props.selectedCourse.length > 0 && props.selectedCourse[0].classes.length ===0 && <div className={classes.noCourseWarning}>

               This course does not have any classes. You can start creating classes now!.
               </div>

	}


        {props.selectedCourse !==null && props.selectedCourse.length===0 && 

			<div className={classes.noCourseWarning}> <h2> No Course is selected. You need to select a course before accessing related classes.</h2> </div>


 	}


</div>


       <Route  exact path='/course/classes/1' >


              <ClassDetailView
               userData={props.userData}
               selectedCourse={props.selectedCourse}

             />

        </Route>








</>

);


}

export default CoursesGridContainer;

