import React, { useState } from 'react';
import { profile } from '../../UserData';
import './Users.css';
import Profile from '../Profile/Profile';
import Summary from '../Summary/Summary';


const Users = () => {
    
    const [user, setUser] = useState(profile);
    const [salary, setSalary] = useState(0);
    const [count, setCount] = useState(0);

    const handleAddFriend = (users) => {
        //console.log("button clicked");
        setSalary(salary + parseInt(users.salary));
        setCount(count + 1);
    }

    return (
        <div className="users-container">
            <div className="profile-container">
                {
                    user.map(users => <Profile handleAddFriend={handleAddFriend} users={users}></Profile>)
                }
                
            </div>
            <div className="summary-container">
                <Summary count={count} salary={salary}></Summary>

            </div>
        </div>
    );
};

export default Users;