import React from "react"
import { ErrorMessage, Field } from "formik"


const FormInput = ({ name, type, label, handleChangeInput }) => {
  const handleChangeByType = (e, change) => {
    type === "email" ? change(e) : handleChangeInput(e, change)
  }

  return (
    <Field name={name}>
      {({ field, form: { handleChange } }) => (
        <div>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            {...field}
            onChange={(e) => handleChangeByType(e, handleChange)}
            id={name}
          ></input>
          <ErrorMessage className="error" name={name} component="div" />
        </div>
      )}
    </Field>
  )
}

export default FormInput
