const users = [
  {
    _id: "1",
    firstName: "Maurice",
    lastName: "Moss",
    email: "maurice@moss.com",
    password: "abcdefg",
  },
  {
    _id: "2",
    firstName: "Roy",
    lastName: "Trenneman",
    email: "roy@trenneman.com",
    password: "imroy",
  },
];

export default {
  getUsers: () => users,
  addUser: (user) => users.push(user),
};
