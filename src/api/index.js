import data from './test.json';

export const fetchUsers = () => data.members;

export const fetchUserById = id => data.members.find( member => member.id === id );


