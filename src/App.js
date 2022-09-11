import './App.css'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Welcome from './components/Welcome'
import ForgotPass from './components/ForgotPass'
import PageNotFound from './components/PageNotFound'
import VerifyPass from './components/VerifyPass'
import Details from './components/Details'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/details'>
            <Details />
          </Route>
          <Route exact path='/forgot-password/verify'>
            <VerifyPass />
          </Route>
          <Route exact path='/forgot-password'>
            <ForgotPass />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
