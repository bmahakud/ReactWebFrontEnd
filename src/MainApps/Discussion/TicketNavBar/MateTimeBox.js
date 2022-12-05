import React from "react";
import classes from "./MateTimeBox.module.css";


const MateTimeBox =(props)=>{









return (

<div className={classes.mateTimeBox}>

  { props.data.status ==="open" &&
  <div className={classes.astatus} style={{background:"var(--greenColor1)", color:"white"}}><b> { props.data.status}</b>  </div>
  }

  { props.data.status ==="closed" &&
  <div className={classes.astatus} style={{background:"var(--redColor1)", color:"white"}}><b> { props.data.status}</b>  </div>
  }




</div>
);

}

export default MateTimeBox;

