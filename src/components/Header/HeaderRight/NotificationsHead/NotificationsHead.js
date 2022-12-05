import React,{useState} from 'react';
import classes from './NotificationsHead.module.css';
import { FaBell } from "react-icons/fa";
import NotificationContainer from './NotificationContainer';

const NotificationsHead =(props)=>{


     const [styles, setStyles] = useState({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});

     const onMouseEnterHandler=()=>{
        setStyles({color:'var(--themeColor)',backgroundColor:'var(--headerRightIconsColor)'});
     }


     const onMouseLeaveHandler=()=>{
         setStyles({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});
     }

     const [dropDown, setDropDown] = useState(false);



     const showNotificationHandler=()=>{
     setDropDown(true);
 
     }




return (

<div className={classes.notificationItemsParentDiv}>	

      <button className={classes.ActionItemsButton} 
	      onMouseEnter={onMouseEnterHandler} 
	      onMouseLeave={onMouseLeaveHandler}  
	      style={styles}
	      onClick={showNotificationHandler}
	      >
          <FaBell className={classes.UsersIcon} style={styles}/>
          {/*	
              <i className={classes.alertMessage}><b>10</b></i>
         */}
     </button>

      { dropDown &&
        <NotificationContainer  setDropDown={setDropDown}
                                  userData={props.userData}
                                  rerender={props.rerender}
                                  />
        }
	







</div>

);

}


export default NotificationsHead;
