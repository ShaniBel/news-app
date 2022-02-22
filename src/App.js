import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import HomeScreen from "./screens/HomeScreen"
import NewsItemScreen from "./screens/NewsItemScreen"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/newsItem/:id' component={NewsItemScreen} />
        <Route exact path='/search/:keyword' component={HomeScreen} />
        <Route exact path='/' component={HomeScreen} />
      </Switch>
    </Router>
  )
}

export default App
