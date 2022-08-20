import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { FormGroup } from "../common";
import Loading from "./loading-page/Loading";

const FormValidationPage = () => {
  const initialValues = {
    textField: "",
    numField: "",
    phoneField: "",
    emailField: "",
    checkboxGroup: [],
    selecteGroup: "",
  };
  const validationSchema = Yup.object({
    textField: Yup.string()
      .matches(/^\w+$/i, "Text is invalid")
      .required("Required"),
    numField: Yup.number("You should input number")
      .min(1000, "Number is greater than 1000")
      .max(100000, "Number is less than 100000")
      .required("Required"),
    emailField: Yup.string()
      .matches(
        /^[a-zA-Z0-9!#$%&''*+/=?^_`{}~@."\-\s]*$/,
        "Please enter valid email address"
      )
      .email("Please enter valid email address")
      .max(64, "Maximum of 64 characters are allowed for Email address")
      .required("Required"),
    phoneField: Yup.string()
      .matches(/^0[0-9]+$/, "Phone number invalid")
      .max(10, "Phone number is required 10 digits")
      .min(10, "Phone number is required 10 digits"),
    checkboxGroup: Yup.array().min(1, "Choose at least one option"),
    selecteGroup: Yup.string().ensure().required("Required"),
  });

  const options = [
    {
      value: 1,
      label: "Selection 1",
    },
    {
      value: 2,
      label: "Selection 2",
    },
    {
      value: 3,
      label: "Selection 3",
    },
  ];

  const checkboxs = [
    {
      label: "checkbox1",
      title: "Checkbox 1",
    },
    {
      label: "checkbox2",
      title: "Checkbox 2",
    },
    {
      label: "checkbox3",
      title: "Checkbox 3",
    },
  ];
  const avoidInput = (target, e, handleChange) => {
    e.target.value = e.target.value.replace(target, "");
    handleChange(e);
  };
  const handleChangePhone = (e, handleChange) => {
    if (!e.target.value.match(/^0/)) {
      e.target.value = "0" + e.target.value;
    }
    avoidInput(/[^0-9]/i, e, handleChange);
  };

  const handleChangeNumber = (e, handleChange) => {
    avoidInput(/^0|[^0-9]/i, e, handleChange);
  };

  const handleChangeText = (e, handleChange) => {
    avoidInput(/\W/i, e, handleChange);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },10000)
  },[])
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}
        >
          {({ isValid, dirty, handleChange, values }) => (
            <Form>
              <FormGroup>
                <FormGroup.FormInput
                  name="textField"
                  type="text"
                  label="Text"
                  handleChangeInput={handleChangeText}
                />
                <FormGroup.FormInput
                  name="numField"
                  type="text"
                  label="Number"
                  handleChangeInput={handleChangeNumber}
                />
                <FormGroup.FormInput
                  name="phoneField"
                  type="text"
                  label="Number phone"
                  handleChangeInput={handleChangePhone}
                />
                <FormGroup.FormInput
                  name="emailField"
                  type="email"
                  label="Email"
                />
                <FormGroup.FormSelect
                  options={options}
                  handleChange={handleChange}
                />
                <FormGroup.FormCheckbox
                  checkboxs={checkboxs}
                  name="checkboxGroup"
                />
                <div>
                  <button type="submit" disabled={!dirty || !isValid}>
                    Submit
                  </button>
                </div>
              </FormGroup>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default FormValidationPage;
