import { Switch, Route } from "react-router-dom"
import { AnimationPage, FormValidationPage, Home } from "./components/pages"
import AppHeader from "./components/common/AppHeader"

function App() {
  return (
    <div className="App">
      <AppHeader />
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/form">
          <FormValidationPage />
        </Route>
        <Route path="/animation">
          <AnimationPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
