import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import DashBoard from '../components/DashBoard'
import LoadingBar from 'react-redux-loading'
import NewTweet from '../components/NewTweet'
import TweetPage from '../components/TweetPage'
import NavBar from '../components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <NavBar />
            {this.props.loading === true ? null
              : <div>
                <Route path='/' exact component={DashBoard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' component={NewTweet} />
              </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)