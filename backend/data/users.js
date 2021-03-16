import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true
  },
  {
    name: 'Isuru Godakanda',
    email: 'isuru@example.com',
    password: bcrypt.hashSync('password', 10)
  },
  {
    name: 'Tharushi DeSilva',
    email: 'tharushi@example.com',
    password: bcrypt.hashSync('password', 10)
  }
]

export default users
