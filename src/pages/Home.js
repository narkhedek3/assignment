import React from 'react';
import UserCard from '../components/UserCard';

import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class Home extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  renderUsers = users => users.map((user) => <UserCard key={user.id} user={user} />);

  render = () => {
    const { users, isFetching } = this.props;
    if(!isFetching) {
      return (
        <div className="user-list">
          <div>
            <h1 className="page-title user-title">User List</h1>
              <div className="row">
                {
                  this.renderUsers(users)
                }
              </div>
          </div>
        </div>
      );
    } else {
      return <h3>Loading...</h3>
    }
    
    
  }

}

// below line can be removed using HOC[high order component] i.e connect function
// RentalHome.contextType = StateContext;


// to get only required data
const mapStateToProps = ({ users }) => ({ users: users.items, isFetching: users.isFetching });


export default connect(mapStateToProps)(Home);