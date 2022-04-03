import React from 'react';

const Review = (props) => {
const {name}=props.user;

    return (
        <div>
           Name: {name}
my review
        </div>
    );
};

export default Review;