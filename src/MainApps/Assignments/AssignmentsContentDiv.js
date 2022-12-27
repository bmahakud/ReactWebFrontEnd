import React, { useState, useEffect } from "react";
import classes from "./AssignmentsContentDiv.module.css";
import base from "../CommonAppUtilities/AppContentDiv.module.css";
import TopToolBarTeacher from "./components/Teacher/TopToolBarV1";
import Pending from "./Pending.js";
import Completed from "./Completed";
import All from "./All";
import { getassignment } from "../../CommonApps/AllAPICalls";
import Assignmentform from "../Assignments/components/Teacher/Forms/Assignmentform";
import AssignmentPaper from "./AssignmentPaper";

const AssignmentsContentDiv = (props) => {
  const [showAssignmentForm, setAssignmentForm] = useState(false);

  const [linksData, getLinksData] = useState(null);
  const [pageNo, setPageNo] = useState(1);

  const closeFormHandler = () => {
    setAssignmentForm(false);
    // props.rerender();
  };

  console.log("linksData: ", linksData);
  const [assignmentdata, setData] = useState(null);
  const [assignmentCompletedData, completedSetData] = useState(null);
  const [validForm, setValidForm] = useState(null);

  useEffect(() => {
    let courseID = 3;
    getassignment({ courseID, setData });
  }, [setData]);

  const [toolBox1PageMounted, setToolBox1PageMounted] = useState(true);
  const [toolBox2PageMounted, setToolBox2PageMounted] = useState(false);
  const [toolBox3PageMounted, setToolBox3PageMounted] = useState(false);
  const [toolBox4PageMounted, setToolBox4PageMounted] = useState(false);
  const [toolBox5PageMounted, setToolBox5PageMounted] = useState(false);

  const showToolBox1PageContentHandler = () => {
    setToolBox1PageMounted(true);
    setToolBox2PageMounted(false);
    setToolBox3PageMounted(false);
  };

  const showToolBox2PageContentHandler = () => {
    setToolBox1PageMounted(false);
    setToolBox2PageMounted(true);
    setToolBox3PageMounted(false);
  };

  const showToolBox3PageContentHandler = () => {
    setToolBox1PageMounted(false);
    setToolBox2PageMounted(false);
    setToolBox3PageMounted(true);
  };

  const showToolBox4PageContentHandler = () => {};

  const showToolBox5PageContentHandler = () => {};

  const [videosData, getVideosData] = useState(null);

  return (
    <div className={base.appContentDiv}>
      <div className={classes.contentDiv}>
        <div className={base.pwdAppDirectory}>
          <i className={base.pwdAppDirectoryText}> </i>
        </div>

        <TopToolBarTeacher
          userData={props.userData}
          onPress={props.rerender}
          showToolBox1PageContent={showToolBox1PageContentHandler}
          showToolBox2PageContent={showToolBox2PageContentHandler}
          showToolBox3PageContent={showToolBox3PageContentHandler}
          showToolBox4PageContent={showToolBox4PageContentHandler}
          showToolBox5PageContent={showToolBox5PageContentHandler}
          toolBox1PageMounted={toolBox1PageMounted}
          toolBox2PageMounted={toolBox2PageMounted}
          toolBox3PageMounted={toolBox3PageMounted}
          toolBox4PageMounted={toolBox4PageMounted}
          //toolBox4PageMounted = {toolBox5PageMounted}
          selectedCourse={props.selectedCourse}
        />

        {toolBox1PageMounted && (
          <Pending
            assignmentdata={assignmentdata}
            onClick={showToolBox1PageContentHandler}
          />
        )}
        {toolBox2PageMounted && (
          <Completed
            assignmentdata={assignmentdata}
            onClick={showToolBox2PageContentHandler}
          />
        )}
        {toolBox3PageMounted && (
          <All
            assignmentdata={assignmentdata}
            onClick={showToolBox3PageContentHandler}
          />
        )}
        {props.selectedCourse !== null &&
          props.selectedCourse.length > 0 &&
          showAssignmentForm && (
            <Assignmentform
              Course={props.selectedCourse[0]}
              onPress={closeFormHandler}
            />
          )}
        <AssignmentPaper />
      </div>
    </div>
  );
};

export default AssignmentsContentDiv;
