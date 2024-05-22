import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Scroll from "../../components/Scroll";
import "./style.scss";
import { UserContext } from "../../context/userContext";

function UserEditPanel() {
  let { id } = useParams();
  const { token, decode } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if  (!decode) {
      window.location.href = "/";
    } else {
      getUserById(id);
    }
  }, [decode, id])

  async function getUserById(id) {
    try {
      const response = await fetch(`/api/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      setUsername(userData.username);
      setEmail(userData.email);
      setRole(userData.role)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  

  async function handleSubmit(e) {
    e.preventDefault();
    if (decode && decode.role === "admin") {
      try {
        const response = await fetch(`/api/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ username, email, role}),
        });
        if (response.ok) {
          window.location.href = "/userPanel";
        }
        console.log("Product updated successfully");
      } catch (error) {
        console.error("Error occurred while updating user:", error);
      }
    }
  }

  return (
    <>
 
      <div className="userUpdatePanel">
        <form  onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="role"
          />

          <button type="submit">Update User</button>
        </form>
      </div>
      <Scroll />
    </>
  );
}

export default UserEditPanel;
