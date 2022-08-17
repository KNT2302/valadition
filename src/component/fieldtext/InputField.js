import { ErrorMessage, Field } from "formik"

import React from "react"

const InputField = ({ name, type, label, handleChangeInput }) => {
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

export default InputField
