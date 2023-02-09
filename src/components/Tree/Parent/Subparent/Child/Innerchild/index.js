import React, {useContext} from "react";
import { UserContext } from "../../../../../../contexts/userContext";

const Innerchild = () => {
  const {user, logOut} = useContext(UserContext);
  return (
    <div style={{ border: "3px solid black", padding: "25px" }}>
              <p>InnerChild</p>
              <p>{JSON.stringify(user)}</p>
              <button onClick={logOut}>Logout</button>
            </div>
  );
};

export default Innerchild;
