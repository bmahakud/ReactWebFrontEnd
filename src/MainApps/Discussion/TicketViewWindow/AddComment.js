import React,{useState,useEffect} from "react";
import classes from "./AddComment.module.css";
import {BsPlus} from "react-icons/bs";
import {postticketcomment,getuser} from '../../../CommonApps/AllAPICalls';




const AddComment = (props) =>{


  const [textBox, showTextBox ] = useState(false);


  const initialFormData = Object.freeze({
        comment: "NoComments",
        });




  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
                updateFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim(),
                });
        };


   const textBoxHandler=()=>{
     showTextBox(true);
   }


   const [data, setData] = useState({});
    useEffect(()=>{
    getuser({setData});
  },[]);



  const [ticketId, setTicketId] = useState(props.ticketId);
      useEffect(()=>{
       setTicketId(ticketId=>props.ticketId);	
   },[props.ticketId]);	



 const [userId, setUserId] = useState(data.id);	
  useEffect(()=>{
     setUserId(userId=>data.id);
   },[data.id]);






  const comment=formData.comment;

  const handleSubmit = (e) => {
        e.preventDefault();	 
	//console.log("ticket Id", ticketId);
	//console.log("userId: ", userId);
	//console.log("comment: ", comment);
	postticketcomment({ticketId,userId,comment});
        showTextBox(false);
	props.newCommentAdded(current=>!current);  
  }



return(

<div className={classes.ticketComments}>


  <div className={classes.commentTitle}> 
 
	{ !textBox && <button className={classes.commenterButton}  onClick={textBoxHandler} >  <BsPlus/><span>Add a comment</span> </button> }
  </div>


	{ textBox && <div className={classes.descriptionTextBox}>  


           <form className={classes.addCommentForm} onSubmit={handleSubmit}>	

                   <div className={classes.textarea_Div} >
                          <textarea
                             type="text"
                             onChange={handleChange}
                             name="comment"
                             className={classes.inputText_field}
                             placeholder="Write your comment"
                             defaultValue=""
                          />
                    </div>









		 <button type="submit"  className= {classes.submit_button} ><b>Post comment </b> </button> 
           </form>

        </div> }

 
 <div> 

</div>	




</div>

);

}

export default AddComment;


