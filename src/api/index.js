import data from './test.json';

const months = new Map([
  ['Jan', 0],
  ['Feb', 1],
  ['Mar', 2],
  ['Apr', 3],
  ['May', 4],
  ['Jun', 5],
  ['Jul', 6],
  ['Aug', 7],
  ['Sep', 8],
  ['Oct', 9],
  ['Nov', 10],
  ['Dec', 11]
]);

export const fetchUsers = () => data.members;

export const fetchUserById = id => data.members.find(member => member.id === id);

const convertToDate = date => {
  const dateSplit = date.split(' ');
  const month = months.get(dateSplit[0]);
  const day = dateSplit[1];
  const year = dateSplit[2];

  return new Date(year, month, day);

}

export const fetchActivitiesInRange = (id, from, to) => {
  const activities = data.members.find(member => member.id === id).activity_periods;

  const requiredRange = activities.filter(activity => {
    const start_time = convertToDate(activity.start_time);
    const end_time = convertToDate(activity.end_time);

    if (end_time <= to && start_time >= from)
      return true;

    return false;
  })

  return {
    requiredRange,
    from,
    to
  }
}

export const fetchAllActivitiesByUserId = id => ({
  requiredRange: data.members.find(member => member.id === id).activity_periods,
  from: "",
  to: ""
});


