import React,{useState, useEffect} from 'react';
import Review from '../Review/Review';

const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {

        fetch('review.json')
        .then(res=> res.json())
        .then(data=>setUsers(data))
    }, [])

    return (
        <div>
            <h2>Page Users {users.length}</h2>
            {users.map(user =><Review key={user.id} user={user}></Review>)}
        </div>
    );
};

export default Users;