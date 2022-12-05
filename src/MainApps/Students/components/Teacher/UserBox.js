

import classes from './UserBox.module.css';



const UserBox=(props)=>{


console.log("props.user.usertype: ",props.user);

return (

 <div className={classes.userBox}>

   <img src={props.userImage} className={classes.userImage}/>	
   <div className={classes.nameInfo}> 
	<b>{props.userName}  </b>
	<span style={{color:'green'}}> {props.user.usertype===1 && "Teacher"}</span>
	<span style={{color:'green'}}> {props.user.usertype===2 && "Student"}</span>
	<button type="button">  Send invite</button>
   </div>

 </div>

);

}

export default UserBox;
