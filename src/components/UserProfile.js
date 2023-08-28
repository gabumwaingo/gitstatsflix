import React from 'react';

function UserProfile() {
    // Fetch user data and interests from API
    const userData = {
        profilePicture: 'url-to-profile-picture',
        interests: ['JavaScript', 'React', 'Web Development'],
        followers: 1000,
    };

    return (
        <div className="user-profile">
            <img src={userData.profilePicture} alt="Profile" />
            <div className="user-info">
                <p>Interests: {userData.interests.join(', ')}</p>
                <p>Followers: {userData.followers}</p>
            </div>
        </div>
    );
}

export default UserProfile;