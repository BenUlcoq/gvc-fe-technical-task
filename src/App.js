import React, {useEffect, useState} from 'react';
import RaceList from './components/RaceList';
import API from './config/axios-config'
import _ from 'lodash'


function App() {

  const greyhound = '9daef0d7-bf3c-4f50-921d-8e818c60fe61'
  const harness = '161d9be2-e909-4326-8c2c-35ed71fb460b'
  const horse = '4a2788f8-e825-4d36-9894-efd4baf1cfae'

  const [ races, setRaces ] = useState(false)
  // const [ all, setAll ] = useState(false)
  const [ grouped, setGrouped ] = useState(false)


  useEffect(() => {

    API.get(
      `/racing/?method=nextraces&count=10`, {
        headers: {
            'Content-Type': 'application/json'
        }
      }
    )
    .then((res) => {

      let next = res.data.data.next_to_go_ids
      
      let raceArr = next.map((id) => {
        return res.data.data.race_summaries[id];
      })

      let grouped = _.groupBy(raceArr, (race) => {
        return race.category_id
      })

      setGrouped(grouped)
      setRaces(raceArr)
      
    })
    .catch((err) => {

      // Notify User of Error

    })
  }, [])

  const onClickFunc = (e) => {
    e.preventDefault()

    if (e.target.id) {
      setRaces(grouped[e.target.id])
    }
  }

  return (
    <div className="App">
      <button onClick={onClickFunc} id={greyhound}>Greyhounds</button>
      <button onClick={onClickFunc} id={harness}>Harness Racing</button>
      <button onClick={onClickFunc} id={horse}>Horse Racing</button>
      {races ? <RaceList races={races}/> : null }
    </div>
  );
}

export default App;
