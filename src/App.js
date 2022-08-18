import "./App.css"
import FormInput from "./component/form"
import Header from "./component/header/Header"
import Home from "./component/homepage/Home"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/form">
          <FormInput />
        </Route>
      </Switch>
    </div>
  )
}

export default App
