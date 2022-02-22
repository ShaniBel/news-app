import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import HomeScreen from "./screens/HomeScreen"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/search/:keyword' component={HomeScreen} />
        <Route exact path='/' component={HomeScreen} />
      </Switch>
    </Router>
  )
}

export default App
