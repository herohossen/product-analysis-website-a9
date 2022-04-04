import React from "react";

const Users = ({ user }) => {
  const { name, rating, review, img } = user;

  return (
    <div>
      <h2>Page Users </h2>
      <img src={img} alt="" />
      Name: {name}
      Rating : {rating}
      review: {review}
    </div>
  );
};

export default Users;
