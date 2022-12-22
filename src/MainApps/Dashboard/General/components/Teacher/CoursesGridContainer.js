import React,{useState, memo, useEffect} from 'react';
import classes from './CoursesGridContainer.module.css';
import CourseViewDashboard from './CourseViewDashboard_v2';
import CreateCourseForm from './Forms/CreateCourseForm';
import welcomeimg from './welcome.png';


const CoursesGridContainer =(props)=>{




   const [showCreateCourseForm, setShowCreateCourseForm] = useState(false);



   const closecreateCourseForm =()=>{
        setShowCreateCourseForm(false);
        props.rerender();
    }


   const [gridContainerStyle, setGridContainerStyle]=useState({
   gridTemplateColumns: 'repeat(auto-fit, minmax( calc( 9 * var(--headerHeight) ), calc( 9 * var(--headerHeight)) )'

   });

   useEffect(()=>{

    props.courseData.length === 1 && setGridContainerStyle({
     gridTemplateColumns: 'repeat(auto-fit, minmax( calc( 9 * var(--headerHeight) ), calc( 10 * var(--headerHeight))) )'


    });

   props.courseData.length > 1 && setGridContainerStyle({
     gridTemplateColumns: 'repeat(auto-fit, minmax( calc( 9 * var(--headerHeight) ), 1fr) )'

     });



   },[props.courseData.length]);







return (


<>


    <div className={classes.switchBar}>

      <button className={classes.createCourseButton} type="button" onClick={()=>setShowCreateCourseForm(true)}> 
	<b> +Create a course</b>
      </button>

      {/*	
      <span className={classes.instructions}> Dashboard provides summary of all your courses at one place. Go inside the  courses to know more details about a single course </span>	
     */}
    </div>	

    {showCreateCourseForm && <CreateCourseForm onPress = {closecreateCourseForm} />}


     <div className={classes.coursesGridContainer} style={gridContainerStyle}>

	{props.courseData.map((course,index)=>{

               return <CourseViewDashboard key={index} 
		                           Course={course} 
		                           rerender={props.rerender}
		                           userData={props.userData}
			                   />

           }

        )}








</div>


        {  props.courseData.length ===0 &&
                   <div className={classes.noCourseMessage}>
		       <img  src={welcomeimg} className={classes.welcomeImg}/> 
                        <span> There are no courses available in your dashboard.
                            Create a course and share the course code with your students to get started.
                        </span>
                   </div>
        }







</>	

);


}

export default memo(CoursesGridContainer);

