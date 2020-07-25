import React from 'react';


const UserActivityTable = ({ activities }) => {

  if (activities && activities.length === 0)
    return <h4>User is not active in selected range</h4>

  return (
    <table className="table">
      <thead>
        <tr>
          <td>
            Start Time
        </td>
          <td>
            End Time
        </td>
        </tr>
      </thead>
      <tbody>
        {
          activities.map(activity => {
            return <tr key={activity.start_time}>
              <td>
                {activity.start_time}
              </td>
              <td>
                {activity.end_time}
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  )



}

export default UserActivityTable;