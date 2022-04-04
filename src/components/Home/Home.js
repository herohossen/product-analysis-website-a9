import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Users from '../Users/Users';


const Home = () => {
    const [users, setUsers]=useReview()
    const navigate = useNavigate();
    return (
        <div>
            <h1>My Home Page</h1>
            <div>

            </div>

            <div>
                <h1>customer review ({users.slice(0,3).length})</h1>
                {users.slice(0,3).map(user =><Users key={user.id} user={user}></Users>)}

            </div>
            <div>
            <button onClick={()=>navigate('/review')}>See more... </button>

            </div>
        </div>
    );
};

export default Home;