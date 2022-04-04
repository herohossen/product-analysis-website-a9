import React from "react";
import './Users.css'

const Users = ({ user }) => {
  const { name, rating, review, img } = user;

  return (
    <div className="cart-container">
      <h2>Page Users </h2>
      <div>
      <img  src={img} alt="" />
      </div>
      <div>
      Name: {name}
      Rating : {rating}
      review: {review}
      </div>


    </div>
  );
};

export default Users;
