import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Weather from './Weather'

const AnimationPage = () => {
  const history = useHistory()
  const moveToWeather = (type) => history.push(`/animation/${type}`)
  return (
    <section className="weatherSummary" data-testid="weather-summary">
      <div className="weather__smBox">
        <section className="weather__illustration">
          <Switch>
            <Route path="/animation/:weather" component={() => <Weather />} />
            <Route path="/" component={() => <>this is weather page</>} />
          </Switch>
        </section>
      </div>
      <button className='downside' onClick={() => moveToWeather('rainny')}>Move to Rainny Weather</button>
      <button className='downside' onClick={() => moveToWeather('cloudy')}>Move to Cloudy Weather</button>
    </section>
  )
}

export default AnimationPage
