import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Profile.css';

const Profile = (props) => {

    const {name, img, phone, email, salary} = props.users;
    return (
        <div className="profile">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="information">
                <h2>Name: {name}</h2>
                <h3>Email: {email}</h3>
                <h3>Phone: {phone}</h3>
                <h3>Salary: {salary}</h3>
                <button className="main-button" onClick={() => props.handleAddFriend(props.users)}>
                    <FontAwesomeIcon icon={faPlus}/> Add Friend
                </button>
            </div>
        </div>
    );
};

export default Profile;