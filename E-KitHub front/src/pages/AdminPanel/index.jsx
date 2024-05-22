import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

function AdminPanel() {
  return (
    <>
      <div className="adminPanel">
        <div className="panel">
          <h3>
            <NavLink to={"/bookPanel"}>Book</NavLink>
          </h3>
          <h3>
            <NavLink to={"/userPanel"}>User</NavLink>
          </h3>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
