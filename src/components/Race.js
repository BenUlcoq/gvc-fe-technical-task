import React, {useEffect, useState} from 'react'

export default function Race(props) {

  let {race} = props

  const calculateTime = (start) => {
    return (start - Math.floor((Date.now()/1000)))
  }

  const [timeLeft, setTimeLeft] = useState(calculateTime(race.advertised_start.seconds));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTime(race.advertised_start.seconds));
    }, 1000);
  });

  return (
    <div>
      <h2>Meeting: {race.meeting_name}</h2>
      <h4>Race Number: {race.race_number}</h4>
      <h5>Time to go: {timeLeft} seconds </h5>
    </div>
  )

}