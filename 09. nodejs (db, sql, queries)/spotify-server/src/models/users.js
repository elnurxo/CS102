const users = [
  {
    id: 1,
    username: "adminMaster",
    fullName: "John Doe",
    email: "johndoe@example.com",
    role: "admin",
    password: "hashed_password_123",
    createdAt: "2023-06-15T10:00:00Z",
    lastLogin: "2025-02-09T18:30:00Z",
    isVerified: true,
  },
  {
    id: 2,
    username: "clientQueen",
    fullName: "Jane Smith",
    email: "janesmith@example.com",
    role: "client",
    password: "hashed_password_456",
    createdAt: "2024-01-20T15:45:00Z",
    lastLogin: "2025-02-07T14:22:00Z",
    isVerified: true,
  },
  {
    id: 3,
    username: "userAce",
    fullName: "Alex Brown",
    email: "alexbrown@example.com",
    role: "client",
    password: "hashed_password_789",
    createdAt: "2024-11-05T08:25:00Z",
    lastLogin: "2025-01-15T09:12:00Z",
    isVerified: false,
  },
];

module.exports = users;
