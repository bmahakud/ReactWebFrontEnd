import React,{useState} from 'react';
import classes from './MessagesHead.module.css';
import { FaComments } from "react-icons/fa";

import MessagesContainer from './MessagesContainer';



const MessagesHead =(props)=>{


    const [styles, setStyles] = useState({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});

    const onMouseEnterHandler=()=>{
      setStyles({color:'var(--themeColor)',backgroundColor:'var(--headerRightIconsColor)'});
    }


    const onMouseLeaveHandler=()=>{
      setStyles({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});
    }


    const [dropDown, setDropDown] = useState(false);



    const showMessagesHandler=()=>{
     setDropDown(true);

    }














return (


<div className={classes.messagesItemsParentDiv}>

    <button className={classes.ActionItemsButton} 
	onMouseEnter={onMouseEnterHandler} 
	onMouseLeave={onMouseLeaveHandler}  
	style={styles}
	onClick={showMessagesHandler}
	>
        <FaComments className={classes.UsersIcon} style={styles}/>
        {/*
	   <i className={classes.alertMessage}><b>9</b></i>
	*/}
   </button>


      { dropDown &&
        <MessagesContainer  setDropDown={setDropDown}
                                  userData={props.userData}
                                  rerender={props.rerender}
                                  />
        }








</div>

);

}


export default MessagesHead;

