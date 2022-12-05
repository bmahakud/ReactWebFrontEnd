import React,{useState,useEffect} from 'react';
import base from '../CommonAppUtilities/AppContentDiv.module.css';
import classes from './VATChatContentDiv.module.css';
import ChatNavBar from './ChatNavBar/ChatNavBar';
//import ChatWindow from './ChatWindow/ChatWindowNew';
//import ChatWindow from './ChatWindow/ChatWindowNewBackUp';
import ChatWindow from './ChatWindow/ChatWindowTest';
import {getallusers,getuser} from '../../CommonApps/AllAPICalls';



const VATChatContentDiv=(props)=>{





    const [clickedGroupId,setClickedGroupId]=useState(0);

    //const delay = ms => new Promise(res => setTimeout(res, ms));

    const switchGroupHandler=async(groupId)=>{
      
	    //setClickedGroupId(groupId);
	    //localStorage.setItem('clickedChatGroupId',groupId );
	    //await delay(3000);
	    setClickedGroupId(groupId);
    }






return (

<div className={base.appContentDiv}>

 <div className={classes.contentDiv}>

   
   <ChatNavBar userData={props.userData} 
	       switchGroupHandler={switchGroupHandler}
	       selectedCourse={props.selectedCourse}
	/>	

	 	
   <ChatWindow userData={props.userData}
	       clickedGroupId={clickedGroupId}   
	        />
      
  

 </div>
</div>

);

}


export default VATChatContentDiv;
