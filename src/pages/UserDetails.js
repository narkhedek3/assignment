import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserById } from '../actions';

import DatePicker from 'react-date-picker';



class UserDetails extends React.Component {

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.dispatch(fetchUserById(userId));
    this.setState({
      from: new Date(),
      to: new Date(),
      activities: this.props.user.activity_periods  
    });
  }

  onDateChange = date => {
    console.log(date);
  }

  state = {
    from: new Date(),
    to: new Date(),
    activities: []
  }

  onFromDateChange = date => {
    console.log(date);
  }

  onToDateChange = date => {
    console.log(date);
  }

  render() {
    const { user, isFetching } = this.props;
    if (!isFetching) {
      return (
        <section id="userDetails">
          <div className="upper-section">
            <div className="row">
              <div className="col-6">
                <h1>{user.real_name}</h1>
              </div>
              <div className="col-6">
                <div className="form-row m-3">
                  <div className="col">
                    <label for="fromDate">from &nbsp;&nbsp;</label>
                    <DatePicker id="from" value={this.state.from} onChange={this.onFromDateChange} />
                  </div>
                  <div className="col">
                    <label for="toDate">to &nbsp;&nbsp;</label>
                    <DatePicker id="to" value={this.state.to} onChange={this.onToDateChange} />
                  </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="row">
              <div className="col">
                
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