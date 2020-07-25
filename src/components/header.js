import React from 'react';

class Header extends React.Component {

  render = () => {
    return (
      <div className="row sticky-top header">
        <div className="col p-2 pl-4">
          <h3>User Activities</h3>
        </div>

      </div>
    )
  }
}

export default Header;