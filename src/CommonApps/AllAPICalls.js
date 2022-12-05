import axiosInstance from '../axios';
import {Logout} from './Logout';


export const getuser =({setData})=>{
  


    axiosInstance.get()
                  .then((res) => {
                        setData(data=>res.data);
                   })
                  .catch((error)=>{
                      if(error.response.status===401){
			 Logout();     
                      }

                   });

}



export const putuser =({data, formData})=>{


        axiosInstance.put('',{
        "email":data.email,
        "username":data.username,
        "firstname": formData.firstname,
        "lastname": formData.lastname,
        "gender": formData.gender,
        "role": "student",
        "position":formData.position,
        "dateofbirth": formData.dateofbirth,


                        })
                        .then((res) => {

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
		              Logout();		     
                            }

                        });



}


export const getticket =({ticketId, setData})=>{


       axiosInstance.get(`tickets/${ticketId}/`).then((res) => {
                        setData(data=>res.data);
                })
               .catch((error)=>{
                     if(error.response.status===401){
		      Logout();	     

                      }


                });




}


export const getalltickets = ({setData})=>{


   axiosInstance.get(`tickets/`).then((res) => {
                        setData(data=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
		     Logout();	     

                      }


                });


}


export const getuserbyId = ({userId, setUserData})=>{

   axiosInstance.get(`/${userId}/`).then((res) => {
                        setUserData(userData=>res.data);
                })
	        .catch((error)=>{
                     if(error.response.status===401){
		      Logout();	     

                      }

                     if (error.response.status===404){console.log("here is the error");}



                });

}
















export const getticketscategory = ({setTicketType})=>{


   axiosInstance.get(`tickets/category/`).then((res) => {
                        setTicketType(data=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });


}


export const getcategorybyId = ({ticketCategory, setCatData})=>{


   axiosInstance.get(`tickets/category/${ticketCategory}/`).then((res) => {
                        setCatData(data=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });


}



export const getticketcategorybyId = ({courseId, getCategoryData})=>{


   axiosInstance.get(`tickets/categoriesbycourseid/${courseId}/`).then((res) => {
                        getCategoryData(data=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });


}




export const createticket = ({formData,courseId,props})=>{

     axiosInstance
        .put(`tickets/createticket/${courseId}/`,{

    "title": formData.title,
    "category":formData.category,
    "visibility": formData.visibility,
    "priority": formData.priority,
    "content": formData.content,


                        })
                        .then((res) => {
		        props.rerender();
                })
         .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}





export const editticket = ({formData,ticketId,props})=>{

     axiosInstance
        .put(`tickets/editticket/${ticketId}/`,{

         "title": formData.title,
         "category":formData.category,
         "visibility": formData.visibility,
         "priority": formData.priority,
         "content": formData.content,


                        })
                        .then((res) => {
                        props.rerender();
                })
         .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}










export const postticketcomment = ({ticketId, userId, comment})=>{


  axiosInstance
        .put(`tickets/createcommentbyticketId/${ticketId}/`,{           
        "commenter": userId,
        "commenttext": comment

                        })
                        .then((res) => {
                })
         .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}





export const getticketsbycourseid = ({courseId, getAllTicketData, pageNo})=>{


   axiosInstance.get(`tickets/ticketsbycourseId/${courseId}/?page=${pageNo}`).then((res) => {
                        getAllTicketData(allTicketData=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });


}








export const getcomments = ({setCommentObj,ticketId})=>{

     axiosInstance.get(`tickets/comments/${ticketId}/`).then((res) => {
                        setCommentObj(commentObj=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}



export const getallusers = ({ setUsersData})=>{

   axiosInstance.get(`/allusers/`).then((res) => {
                        setUsersData(userData=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}



export const getfewusers = ({num, getFewUsers})=>{



       axiosInstance.get(`/fewusers/${num}`).then((res) => {
                        getFewUsers(fewUsers=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });


}

//api/usersearch/?search=b

export const usersearchgeneral = ({pageno, searchString, getSearchedUsers})=>{

 axiosInstance.get(`/usersearch/?page=${pageno}&search=${searchString}`).then((res) => {
                        getSearchedUsers(searchedUsers=>res.data);
	                console.log("res.data: ", res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}


export const getpersonalgeneralchatgroups = ({ getChatGroups})=>{

 axiosInstance.get(`getgeneralchatgroups/`).then((res) => {
                     
                   getChatGroups(chatGroups=>res.data);

                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}



export const getcoursechatgroups =({getCourseChatGroups,courseId})=>{



axiosInstance.get(`getcoursechatgroups/${courseId}/`).then((res) => {

                   getCourseChatGroups(courseChatGroups=>res.data);

                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}









export const postchatcomment = ({groupId, userId, comment})=>{


  axiosInstance
        .post(`chat/comments/`,{
        "groupId": groupId,
        "commenter": userId,
        "commenttext": comment,

                        })
                        .then((res) => {
                })
         .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}



export const getchatcomments = ({setChatCommentObj,groupId, pageno})=>{

     axiosInstance.get(`chat/comments/${groupId}/?page=${pageno}`).then((res) => {
                        setChatCommentObj(commentObj=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}





export const getgroupchatcomments = ({setChatCommentObj,groupId})=>{


      axiosInstance.get(`chat/comments/${groupId}/`).then((res) => {
                        setChatCommentObj(commentObj=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}





export const createchatgroup = ({groupname,groupMembers})=>{


  axiosInstance
        .post(`chat/groups/`,


           {
             "name": groupname,
             "displayname": groupname,
             "groupuserObjects": groupMembers,
             "groupType": "oneoone"
           }


	           )
                        .then((res) => {
                })
         .catch((error)=>{
                    if(error.response.status===400){alert("User is already added. Refresh the page and try again.");}

                     if(error.response.status===401){
                     Logout();

                      }


                });

}




export const checkifuseradded = ({userId, setUserExists, createOneOOneGroup})=>{

     axiosInstance.get(`checkifuserisadded/${userId}/`).then((res) => {
                        setUserExists(userExists=>res.data);
	                console.log("userExist: ", res.data.exists);
                        if( !res.data.exists){
                          createOneOOneGroup({userId});
			  console.log("Used added");
			}else{
	           
	              console.log("User exists...");
                           }
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}




















export const getchatgroups = ({getChatGroups})=>{


    axiosInstance.get(`chat/groups/`)


                        .then((res) => {

                    getChatGroups(chatGroups=>res.data);

                })
         .catch((error)=>{

                     if(error.response.status===401){
                     Logout();

                      }


                });

}





export const getchatgroupbyId = ({groupId, getChatGroupById})=>{


    axiosInstance.get(`chat/groups/${groupId}/`)


                        .then((res) => {

                    getChatGroupById(chatGroup=>res.data);

                })
         .catch((error)=>{

                     if(error.response.status===401){
                     Logout();

                      }


                });

}





/*
export const getgeneralchatgroups = ({getChatGroups})=>{


    axiosInstance.get(`chat/groups/`)


                        .then((res) => {

                    getChatGroups(chatGroups=>res.data);

                })
         .catch((error)=>{

                     if(error.response.status===401){
                     Logout();

                      }


                });

}
*/






export const editdashboardcourse = ({formData, courseId, props, setEditState})=>{

 axiosInstance.put(`course/editonedashboardcourse/${courseId}/`,{

    "courseShortName": formData.courseShortName,
    "courseLocalCode": formData.courseLocalCode,
    "courseStatus": formData.courseStatus,
    "courseStartDate": formData.courseStartDate,
    "courseEndDate": formData.courseEndDate,
    "abouttheCourse": formData.abouttheCourse,
    "instituteName": formData.instituteName



                        })
                        .then((res) => {
                             setEditState("notSaving");
                             props.onPress();
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}

export const editcoursesummary = ({formData, courseId, props, setEditState})=>{

 axiosInstance.put(`course/editonedashboardcourse/${courseId}/`,{

    "courseShortName": formData.courseShortName,
    "courseLocalCode": formData.courseLocalCode,
    "courseStatus": formData.courseStatus,
    "courseStartDate": formData.courseStartDate,
    "courseEndDate": formData.courseEndDate,
    "abouttheCourse": formData.abouttheCourse,
    "instituteName": formData.instituteName,
    "coursecredit": formData.coursecredit,	 



                        })
                        .then((res) => {
                             setEditState("notSaving");
                             props.rerender();
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}







export const createcourse = ({formData,data, setCreateState, props})=>{

     axiosInstance
        .post(`course/create/`,{


        "teacher": data.id,
        "courseShortName": formData.courseShortName,
        "courseFullName": formData.courseFullName,
        "courseLocalCode": formData.courseLocalCode,
        "courseStartDate": formData.courseStartDate,
        "courseEndDate": formData.courseEndDate,
        "designedFor": formData.classname,
	"educationboard": formData.educationboard,	
        "subject": formData.subject,
        "abouttheCourse": formData.abouttheCourse,
        "instituteName": formData.instituteName,
        "instituteCity": "BBSR",
        "instituteCountry": "India",
        

                        })
                        .then((res) => {
                                setCreateState("notCreating");
				props.onPress();
                })
         .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}



export const addcoursetodashboard =({courseId, props})=>{




    axiosInstance.put(`course/addcourse/${courseId}/`,{

                        })
                        .then((res) => {

                             props.onPress();
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}




export const removecoursefromdashboard =({courseId, props})=>{




    axiosInstance.put(`course/remove/${courseId}/`,{

                        })
                        .then((res) => {

                             props.rerender();
                          })

                        .catch((error)=>{

			     	
                             if(error.response.status===401){
                              //console.log('error.response: ', error.response);
                              Logout();
                            }

                        });

}







export const getclassrank = ({setClassRank})=>{


   axiosInstance.get(`course/coursecategories/`).then((res) => {
                        setClassRank(data=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });


}



export const getclassobjectbyId = ({classId, setClassObject})=>{

   axiosInstance.get(`course/class/${classId}/`).then((res) => {
                        setClassObject(data=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }
                });
}



export const getmeetingobjectbyId = ({meetingId, setMeetingObject})=>{

   axiosInstance.get(`meeting/object/${meetingId}/`).then((res) => {
                        setMeetingObject(data=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }
                });
}





export const getsubjectsfromclassandboard = ({classId, boardId ,setSubjectsObject}) =>{


axiosInstance.get(`course/subjects/${classId}/${boardId}`).then((res) => {
                        setSubjectsObject(data=>res.data);

                })
                .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }
                });







}





export const getteachercourses = ({ teacherId, setTeacherCourses})=>{

   axiosInstance.get(`course/names/${teacherId}`).then((res) => {
                        setTeacherCourses(courseData=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}




export const getcoursesbyglobalCode = ({ globalCode, getCourseData})=>{

   axiosInstance.get(`course/code/${globalCode}/`).then((res) => {
                        getCourseData(courseData=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}




export const getcoursesbyCourseId = ({ courseId, getCourseData})=>{

   axiosInstance.get(`course/object/${courseId}/`).then((res) => {
                        getCourseData(courseData=>[res.data]);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}

export const getvideosbyCourseId = ({pageNo, courseId, getVideosData})=>{

   axiosInstance.get(`course/getvideosbycourseId/${courseId}/?page=${pageNo}`).then((res) => {
                        getVideosData(videosData=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}



export const getfilesbyCourseId = ({pageNo, courseId, getFilesData})=>{

   axiosInstance.get(`course/getfilesbycourseId/${courseId}/?page=${pageNo}`).then((res) => {
                        getFilesData(filesData=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}









export const getlinksbyCourseId = ({pageNo, courseId, getLinksData})=>{

   axiosInstance.get(`course/getlinksbycourseId/${courseId}/?page=${pageNo}`).then((res) => {
                        getLinksData(linksData=>res.data);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}

















export const checkcourseexistsindashboard = ({ courseId, checkCourseExists})=>{

   axiosInstance.get(`course/courseexistindashboard/${courseId}/`).then((res) => {
                        checkCourseExists(courseExists=>[res.data]);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}






export const getcoursesbyCourseIdArray = ({ courseId, getDashboardCourses})=>{

   axiosInstance.get(`course/object/${courseId}/`).then((res) => {
                        getDashboardCourses(dashboardCourses=>[...dashboardCourses,res.data]);
                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}





export const Appenn=({courseId, allCourses})=>{

  axiosInstance.get(`course/object/${courseId}/`).then(()=>(
    allCourses.push({"bibhu": 'hello baby'})
    )
  );

 }








export const getcoursesbyCourseIdSimpleArray = ({ courseId, getCourses})=>{

   axiosInstance.get(`course/object/${courseId}/`).then((res) => {
	              getCourses(courses=>[...courses,res.data]);         

                    }).catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}















export const getcoursesbyglobalCodeArray = ({ globalCode, getCourseData})=>{

   axiosInstance.get(`course/code/${globalCode}/`).then((res) => {
               let newArray=res.data;
               getCourseData(courseData => [...courseData, ...newArray]);



                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });


}




export const putcourseuser =({data})=>{


        axiosInstance.put('',{
        "email":data.email,
        "username":data.username,
        "firstname": data.firstname,
        "lastname": data.lastname,
        "gender": data.gender,
        "role": data.userype,
        "position":data.position,
        "dateofbirth": data.dateofbirth,
	"dashboardcourses":data.dashboardcourses,	


                        })
                        .then((res) => {


                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });
}





export const addyoutubevideotocourse =({formData, courseId, props, setEditState})=>{


        axiosInstance.put(`course/addyoutubevideo/${courseId}/`,{
        "name":formData.name,
        "link":formData.link,
        "description": formData.description,


                        })
                        .then((res) => {
		          setEditState("notSaving");		
                          props.onPress();
                       
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });
}



export const addlinktocourse =({formData, courseId, props, setEditState})=>{


        axiosInstance.put(`course/addlinktocourse/${courseId}/`,{
        "name":formData.name,
        "link":formData.link,
        "description": formData.description,


                        })
                        .then((res) => {
                          setEditState("notSaving");
                          props.onPress();

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });
}













export const putdashboardcourses =({data})=>{


        axiosInstance.put('dashboardcourses/',{
        "dashboardcourses":data.dashboardcourses,


                        })
                        .then((res) => {


                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });
}






export const deletedashboardcourses =({dashboardcourses})=>{


        axiosInstance.put('dashboardcourses/',{
        "dashboardcourses":dashboardcourses,


                        })
                        .then((res) => {


                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });
}




export const deleteacourse = ({courseId, props})=>{


	  axiosInstance.delete(`course/delete/${courseId}/`,{


                        })
                        .then((res) => {
		        props.rerender();		
                        console.log("deleted---");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}












export const putcourseenrollrequest =({courseId})=>{


        axiosInstance.put(`course/enrollrequest/${courseId}/`,{

	})
                        .then((res) => {


                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });



}


export const putcourseenroll =({courseId, requesterId, setApproveState,  props})=>{


        axiosInstance.put(`course/enroll/${courseId}/`,{
        "requesterId":requesterId,
        		

        })
                        .then((res) => {
                           setApproveState("notLoading");
			   props.rerender();
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });
}




export const courseenrollrequestreject =({courseId, requesterId, setApproveState,  props})=>{


        axiosInstance.put(`course/enrollrequestreject/${courseId}/`,{
        "requesterId":requesterId,


        })
                        .then((res) => {
                           setApproveState("notLoading");
                           props.rerender();
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });
}










export const createnotice = ({data, formData, selectedCourseIds, props})=>{

     axiosInstance
        .post(`noticeboard/all/`,{


		"creater": data.id,
                "noticeTitle": formData.noticeTitle,
                "noticeText": formData.noticeText,
                "postCourses": selectedCourseIds,
                "noticefile": null









	      })
                        .then((res) => {
			 props.onPress();
                         props.rerender();

                })
         .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }


                });

}








export const getnotice = ({getNoticeData})=>{

   axiosInstance.get(`noticeboard/all/`).then((res) => {
               
	     getNoticeData(noticeData => res.data);



                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}











export const getnoticebyId = ({noticeid, getNoticeData})=>{

   axiosInstance.get(`noticeboard/all/${noticeid}`).then((res) => {

               let newNotice=res.data;
               getNoticeData(courseData => [...courseData, newNotice]);


                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}





export const getdashboardnotice = ({ getDashboardNotice })=>{

   axiosInstance.get(`noticeboard/dashboardpersonalnotices/`).then((res) => {

               getDashboardNotice(dashboardNotice => res.data);


                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}




















export const getenrolledstudents = ({courseId, getEnrolledData})=>{

   axiosInstance.get(`course/enroll/${courseId}/`).then((res) => {

             getEnrolledData(enrolledData => res.data);

                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}





export const getsyllabusfromId = ({syllabusId, getSyllabusData})=>{


axiosInstance.get(`syllabus/names/${syllabusId}/`).then((res) => {

             getSyllabusData(syllabusData => res.data);

                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });		

}







export const getchapterfromId = ({chapterId, getChapterData})=>{


axiosInstance.get(`syllabus/chapter/${chapterId}/`).then((res) => {

             getChapterData(chapterData => [...chapterData, res.data]);


                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }


                });

}







export const getsectionfromId = ({sectionId, getSectionData})=>{


axiosInstance.get(`syllabus/section/${sectionId}/`).then((res) => {

             getSectionData(sectionData => res.data);

                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }

                });

}



export const gettopicfromId = ({topicId, getTopicData})=>{


axiosInstance.get(`syllabus/topic/${topicId}/`).then((res) => {

             getTopicData(topicData => res.data);

                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }
                });

}








export const putsectiondata =({sectionid, topicData})=>{


        axiosInstance.put(`syllabus/section/${sectionid}/`,{
       
          "id": sectionid,
          "name": "Section-2",
          "topics": topicData,


                        })
                        .then((res) => {
                        //console.log("hhhhh---",topicData);

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}


export const createnewsection =({ sectionPostData })=>{


        axiosInstance.post(`syllabus/section/`,{

         
          "name": sectionPostData.name,
          "topics": [],
	  "chapterid":sectionPostData.chapterid,
	  "sectionnum":1


                        })
                        .then((res) => {
                        
				//console.log("section added");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}








export const deletesectiondata =({sectionid })=>{


        axiosInstance.delete(`syllabus/section/${sectionid}/`,{


                        })
                        .then((res) => {
                        console.log("deleted---");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}









export const deletechapterdata =({chapterId ,props})=>{
       console.log("chap Id: ", chapterId);

        axiosInstance.delete(`syllabus/chapter/${chapterId}/`,{


                        })
                        .then((res) => {
                        //console.log("chapter deleted---");
                          props.rerender();

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}



export const createnewchapter =({ formData, props })=>{


        axiosInstance.post(`syllabus/chapter/`,{

            
              "name": formData.chapterTitle,
              "sections": [],
              "chapternum": formData.chapterNumber,
	       "syllabusid":formData.syllabusId	
            


                        })
                        .then((res) => {

				props.onPress();
                                //console.log("chapter added", formData.syllabusId);

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}




export const getchapternumbers = ({setChapterNumbers})=>{


axiosInstance.get(`syllabus/chapternumber/`).then((res) => {

             setChapterNumbers(chapterNumbers => res.data);

                })
                .catch((error)=>{
                     if(error.response.status===401){
                      Logout();

                      }
                });

}



//2022-12-03T03:15:00Z
export const createnewclass =({ formDataSingleClass, props })=>{


        axiosInstance.post(`class/all/`,{

        "courseId": formDataSingleClass.courseId,
        "serialNo": formDataSingleClass.serialNo,
        "classStatus": formDataSingleClass.classStatus,
        "classdate": formDataSingleClass.classdate,
        "classtime": formDataSingleClass.classtime,
	"datetime": formDataSingleClass.datetime,
        "duration": formDataSingleClass.duration,
        "meetingLink": formDataSingleClass.meetingLink,
        "roomNo": formDataSingleClass.roomNo,
        "chapter": formDataSingleClass.chapter,
        "topics": formDataSingleClass.topics

                        })
                        .then((res) => {
                                 props.onPress();
                                console.log("class added");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}




export const createmulticlass =({ formDataMultiClass,setCreating })=>{


        axiosInstance.post(`class/multicreate/`,{

        "courseId": formDataMultiClass.courseId,
        "serialNo": formDataMultiClass.serialNo,
        "classStatus": formDataMultiClass.classStatus,
        "classdate": "2022-03-31",
        "classtime": formDataMultiClass.classtime,
        "duration": formDataMultiClass.duration,
        "meetingLink": formDataMultiClass.meetingLink,
        "roomNo": formDataMultiClass.roomNo,
        "chapter": formDataMultiClass.chapter,
        "topics": formDataMultiClass.topics,	

	"startdate": formDataMultiClass.classDateStart,
        "enddate": formDataMultiClass.classDateEnd,

	"checkedMon": formDataMultiClass.checkedMon,	
        "mondaytime": ("classtimeMonday" in formDataMultiClass)? formDataMultiClass.classtimeMonday: "00:00:00", 
        "mondayduration": ("selecteddurationMon" in formDataMultiClass)? formDataMultiClass.selecteddurationMon: 0,

        "checkedTues": formDataMultiClass.checkedTues,
        "tuesdaytime": ("classtimeTuesday" in formDataMultiClass)? formDataMultiClass.classtimeTuesday: "00:00:00",
        "tuesdayduration": ("selecteddurationTues" in formDataMultiClass)? formDataMultiClass.selecteddurationTues: 0, 

        "checkedWed": formDataMultiClass.checkedWed,
        "wednesdaytime": ("classtimeWednesday" in formDataMultiClass)? formDataMultiClass.classtimeWednesday: "00:00:00",
        "wednesdayduration": ("selecteddurationWed" in formDataMultiClass)? formDataMultiClass.selecteddurationWed: 0,



        "checkedThurs": formDataMultiClass.checkedThurs,
        "thursdaytime": ("classtimeThursday" in formDataMultiClass)? formDataMultiClass.classtimeThursday: "00:00:00",
        "thursdayduration": ("selecteddurationThurs" in formDataMultiClass)? formDataMultiClass.selecteddurationThurs: 0,

	"checkedFri": formDataMultiClass.checkedFri,
        "fridaytime": ("classtimeFriday" in formDataMultiClass)? formDataMultiClass.classtimeFriday: "00:00:00",
        "fridayduration": ("selecteddurationFri" in formDataMultiClass)? formDataMultiClass.selecteddurationFri: 0,	

        "checkedSat": formDataMultiClass.checkedSat,
        "saturdaytime": ("classtimeSaturday" in formDataMultiClass)? formDataMultiClass.classtimeSaturday: "00:00:00",
        "saturdayduration": ("selecteddurationSat" in formDataMultiClass)? formDataMultiClass.selecteddurationSat: 0,

        "checkedSun": formDataMultiClass.checkedSun,
        "sundaytime": ("classtimeSunday" in formDataMultiClass)? formDataMultiClass.classtimeSunday: "00:00:00",
        "sundayduration": ("selecteddurationSun" in formDataMultiClass)? formDataMultiClass.selecteddurationSun: 0,





                        })
                        .then((res) => {
                                setCreating(creating=>false);
                                console.log("class added");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}





export const createnewmeeting =({ formDataSingleClass })=>{


        axiosInstance.post(`meeting/all/`,{

        "name": formDataSingleClass.name,		
        "courseId": formDataSingleClass.courseId,
        "serialNo": formDataSingleClass.serialNo,
        "meetingStatus": formDataSingleClass.meetingStatus,
        "meetingdate": formDataSingleClass.meetingdate,
        "meetingtime": formDataSingleClass.meetingtime,
        "duration": formDataSingleClass.duration,
        "meetingLink": formDataSingleClass.meetingLink,
        "roomNo": formDataSingleClass.roomNo,
        "chapter": formDataSingleClass.chapter,
        "topics": formDataSingleClass.topics,
	"creater": formDataSingleClass.creater	

                        })
                        .then((res) => {

                                console.log("meeting added");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}



export const createnewmeetingpersonal =({ formDataSingleClass })=>{


        axiosInstance.post(`meeting/allpersonal/`,{

        "name": formDataSingleClass.name,
        "courseId": formDataSingleClass.courseId,
        "serialNo": formDataSingleClass.serialNo,
        "meetingStatus": formDataSingleClass.meetingStatus,
        "meetingdate": formDataSingleClass.meetingdate,
        "meetingtime": formDataSingleClass.meetingtime,
        "duration": formDataSingleClass.duration,
        "meetingLink": formDataSingleClass.meetingLink,
        "roomNo": formDataSingleClass.roomNo,
        "chapter": formDataSingleClass.chapter,
        "topics": formDataSingleClass.topics,
        "creater": formDataSingleClass.creater

                        })
                        .then((res) => {

                                console.log("meeting added");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}











export const createmultimeeting =({ formDataMultiClass,setCreating })=>{


        axiosInstance.post(`meeting/multicreate/`,{

        "courseId": formDataMultiClass.courseId,
        "serialNo": formDataMultiClass.serialNo,
        "meetingStatus": formDataMultiClass.meetingStatus,
        "meetingdate": "2022-03-31",
        "meetingtime": formDataMultiClass.meetingtime,
        "duration": formDataMultiClass.duration,
        "meetingLink": formDataMultiClass.meetingLink,
        "roomNo": formDataMultiClass.roomNo,
        "chapter": formDataMultiClass.chapter,
        "topics": formDataMultiClass.topics,
        "creater": formDataMultiClass.creater,

        "startdate": formDataMultiClass.classDateStart,
        "enddate": formDataMultiClass.classDateEnd,

        "checkedMon": formDataMultiClass.checkedMon,
        "mondaytime": ("classtimeMonday" in formDataMultiClass)? formDataMultiClass.classtimeMonday: "00:00:00",
        "mondayduration": ("selecteddurationMon" in formDataMultiClass)? formDataMultiClass.selecteddurationMon: 0,

        "checkedTues": formDataMultiClass.checkedTues,
        "tuesdaytime": ("classtimeTuesday" in formDataMultiClass)? formDataMultiClass.classtimeTuesday: "00:00:00",
        "tuesdayduration": ("selecteddurationTues" in formDataMultiClass)? formDataMultiClass.selecteddurationTues: 0,

        "checkedWed": formDataMultiClass.checkedWed,
        "wednesdaytime": ("classtimeWednesday" in formDataMultiClass)? formDataMultiClass.classtimeWednesday: "00:00:00",
        "wednesdayduration": ("selecteddurationWed" in formDataMultiClass)? formDataMultiClass.selecteddurationWed: 0,



        "checkedThurs": formDataMultiClass.checkedThurs,
        "thursdaytime": ("classtimeThursday" in formDataMultiClass)? formDataMultiClass.classtimeThursday: "00:00:00",
        "thursdayduration": ("selecteddurationThurs" in formDataMultiClass)? formDataMultiClass.selecteddurationThurs: 0,

        "checkedFri": formDataMultiClass.checkedFri,
        "fridaytime": ("classtimeFriday" in formDataMultiClass)? formDataMultiClass.classtimeFriday: "00:00:00",
        "fridayduration": ("selecteddurationFri" in formDataMultiClass)? formDataMultiClass.selecteddurationFri: 0,

        "checkedSat": formDataMultiClass.checkedSat,
        "saturdaytime": ("classtimeSaturday" in formDataMultiClass)? formDataMultiClass.classtimeSaturday: "00:00:00",
        "saturdayduration": ("selecteddurationSat" in formDataMultiClass)? formDataMultiClass.selecteddurationSat: 0,

        "checkedSun": formDataMultiClass.checkedSun,
        "sundaytime": ("classtimeSunday" in formDataMultiClass)? formDataMultiClass.classtimeSunday: "00:00:00",
        "sundayduration": ("selecteddurationSun" in formDataMultiClass)? formDataMultiClass.selecteddurationSun: 0,


                        })
                        .then((res) => {
                                setCreating(creating=>false);
                                console.log("multiple classes added");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}



//formDataMultiClass.courseId
export const createmultimeetingpersonal =({ formDataMultiClass,setCreating })=>{


        axiosInstance.post(`meeting/multicreatepersonal/`,{

        "courseId": 5,
        "serialNo": formDataMultiClass.serialNo,
        "meetingStatus": formDataMultiClass.meetingStatus,
        "meetingdate": "2022-03-31",
        "meetingtime": formDataMultiClass.meetingtime,
        "duration": formDataMultiClass.duration,
        "meetingLink": formDataMultiClass.meetingLink,
        "roomNo": formDataMultiClass.roomNo,
        "chapter": formDataMultiClass.chapter,
        "topics": formDataMultiClass.topics,
        "creater": formDataMultiClass.creater,

        "startdate": formDataMultiClass.classDateStart,
        "enddate": formDataMultiClass.classDateEnd,

        "checkedMon": formDataMultiClass.checkedMon,
        "mondaytime": ("classtimeMonday" in formDataMultiClass)? formDataMultiClass.classtimeMonday: "00:00:00",
        "mondayduration": ("selecteddurationMon" in formDataMultiClass)? formDataMultiClass.selecteddurationMon: 0,

        "checkedTues": formDataMultiClass.checkedTues,
        "tuesdaytime": ("classtimeTuesday" in formDataMultiClass)? formDataMultiClass.classtimeTuesday: "00:00:00",
        "tuesdayduration": ("selecteddurationTues" in formDataMultiClass)? formDataMultiClass.selecteddurationTues: 0,

        "checkedWed": formDataMultiClass.checkedWed,
        "wednesdaytime": ("classtimeWednesday" in formDataMultiClass)? formDataMultiClass.classtimeWednesday: "00:00:00",
        "wednesdayduration": ("selecteddurationWed" in formDataMultiClass)? formDataMultiClass.selecteddurationWed: 0,



        "checkedThurs": formDataMultiClass.checkedThurs,
        "thursdaytime": ("classtimeThursday" in formDataMultiClass)? formDataMultiClass.classtimeThursday: "00:00:00",
        "thursdayduration": ("selecteddurationThurs" in formDataMultiClass)? formDataMultiClass.selecteddurationThurs: 0,

        "checkedFri": formDataMultiClass.checkedFri,
        "fridaytime": ("classtimeFriday" in formDataMultiClass)? formDataMultiClass.classtimeFriday: "00:00:00",
        "fridayduration": ("selecteddurationFri" in formDataMultiClass)? formDataMultiClass.selecteddurationFri: 0,

        "checkedSat": formDataMultiClass.checkedSat,
        "saturdaytime": ("classtimeSaturday" in formDataMultiClass)? formDataMultiClass.classtimeSaturday: "00:00:00",
        "saturdayduration": ("selecteddurationSat" in formDataMultiClass)? formDataMultiClass.selecteddurationSat: 0,

        "checkedSun": formDataMultiClass.checkedSun,
        "sundaytime": ("classtimeSunday" in formDataMultiClass)? formDataMultiClass.classtimeSunday: "00:00:00",
        "sundayduration": ("selecteddurationSun" in formDataMultiClass)? formDataMultiClass.selecteddurationSun: 0,


                        })
                        .then((res) => {
                                setCreating(creating=>false);
                                console.log("multiple classes added");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}

































export const putmeetinginfo =({meetingid, formData, props})=>{


        axiosInstance.put(`meeting/editmeeting/${meetingid}`,{

        
        
        "name": formData.name,
        "about": formData.about,
        "meetingStatus": formData.meetingStatus,
        "meetingdate": formData.meetingdate,
        "meetingtime": formData.meetingtime,
        "duration": formData.duration,
        "meetingLink": formData.meetingLink
   

                        })
                        .then((res) => {
                        props.onPress();
                        console.log("meeting info edited", formData);


                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}






















export const createnewbook =({ imageformData })=>{


axiosInstance.post(`book/objects/`,imageformData ).then((res)=>{console.log(res.data)})
		.catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });




}





export const uploadprofieimage =({ imageformData, setImageUploaded, props, cancelHandler })=>{


axiosInstance.put(`profileimageupload/`,imageformData ).then((res)=>{
	            props.rerender();
	            setImageUploaded(imageUploaded=>"uploaded");
	            cancelHandler(); 
	            //setTimeout(res, 5000)
                })
                .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}	





export const uploadcoursecardimage =({ imageformData, setImageUploaded, courseId, props })=>{


axiosInstance.put(`course/coursecardimageupload/${courseId}/`,imageformData ).then((res)=>{
                    //props.rerender();
                    setImageUploaded(imageUploaded=>"uploaded");
	            props.onPress();
	            props.rerender();
                    
                    //setTimeout(res, 5000)
                })
                .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}
	








export const uploadofficeid =({ imageformData })=>{


axiosInstance.put(`officeidupload/`,imageformData ).then((res)=>{console.log(res.data)})
                .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}



export const uploadgovtid1 =({ imageformData })=>{


axiosInstance.put(`govtid1upload/`,imageformData ).then((res)=>{console.log(res.data)})
                .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}



export const uploadgovtid2 =({ imageformData })=>{


axiosInstance.put(`govtid2upload/`,imageformData ).then((res)=>{console.log(res.data)})
                .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}



export const uploaddobcert =({ imageformData })=>{


axiosInstance.put(`dobcertupload/`,imageformData ).then((res)=>{console.log(res.data)})
                .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}












export const getbooks =({setData})=>{



    axiosInstance.get()
                  .then((res) => {
                        setData(data=>res.data);
                   })
                  .catch((error)=>{
                      if(error.response.status===401){
                         Logout();
                      }

                   });

}






export const getnoticeIddash =({noticeId})=>{


        axiosInstance.get(`noticeids/`).then((res) => {
                        console.log("noticeIds---",res.data);

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}


export const marknoticeasread =({noticeId,props})=>{

        axiosInstance.put(`noticeids/`,{
        
	"readnoticeId":noticeId	

                        })
                        .then((res) => {
                         
				props.rerender();

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });
                         

}







export const marknoticeasunread =({noticeId,props})=>{

        axiosInstance.put(`noticeidremove/`,{

        "readnoticeId":noticeId

                        })
                        .then((res) => {

                                props.rerender();

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}







export const deletenoticebyId =({noticeId,props })=>{


        axiosInstance.delete(`noticeboard/delete/${noticeId}/`,{


                        })
                        .then((res) => {
                        console.log("notice deleted---");
                        props.rerender();
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}



export const removenoticebyId =({noticeId,props})=>{


        axiosInstance.put(`noticeboard/remove/${noticeId}/`,{



                        })
                        .then((res) => {

                                props.rerender();

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}
















export const changepassword =({formData, setLoginState})=>{


        axiosInstance.put(`setotpaspswd/${formData.username}/`,{
        "username":formData.username,


                        })
                        .then((res) => {

                         setLoginState(loginState=>"OTPsent");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });



}








export const putuserprofile =({data, formData})=>{

        console.log("formData", formData);

        axiosInstance.put('userprofilegetput/',{
        "email":formData.email,
        "username":data.username,
	"usertitle":formData.usertitle,	
        "firstname": formData.firstname,
        "lastname": formData.lastname,
	"gender": formData.gender,
        //"role": "student",
        "position":formData.position,
        //"dateofbirth": formData.dateofbirth,
         "institute": formData.institute,
         "city": formData.city,
         "state":formData.state,
	 "country": formData.country,	

                        })
                        .then((res) => {

                        console.log("formData", formData);


                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}






export const putuserprofileadvanced =({data, formData})=>{


        axiosInstance.put('userprofilegetput/',{
        "email":formData.email,
        "username":data.username,
        "usertitle":formData.usertitle,
        "firstname": formData.firstname,
        "lastname": formData.lastname,
        "gender": formData.gender,
        //"role": "student",
        "position":formData.position,
        "dateofbirth": formData.dateofbirth,
        "institute": formData.institute,
        "city": formData.city,
        "state":formData.state,
        "country": formData.country,

                        })
                        .then((res) => {

                        console.log("formData", formData);


                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}






export const deletemeeting =({meetingid })=>{


        axiosInstance.delete(`meeting/object/${meetingid}/`,{


                        })
                        .then((res) => {
                        console.log(" meeting deleted---");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}





export const createnewpresentation =({ formData })=>{


        axiosInstance.post(`meeting/createpresentation/`,{
             
             "talktitle": formData.talktitle,
             "talktime": formData.talktime,
             "duration": formData.duration,
             "speaker": formData.speaker,
             "outspeaker": null,
             "meetingid":formData.meetingId             

                        })
                        .then((res) => {

                                console.log("talk created");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}




export const getusersfromnames =({namestring, getSearchUsers})=>{


        axiosInstance.get(`searchusersstr/${namestring}/`).then((res) => {


                       getSearchUsers(searchUsers=>res.data);

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}


export const uploadtalk =({ imageformData,props })=>{


axiosInstance.post(`meeting/uploadtalk/`,imageformData ).then((res)=>{
	              props.onPress();
                  })
                .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}




export const deletepresentation =({talkId })=>{


        axiosInstance.delete(`meeting/presentation/delete/${talkId}`,{


                        })
                        .then((res) => {
                        console.log(" presentation deleted---");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}


//presentation/put/




export const putpresentation =({talkId, formData})=>{


        axiosInstance.put(`/meeting/presentation/put/${talkId}`,{
		
        "talktitle":formData.talktitle,
        "talktime":formData.talktime,
        "duration": formData.duration		


                        })
                        .then((res) => {

				console.log("put ppt: ", res.data)
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}

export const putaddcontact= ({contactId})=>{

axiosInstance.put(`addcontact/`,{

        "contactId":contactId,


                        })
                        .then((res) => {

                                console.log("contact added: ", res.data)
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });

}





export const createedudegree = ({formData,data})=>{

     axiosInstance
        .post(`edudegreecreate/`,{

        "userId": data.id,
        "institute": formData.institute,
        "degreename": formData.degreename,
        "startDate": formData.startData,
        "endDate": formData.endDate

                        })
                        .then((res) => {
                })
         .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }

                });

}






export const getdegreenames =({ getDegreeNames})=>{


        axiosInstance.get(`degreenames/`).then((res) => {


                       getDegreeNames(degreeNames=>res.data);

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}





export const getinstitutenames =({ getInstituteNames})=>{


        axiosInstance.get(`institutenames/`).then((res) => {

                       getInstituteNames(degreeNames=>res.data);

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}




export const deleteedudegree =({edudegreeid })=>{


        axiosInstance.delete(`edudegreedelete/${edudegreeid}/`,{


                        })
                        .then((res) => {
                        console.log(" edu degree deleted---");

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}






export const createaddress = ({formData})=>{

     axiosInstance
        .post(`addnewaddress/`,{

               "userId": formData.userId,
               "careof": formData.careof,
               "houseno": formData.houseno,
               "streetno": formData.streetno,
               "district": formData.district,
               "pincode": formData.pincode,
               "city": formData.city,
               "state": formData.state,
               "country": formData.country,
               "addressType": formData.addressType

                        })
                        .then((res) => {
                })
         .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }

                });

}




export const createachievement = ({ formData})=>{

     axiosInstance
        .post(`createachievement/`,{

                   "name": formData.name,
                   "description": formData.description,
                   "startDate": formData.startDate,
                   "endDate": formData.endDate,
                   "userId": formData.userId

                        })
                        .then((res) => {
                })
         .catch((error)=>{
                     if(error.response.status===401){
                     Logout();

                      }

                });

}




export const createaccountwithmobileno = ({formData, setLoading})=>{


  axiosInstance.post(`createaccountwithphonenum/`,{
              
        "username": formData.username,
        "usertype": formData.usertype

                        })
                        .then((res) => {

                     setLoading(loading=>"created");

                })
         .catch((error)=>{

		      console.log("error", error);
                     if(error.response.status===401){
                     Logout();

                      }

                });

}






export const checkuserexist =({ setUserExists, username})=>{


        axiosInstance.get(`getuserfromusername/${username}`).then((res) => {

		        setUserExists(userExists=>res.data.message);

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}








export const getgeneralmeetings =({ getGeneralMeetings})=>{


        axiosInstance.get(`generalmeetings/`).then((res) => {

                        getGeneralMeetings(generalMeetings=>res.data);

                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });


}





export const changeusertype = ({usertypeId})=>{


        axiosInstance.put(`changeusertype/${usertypeId}/`,{

                        })
                        .then((res) => {

                           window.location.reload(false);
                          })

                        .catch((error)=>{
                             if(error.response.status===401){
                              Logout();
                            }

                        });
}








