import React from 'react'
import Race from './Race'


export default function RaceList(props) {

  let races = props.races

  return (
    <div>
      <h1>Racelist</h1>
        
    { races ? 
      races.map((race) => {
        return (
          <Race key={race.race_id} race={race} />
        )}
      )
      : null
    }
    </div>
  )

}