import React, { Component } from 'react'
import style from './App.css'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import history from './history'
import store from './redux/store'
import { Provider } from 'react-redux';

/* Components */
import Home from './Components/public/Home'
import Apartments from './Components/public/Apartments'
import Cars from './Components/public/Cars'
import FAQ from './Components/public/FAQ'
import Contact from './Components/public/Contact'



class App extends Component {

  componentDidMount() {
    console.log('Update going full')
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route path="/apartments" component={Apartments}/>
          <Route path="/cars" component={Cars}/>
          <Route path="/FAQ" component={FAQ}/>
          <Route path="/contact" component={Contact}/>
        </Router>
      </Provider>
    )
  }
}

export default App