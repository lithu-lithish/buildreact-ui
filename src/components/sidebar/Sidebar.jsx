import "./sidebar.scss";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PercentIcon from "@mui/icons-material/Percent";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../../svg/logogym.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div style={{ margin: "8% 0 auto", textAlign: "center" }}>
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className="top">
        <h2
          className="logo"
          style={{
            fontFamily: "MonumentExtended",
            color: "#011627",
            fontStyle: "Normal",
            fontWeight: "400",
            forntSize: "30.5px",
            lineHeight: "37px",
            // paddingTop: "9%",
          }}
        >
          Gym tracker
        </h2>
      </div>
      <div style={{ paddingTop: "8%" }}>
        <hr />
      </div>
      <div className="center">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid #D0FD3E" : "",
              })}
            >
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/registration"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid #D0FD3E" : "",
              })}
            >
              <PercentIcon className="icon" />
              <span>Registration</span>
            </NavLink>
          </li>

          <li>
            <CreditCardIcon className="icon" />
            <span>attenance report</span>
          </li>

          <li>
            <StoreIcon className="icon" />
            <span>Export Date</span>
          </li>

          <li
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          >
            <ExitToAppIcon
              className="icon"
              style={{
                color: "crimson",
              }}
            />
            <span
              style={{
                color: "crimson",
              }}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>

      {/* <div className="bottom">
<div
className="colorOption"
onClick={() => dispatch({ type: "LIGHT" })}
></div>
<div
className="colorOption"
onClick={() => dispatch({ type: "DARK" })}
></div>
</div> */}
    </div>
  );
};

export default Sidebar;
