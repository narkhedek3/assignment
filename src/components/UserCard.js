import React from 'react';

import { Link } from 'react-router-dom';

const UserCard = (props) => {
  const { user } = props;

  return (
    <Link className="user-link user-card" to={`user/${user.id}`}>
      <div className="card border shadow" >
        <div className="card-body">
          <h5 className="card-title">{user.real_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.tz}</h6>
        </div>
      </div>
    </Link>

  )

}

export default UserCard;