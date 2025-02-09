import UserList from "../../components/UsersList";

const users = [
  {
    id: 0,
    firstName: "User 0",
    lastName: "Userenko",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    isMale: true,
    email: "userUserenko0@example.com",
    password: "supersecurepassword123",
  },
  {
    id: 1,
    firstName: "User 1",
    lastName: "Userenko",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    isMale: false,
    email: "userUserenko1@example.com",
    password: "supersecurepassword123",
  },
  {
    id: 2,
    firstName: "User 2",
    lastName: "Userenko",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    isMale: false,
    email: "userUserenko2@example.com",
    password: "supersecurepassword123",
  },
  {
    id: 3,
    firstName: "User 3",
    lastName: "Userenko",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    isMale: true,
    email: "userUserenko3@example.com",
    password: "supersecurepassword123",
  },
];

const UsersPage = () => {
  return (
    <div>
      <h2>Users page</h2>
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;
