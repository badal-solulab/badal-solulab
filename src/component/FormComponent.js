import React from 'react'

const FormComponent = ({value,onSetHandle,createHandle}) => {
  return (
    <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={onSetHandle}
        />
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={value.contact}
          onChange={onSetHandle}
        />
        <label>Country:</label>
        <input
          type="name"
          name="company"
          value={value.company}
          onChange={onSetHandle}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={value.email}
          onChange={onSetHandle}
        />
        <input
          type="button"
          value="submit"
          onClick={createHandle}
        
        />
      </form>
  )
}

export default FormComponent