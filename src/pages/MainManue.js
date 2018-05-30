import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


const MainManue = () =>(

  <Router>
    <div>
  <ul>
   <li> <Link to="/">Home</Link></li>
   <li> <Link to="/app">App</Link></li>
  </ul>  
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/app" component={App}/>
  </div>
  </div>
</Router>
)

export default MainManue;