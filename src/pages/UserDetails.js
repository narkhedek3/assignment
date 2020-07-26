import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserById } from '../actions';


import UserActivities from '../components/UserActivities';

class UserDetails extends React.Component {

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.dispatch(fetchUserById(userId));
  }

  render() {
    const { user, isFetching } = this.props;

    if(user == null) 
      return <h1>404 Not Found</h1>

    if (!isFetching) {

      return (
        <section id="userDetails " className="" >
          <div className="upper-section p-2 border shadow" >
            <div className="row">
              <div className="col make-left-center">
                <Link className="btn btn-outline-dark m-1" to={'/home'}>&#x2190;</Link>
                <h1>{user.real_name}</h1>
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="row">
              <div className="col m-2 p-2">
                <UserActivities />               
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return <h4>Loding...</h4>
    }

  }
}

// to get only required data
const mapStateToProps = ({ user }) => ({ user: user.item, isFetching: user.isFetching })

export default connect(mapStateToProps)(withRouter(UserDetails));