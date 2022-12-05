import React from "react";

import classes from "./InBoxMailShortView.module.css";

import {ImCheckboxUnchecked} from 'react-icons/im';

import {AiOutlineStar} from 'react-icons/ai';

const InBoxMailShortView = (props) =>{


return (

<div className={classes.inboxMailShortView}>


  <div className={classes.leftSec}> 
   <div className={classes.flexDivLeft}>	
    <ImCheckboxUnchecked/>
    <AiOutlineStar/> 	
    <span>  Pioneer.com </span>	
  </div>

  </div>

  <div className={classes.middleSec}>  
          You missed your progress update this week
  </div>

  <div className={classes.rightSec}> 

	<div className={classes.rightSecFlexDiv}>
	     <span className={classes.emailDisplayContent}> 
	       Hi Bibhuprasad, Its been a while since you joined Pioneer without completing the Fast Track application process
	     </span>
	     <span> 27th Sept 2022 </span>
	</div>
  </div>


</div>
);

}

export default InBoxMailShortView;

