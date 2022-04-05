import React from "react";
import './Users.css'

const Users = ({ user }) => {
  const { name, rating, review, img } = user;

  return (
    <div className="cart-container">
      <div className="">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>Rating : {rating}</h3>
      </div>
      <div className="cart-review">
        <p> {review}</p>
      </div>
    </div>
  );
};

export default Users;
