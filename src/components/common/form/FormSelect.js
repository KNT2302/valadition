import React from "react"
import { ErrorMessage, Field } from "formik"

const FormSelect = ({ options }) => {
  return (
    <div>
      <label htmlFor="selecteGroup">Choose something</label>
      <Field as="select" name="selecteGroup">
        <option value="default" hidden>
          Select...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage className="error" name="selecteGroup" component="div" />
    </div>
  )
}

export default FormSelect
