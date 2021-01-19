import React, { useState } from "react"

import ErrorList from "./ErrorList"

const UnicornForm = ({ postUnicorn, errors }) => {
  const [newUnicorn, setNewUnicorn] = useState({
    name: "",
    age: "",
    magicalAbility: ""
  })

  const handleInputChange = event => {
    setNewUnicorn({
      ...newUnicorn,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postUnicorn(newUnicorn)
    clearForm()
  }

  const clearForm = () => {
    setNewUnicorn({
      name: "",
      age: "",
      magicalAbility: ""
    })
  }

  return (
    <div className="callout">
      <h3>New Unicorn Form</h3>
      <form onSubmit={handleSubmit} >
        <ErrorList errors={errors} />
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={newUnicorn.name}
          />
        </label>

        <label>
          Age:
          <input
            type="text"
            name="age"
            onChange={handleInputChange}
            value={newUnicorn.age}
          />
        </label>

        <label>
          Magical Ability:
          <input
            type="text"
            name="magicalAbility"
            onChange={handleInputChange}
            value={newUnicorn.magicalAbility}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default UnicornForm;
