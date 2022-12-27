import classes from "./Assignmentform.module.css";
import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import FadeLoader from "react-spinners/BeatLoader";
import {
  OptionField,
  OptionFieldSubmitValue,
  OptionFieldSecondaryObjs,
  ParagraphField,
  TextInput,
  DateField,
  FileUpload,
} from "../../../../../CommonApps/FormInputObjectsDurga";
import {
  getclassobjectbyId,
  getclassrank,
  editcoursesummary,
  getsubjectsfromclassandboard,
  createAssignmentform,
} from "../../../../../CommonApps/AllAPICalls";

const Assignmentform = (props) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    fontSize: "10px",
  };

  let color = "white";

  const [AssignmentFormData, setFormData] = useState("notSaving");

  const initialFormData = Object.freeze({
    name: "",
    link: "",
    description: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // let course_ = {"id":1, "name":"Durga"};
  // console.log(course_.id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let courseId = props.Course.id;
    setFormData("Saving");
    createAssignmentform({ formData, courseId, props, setFormData });
    //  console.log(props.Course)
  };

  //  console.log("formData: ", formData);

  return (
    <div className={classes.createAssignmentFormDivParent}>
      {
        <form className={classes.createAssignmentForm} onSubmit={handleSubmit}>
          {/*form close button below*/}
          <div className={classes.closeButtonDiv}>
            <button onClick={props.onPress} className={classes.closeFormButton}>
              {" "}
              <AiFillCloseCircle className={classes.closeButtonIcon} />{" "}
            </button>
          </div>

          {/*logo and field title container below*/}
          <div className={classes.logoAndTitleContainer}>
            {/*
	  <img  className={classes.bwLogo} src={logoImage} alt='edr Logo' />
	   */}
            <div className={classes.formTitleDiv}>
              {/* <BsLink45Deg className={classes.tubeIcon}/> */}
              <span className={classes.tubeIconText}> Create Assignment </span>
            </div>
          </div>

          <TextInput
            className={classes.AssignmentTitle}
            handleChange={handleChange}
            label="Assignment Title"
            placeholder="ex: Scalar and Vector"
            name="name"
            requirement="*"
            defaultValue=""
          />

          <div className={classes.DateField}>
            <div className={classes.DateFieldThree}>
              <div className={classes.startData}>
                <DateField
                  handleChange={handleChange}
                  label="Publish Date"
                  name="courseStartDate"
                  placeholder="Enter course start date"
                />
              </div>
              <div className={classes.dueData}>
                <DateField
                  handleChange={handleChange}
                  label="Due Date"
                  name="courseEndDate"
                  placeholder="Enter course end date"
                />
              </div>

              <div className={classes.creditField}>
                <TextInput
                  handleChange={handleChange}
                  label="Credit"
                  placeholder="10"
                  name="Credit"
                  requirement="*"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <TextInput
            handleChange={handleChange}
            label="Assigned By"
            placeholder="ex: Durga Shankar"
            name="Assigned By"
            requirement="*"
            defaultValue=""
          />

          <FileUpload
            handleChange={handleChange}
            label="Question Files"
            placeholder="10"
            name="Question Files"
            requirement="*"
            defaultValue=""
          />

          <ParagraphField
            handleChange={handleChange}
            label="Description"
            placeholder="Short Description"
            name="Description"
            requirement="*"
            defaultValue=""
          />

          <div className={classes.submitButtonDiv}>
            {AssignmentFormData === "Saving" && (
              <button
                type="submit"
                className={classes.submit_button}
                disabled={true}
              >
                <FadeLoader
                  color={color}
                  loading={true}
                  css={override}
                  size={10}
                />
                Saving ...
              </button>
            )}

            {AssignmentFormData === "notSaving" && (
              <button type="submit" className={classes.submit_button}>
                <b>Create </b>
              </button>
            )}
          </div>

          <div className={classes.emptyDiv}>
            dshdfjhd sdns dasd ashda sdhasd asdjas djasd asdas da asd asd asd
            asda asdb sadasdj dDMNASD ASDNBSAD ASDNBADS ADSNBA Dsj dn dcnd
            ASDNAS DJASD AJSDA DBASD ASDB SADBSA dasjdnbqww dwbdw dd
          </div>
        </form>
      }
    </div>
  );
};

export default Assignmentform;
