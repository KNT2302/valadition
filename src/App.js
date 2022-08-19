import { Switch, Route } from "react-router-dom"
import FormValidationPage from "./components/pages/FormValidationPage"
import AppHeader from "./components/common/AppHeader"
import Home from "./components/pages/Home"

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
