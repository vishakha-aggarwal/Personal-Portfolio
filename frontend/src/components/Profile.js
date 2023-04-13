import React from "react";
import github from "../assets/img/github.png";
import leetcode from "../assets/img/leetcode.png";
import gfg from "../assets/img/gfg.png";

const Profile = () => {
  
  return (
    <section className="codingProfile" id="profile">
      <h2
        style={{
          textDecoration: "underline",
          paddingBottom: "20px",
          textAlign: "center",
        }}
      >
        Coding Profiles
      </h2>
      <div className="codingContainer">
        <div className="item" style={{ display: "flex" }}>
          <a
            href="https://github.com/vishakha-aggarwal"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div>
              <img src={github} alt="Github" />
            </div>
          </a>
        </div>
        <div className="item" style={{ display: "flex" }}>
          <a
            href="https://leetcode.com/vishakha-aggarwal/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div>
              <img src={leetcode} alt="Leetcode" />
            </div>
          </a>
        </div>
        <div className="item" style={{ display: "flex" }}>
          <a
            href="https://auth.geeksforgeeks.org/user/vishakhaaggarwal251/profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div>
              <img src={gfg} alt="Geeks for Geeks" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
