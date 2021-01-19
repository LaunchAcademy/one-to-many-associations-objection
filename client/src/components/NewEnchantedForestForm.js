import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import ErrorList from "./ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const NewEnchantedForestForm = props => {
  const [newEnchantedForest, setNewEnchantedForest] = useState({
    title: "",
    location: "",
    length: ""
  })
  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const addNewEnchantedForest = async () => {
    try {
      const response = await fetch("/api/v1/enchantedForests", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newEnchantedForest)
      })
      if (!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
      } else {
        const body = await response.json()
        console.log("Posted successfully!", body);
        setShouldRedirect(true)
      }
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const handleInputChange = event => {
    setNewEnchantedForest({
      ...newEnchantedForest,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewEnchantedForest()
  }

  if (shouldRedirect) {
    return <Redirect to="/enchantedForests" />
  }

  return (
    <>
      <h1>Dream Up a New EnchantedForest!</h1>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit} className="callout" >
        <label>
         Title:
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={newEnchantedForest.title}
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            onChange={handleInputChange}
            value={newEnchantedForest.location}
          />
        </label>

        <label>
          Length of Time (Days):
          <input
            type="text"
            name="length"
            onChange={handleInputChange}
            value={newEnchantedForest.length}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}

export default NewEnchantedForestForm