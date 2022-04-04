import React from 'react';
import useReview from '../../hooks/useReview';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers]=useReview()
    return (
        <div>
            <h1>My Home Page</h1>
            <div>

            </div>

            <div>
                <h1>customer review ({users.slice(0,3).length})</h1>
                {users.slice(0,3).map(user =><Users key={user.id} user={user}></Users>)}

            </div>
        </div>
    );
};

export default Home;