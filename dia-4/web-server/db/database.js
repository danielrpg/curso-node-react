const users = [
  {
    id: '1',
    name: "Christian",
    email: "Christian@sample.com",
    password: "admin123",
    role: "ROLE_USER",
    state: true,
  },
  {
    id: '2',
    name: "Marcelo",
    email: "marcelo@sample.com",
    password: "admin123",
    role: "ROLE_USER",
    state: true,
  }
];

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Hello World",
    description: "lorem ipsum",
    comments: [],
  },
  {
    id: 2,
    userId: 2,
    title: "Hello World",
    description: "lorem ipsum",
    comments: [],
  },
  {
    id: 3,
    userId: 1,
    title: "Hello World",
    description: "lorem ipsum",
    comments: [],
  }
];

module.exports = {
  users,
  posts,
};
