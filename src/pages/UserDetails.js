import React from 'react';
import { withRouter } from 'react-router-dom';
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
        <section id="userDetails" >
          <div className="upper-section">
            <div className="row">
              <div className="col">
                <h1>{user.real_name}</h1>
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="row">
              <div className="col">
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