import React from 'react';
import "./Home.css";
import { useNavigate } from "react-router-dom";
import useReview from "../../hooks/useReview";
import Users from "../Users/Users";
import FrontPageImage from "../../Images/frontPageImg.jpg";


const Home = () => {
  const [users, setUsers] = useReview();
  const navigate = useNavigate();
  return (
    <div>
      {/* 1st section */}
      <div className="section1-container">
        <div className="intro">
          <h1> Habluder Jonno Programming</h1>
          <p>
            The book is written by '<span>Jhankar Mahbub</span>'. The books is
            for all the students who want learn programming in a easy and simple
            way.
          </p>
          <p>
            <button className="btn-live">Live demo</button>
          </p>
        </div>
        <div>
          <img src={FrontPageImage} alt="" />
        </div>
      </div>

      <div>
        <h1>Customer Reviews ({users.slice(0, 3).length})</h1>
        {users.slice(0, 3).map((user) => (
          <Users key={user.id} user={user}></Users>
        ))}
      </div>
      <div>
        <button className="btn-navReview" onClick={() => navigate("/review")}>
          <span>See All Reviews... </span>
          <div className="liquid"></div>
        </button>
      </div>
    </div>
  );
};

export default Home;