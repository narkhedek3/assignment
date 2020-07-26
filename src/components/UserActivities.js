import React from 'react';

import DatePicker from 'react-date-picker';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchActivitiesInRange, fetchAllActivitiesByUserId } from '../actions';

import UserActivityTable from '../components/UserActivityTable';

// to render activity table
const renderActivities = activities => <UserActivityTable activities={activities} />

class UserActivities extends React.Component {

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.dispatch(fetchActivitiesInRange(userId, new Date(), new Date()));
  }

  onDateChange = (from, to) => {
    const userId = this.props.match.params.id;
    // after list all date field is empty 
    // so to avoid alert assigning same date to both inputs
    if (!from)
      from = to;
    if (!to)
      to = from;
    if (from > to)
      return alert('please check selected dates');
    this.props.dispatch(fetchActivitiesInRange(userId, from, to));
  }

  listAllActivities = () => {
    const userId = this.props.match.params.id;
    this.props.dispatch(fetchAllActivitiesByUserId(userId));
  }

  render = () => {

    // activities {requiredRange, from, to}
    const { activities } = this.props;

    return (
      <div>
        <div className="row border shadow">
          <div className="col">
            <div className="form-row m-3">
              <button className="btn btn-outline-dark" onClick={this.listAllActivities}>list all activities</button>
            </div>
            <div className="form-row m-3">
              <div className="col">
                <label htmlFor="fromDate">list activities from &nbsp;&nbsp;</label>
                <DatePicker id="from" className="btn btn-outline-dark"  value={activities.from} maxDate={new Date()} onChange={date => this.onDateChange(date, activities.to)} />
                &nbsp;&nbsp;

                <label htmlFor="toDate">to &nbsp;&nbsp;</label>
                <DatePicker id="to" className="btn btn-outline-dark" value={activities.to} maxDate={new Date()} onChange={date => this.onDateChange(activities.from, date)} />
              </div>

            </div>

          </div>
        </div>
        <div className="row mt-2">
          {
            activities.requiredRange && renderActivities(activities.requiredRange)
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ activities }) => ({ activities: activities.item, isFetching: activities.isFetching })

export default connect(mapStateToProps)(withRouter(UserActivities));