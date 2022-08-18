import { ErrorMessage, Field } from "formik"
import React from "react"

const FormCheckbox = ({ checkboxs, name }) => {
  return (
    <div name={name} className={name}>
      <div>Your favorite</div>
      {checkboxs.map((checkbox, index) => (
        <div key={index}>
          <label>
            <Field type="checkbox" name={name} value={`${index + 1}`} />
            {checkbox.title}
          </label>
        </div>
      ))}
      <ErrorMessage className="error" name={name} component="div" />
    </div>
  )
}

export default FormCheckbox
