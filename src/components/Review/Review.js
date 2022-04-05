import React from "react";
import useReview from "../../hooks/useReview";
import Users from "../Users/Users";

const Review = () => {
const [users] = useReview();

  return (
    <div>

{users.map(user =><Users key={user.id} user={user}></Users>)}
    </div>
  );
};

export default Review;
