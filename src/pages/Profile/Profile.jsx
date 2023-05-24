import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Profile() {
  const { user, logoutUser } = useContext(AuthContext);

  const logoutBtnHandler = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>{user && user.email}</p>
      <p>{user && user.displayName}</p>
      <button onClick={logoutBtnHandler}>Logout</button>
    </div>
  );
}
