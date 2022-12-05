import React from "react";

import classes from "./SecTitleTopBar.module.css";

import {FaSearch} from 'react-icons/fa';


const SecTitleTopBar = (props) =>{


return (

<div className={classes.secTitleTopBar}>


   <div className={classes.sectionTitle}>  
       <span>	{props.title} </span>

        <div className={classes.searchDiv}>
            <FaSearch className={classes.searchIcon}/>
        </div>

   </div>


</div>
);

}

export default SecTitleTopBar;

