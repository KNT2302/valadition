import React from "react"

import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import FormCheckbox from "./FormCheckbox"


const FormGroup = ({
  children,
}) => {
  return <>{children}</>
}

FormGroup.FormInput = FormInput
FormGroup.FormSelect = FormSelect
FormGroup.FormCheckbox = FormCheckbox

export default FormGroup


