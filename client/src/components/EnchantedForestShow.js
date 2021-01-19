import React, { useState, useEffect } from "react"

import UnicornTile from "./UnicornTile"
import UnicornForm from "./UnicornForm"
import translateServerErrors from './../services/translateServerErrors.js'

const EnchantedForestShow = (props) => {
  const [enchantedForest, setEnchantedForest] = useState({
    name: "",
    enchantment: "",
    numberOfUnicorns: "",
    unicorns: []
  })
  const [errors, setErrors] = useState({})

  
  const enchantedForestId = props.match.params.id

  useEffect(() => {
    const getEnchantedForest = async () => {
      try {
        const response = await fetch(`/api/v1/enchanted-forests/${enchantedForestId}`)
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage);
          throw(error);
        }
        const enchantedForestData = await response.json()
        setEnchantedForest(enchantedForestData.enchantedForest)
      } catch(error) {
        console.error(`Error in fetch: ${error.message}`)
      }
    }
    getEnchantedForest()
  }, [])

  const postUnicorn = async (newUnicornData) => {
    try {
      const response = await fetch(`/api/v1/enchanted-forests/${enchantedForestId}/unicorns`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newUnicornData)
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
        const updatedUnicorns = enchantedForest.unicorns.concat(body.unicorn)
        debugger
        setEnchantedForest({...enchantedForest, unicorns: updatedUnicorns})
      }
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const unicornTileComponents = enchantedForest.unicorns.map(unicornObject => {
    return(
      <UnicornTile
        key={unicornObject.id}
        {...unicornObject}
      />
    )
  })

  return(
    <div className="callout">
      <h1>{enchantedForest.name}</h1>
      <UnicornForm
        postUnicorn={postUnicorn}
        errors={errors}
      />
      {unicornTileComponents}
    </div>
  )
}

export default EnchantedForestShow