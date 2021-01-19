import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const EnchantedForestsList = props => {
  const [enchantedForests, setEnchantedForests] = useState([])
  
  const getEnchantedForests = async () => {
    try {
      const response = await fetch("/api/v1/enchanted-forest")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const enchantedForestData = await response.json()
      setEnchantedForests(enchantedForestData.enchantedForests)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getEnchantedForests()
  }, [])

  const enchantedForestListItems = enchantedForests.map(enchantedForest => {
    return(
      <li key={enchantedForest.id}>
        {enchantedForest.title} in {enchantedForest.location}
      </li>
    )
  })

  return(
    <>
      <h1>My EnchantedForests</h1>
      <ul className="enchantedForests">
        {enchantedForestListItems}
      </ul>
      <Link to="/enchantedForests/new">Dream Up a New EnchantedForest!</Link>
    </>
  )
}

export default EnchantedForestsList