import React, { useEffect, useRef } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

const initialValues = {
  textField: "",
  numField: "",
  phoneField: "",
  emailField: "",
  checkbox: [],
  selecteGroup: "",
}
const validationSchema = Yup.object({
  textField: Yup.string().required("Required"),
  numField: Yup.number()
    .min(1000, "Number is greater than 1000")
    .max(100000, "Number is less than 100000")
    .required("Required"),
  emailField: Yup.string().matches(/^\w+@\w+\.\w+$/i).required("Required"),
  phoneField: Yup.string()
    .matches(/^0[0-9]+$/, "Phone number invalid")
    .max(10, "Phone number is maximum 10 digits")
    .min(10, "Phone number is maximum 10 digits"),
  checkbox: Yup.array().min(1, "Choose at least one option"),
  selecteGroup: Yup.string().ensure().required("Required"),
})

const options = [
  {
    value: 0,
    label: "Select...",
  },
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
]

const Form = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      console.log(formik.values)
      formik.resetForm()
    },
    validationSchema: validationSchema,
  })

  const buttonSub = useRef(null)
  const valid = async () => {
    try {
      await validationSchema.validate(initialValues)
    }
    catch (error) {
      buttonSub.current.disabled = true
    }
  }

  useEffect(() => {
    valid()
  }, [formik.isSubmitting])

  const handleChangePhone = (e) => {
    if (!e.target.value.match(/^0/)) {
      e.target.value = "0" + e.target.value
    }
    e.target.value = e.target.value.replace(/[^0-9]/i, "")
    formik.handleChange(e)
  }

  const handleChangeNumber = (e) => {
    e.target.value = e.target.value.replace(/^0|[^0-9]/i, "")
    formik.handleChange(e)
  }

  console.log(formik.values)
  return (
    <form onSubmit={formik.handleSubmit}>
      <fieldset>
        <label htmlFor="textField">Text</label>
        <input
          type="text"
          name="textField"
          id="textField"
          value={formik.values.textField}
          onChange={formik.handleChange}
        />
        {formik.errors.textField && <p>{formik.errors.textField}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="numField">Number</label>
        <input
          type="text"
          name="numField"
          id="numField"
          value={formik.values.numField}
          onChange={handleChangeNumber}
        />
        {formik.errors.numField && <p>{formik.errors.numField}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="phoneField">Number phone</label>
        <input
          type="text"
          name="phoneField"
          id="phoneField"
          value={formik.values.phoneField}
          onChange={handleChangePhone}
        />
        {formik.errors.phoneField && <p>{formik.errors.phoneField}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="emailField">Email</label>
        <input
          type="email"
          name="emailField"
          id="emailField"
          value={formik.values.emailField}
          onChange={formik.handleChange}
        />
        {formik.errors.emailField && <p>{formik.errors.emailField}</p>}
      </fieldset>
      <fieldset className="check-group">
        <legend>Checkbox Group</legend>
        <div>
          <label htmlFor="checkbox1">Checkbox 1</label>
          <input
            type="checkbox"
            name="checkbox"
            value="1"
            id="checkbox1"
            onChange={formik.handleChange}
            checked={formik.values.checkbox.includes("1")}
          />
        </div>
        <div>
          <label htmlFor="checkbox1">Checkbox 2</label>
          <input
            type="checkbox"
            name="checkbox"
            value="2"
            id="checkbox2"
            onChange={formik.handleChange}
            checked={formik.values.checkbox.includes("2")}
          />
        </div>
        <div>
          <label htmlFor="checkbox1">Checkbox 3</label>
          <input
            type="checkbox"
            name="checkbox"
            value="3"
            id="checkbox3"
            onChange={formik.handleChange}
            checked={formik.values.checkbox.includes("3")}
          />
        </div>
        {formik.errors.checkbox && <p>{formik.errors.checkbox}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="selecteGroup">Choose something</label>
        <select
          name="selecteGroup"
          id="selecteGroup"
          defaultValue={0}
          onChange={formik.handleChange}
        >
          {options.map((option, index) => {
            if (option.value === 0) {
              return (
                <option disabled key={index} value={option.value}>
                  {option.label}
                </option>
              )
            } else {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              )
            }
          })}
        </select>
        {formik.errors.selecteGroup && <p>{formik.errors.selecteGroup}</p>}
      </fieldset>
      <button type="submit" ref={buttonSub} disabled={!formik.isValid}>
        Submit
      </button>
    </form>
  )
}

export default Form
