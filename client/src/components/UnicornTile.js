import React from "react"

const UnicornTile = ({ name, magicalAbility }) => {
  return(
    <div className="callout">
      <h4> {name} </h4>
      <p> {magicalAbility} </p>
    </div>
  )
}

export default UnicornTile
