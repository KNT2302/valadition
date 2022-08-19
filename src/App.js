import { Switch, Route } from "react-router-dom"
import { FormValidationPage, Home } from "./components/pages"
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
      </Switch>
    </div>
  )
}

export default App
