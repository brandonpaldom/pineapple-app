import { useState } from 'react'

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  const handleInputChange = ({ target }) => {
    const { name, value } = target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const resetForm = () => {
    setValues(initialValues)
  }

  return {
    ...values,
    values,
    handleInputChange,
    resetForm,
  }
}
