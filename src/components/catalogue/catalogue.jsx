import React from "react";
import Sort from "../sort/sort";
import UserList from "../user-list/user-list";

const Catalogue = () => {
  return (
    <div className="wrapper--catalogue">
      <h1 className="visually-hidden">Users list page</h1>
      <Sort />
      <div className="wrapper--user-list">
        <UserList />
      </div>
    </div>
  );
};

export default Catalogue;
