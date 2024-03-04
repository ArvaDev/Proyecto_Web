import React from "react";
import NavBar from "../organism/NavBar";
import ProfileCard from "../organism/ProfileCard";
import CreatePost from "../organism/CreatePost";
import "./Feed.css";
function Feed() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <div className="container-profile">
          <ProfileCard />
        </div>

        <div className="create-conteiner">
          <CreatePost />
        </div>

        <div>
          <h4>afkafsk</h4>
        </div>
      </div>
    </>
  );
}

export default Feed;
