import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Users from "./data-files/users.json";
import Loading from "./components/Loading";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [users, setUsers] = useState(Users)
  const isPageLoaded = pageLoaded;

  useEffect(() => {
    setInterval(() => {
      setPageLoaded(true);
    }, 1000);
  }, []);

  const deleteUser = (deleteUserId) => {
    setUsers(users.filter(user => {
      return user.id !== deleteUserId;
    })
    )
  }

  const updateUser = (updateUser, userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...updateUser };
      }
      else return { ...user };
    });
    setUsers(updatedUsers);
  }

  return (
    <React.Fragment>
      {!isPageLoaded && <Loading />}
      <div className="cards">
        {isPageLoaded &&
          users.map((user) => {
            return (
              <Card
                user={user}
                key={user.id}
                deleteUserId={user.id} // Required for userForm actions as args while calling delete user function
                deleteUser={deleteUser}
                updateUser={updateUser}
              />
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default App;
