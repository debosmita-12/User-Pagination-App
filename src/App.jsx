import { useState } from "react";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const { data, loading } = useFetch(
    "https://randomuser.me/api/?results=100"
  );

  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>User Pagination App</h1>

      <div className="user-container">
      {currentUsers.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </div>

      <Pagination
        totalUsers={data.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;