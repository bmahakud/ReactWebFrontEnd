import classes from './All.module.css';
import React,{useState} from 'react';
import axios from 'axios';

function All(){
 
   
    const initialFormData = Object.freeze({

        name: "",
        description: "",

        });

    const [formData, setFormData] = useState(initialFormData);	


    const onChangeHandler=(e)=>{

      console.log("---userinput--", e.target.value)	    

      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim(),
                });



    }

  console.log("formData--- ", formData);



   const submitFormData=()=>{


   axios
      .put("https://webapp.diracai.com/api/assignment/create/3/", {
        title: "Hello World!",
        description: "This is a new post."
      })
     .then((response) => {
        console.log("---", response.data);
      });




   }


  return(
      <div className={classes.alldiv}>


       <input name="name" onChange={onChangeHandler}/>
       <input name="description" onChange={onChangeHandler}/> 

       <button type="button" onClick={submitFormData}> Submit </button>

     </div>
    );
};
export default All;
