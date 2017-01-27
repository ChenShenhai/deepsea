import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setUserInfo } from './../actions/user-info'
import { getUserInfo } from './../apis/user-info'

class Header extends React.Component {

  async componentWillMount() {
    let userInfo = await getUserInfo()
    this.props.dispatch(setUserInfo(userInfo))
  }

  render() {
    return (
      <header className="dashboard-header bg-faded">
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">DeepSea</a>
          <ul className="nav navbar-nav float-xs-left">
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/">index</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/setting">setting</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/blog/list">blog</Link>
            </li>
          </ul>

          <ul className="nav navbar-nav float-xs-right ml-3">
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/user/index">{this.props.userInfo.userName}</Link>
            </li>
          </ul>

          <form className="form-inline float-xs-right">
            <input className="form-control" type="text" placeholder="Search"/>
            <button className="btn btn-outline-info ml-1" type="submit">Search</button>
          </form>

        </nav>
      </header>
    )
  }
}

const mapStateToProps = ( state ) => {
  let userInfo = state.userInfo || {}
  return {
    userInfo,
  }
}

Header = connect(mapStateToProps)(Header)

export default Header
