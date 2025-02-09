const UserList = ({ users }) => {
  const userItems = users.map((user) => {
    return (
      <section
        key={user.id}
        style={{
          padding: "20px",
          background: "lightblue",
        }}
      >
        <h3>
          {user.firstName} {user.lastName}
        </h3>
      </section>
    );
  });

  return <div>{userItems}</div>;
};

export default UserList;
