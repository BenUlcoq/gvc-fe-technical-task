import React from 'react'
import Race from './Race'


export default function RaceList(props) {

  let { races, count, setCount } = props

  return (
    <div>
      <h1>Racelist</h1>
        
    { races ? 
      races.map((race) => {
        return (
          <Race count={count} setCount={setCount} key={race.race_id} race={race} />
        )}
      )
      : null
    }
    </div>
  )

}