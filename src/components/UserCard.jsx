function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt={user.name.first} />

      <h3>
        {user.name.first} {user.name.last}
      </h3>

      <p>{user.email}</p>

      <p>{user.location.country}</p>
    </div>
  );
}

export default UserCard;