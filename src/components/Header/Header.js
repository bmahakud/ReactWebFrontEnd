import classes from './Header.module.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';




function Header(props){

return (

   <>
   <div className={classes.styleDivHeader}> </div>	
   <header className={classes.header}>

     <HeaderLeft 
	onPress = {props.onPress} 
	selectedCourse={props.selectedCourse} 
	userData={props.userData} 
	dashboardCourses ={props.dashboardCourses}
     />

     <HeaderRight
	userData={props.userData}
	dashboardCourses ={props.dashboardCourses}
	rerender={props.rerender}
	/>	

   </header>
  </>


);
}


export default Header;
















