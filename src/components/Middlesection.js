import React from 'react';
import UserProfile from './UserProfile';
import RepositoriesPage from './RepositoriesPage';
import StatsPage from './StatsPage';
import CollaborationPage from './CollaborationPage';

function MiddleSection() {
    // Logic to determine which page is active based on navigation
    const activePage = 'repositories'; // Example: 'repositories', 'stats', 'collaboration'

    let content = null;
    switch (activePage) {
        case 'repositories':
            content = <RepositoriesPage />;
            break;
        case 'stats':
            content = <StatsPage />;
            break;
        case 'collaboration':
            content = <CollaborationPage />;
            break;
        default:
            content = <RepositoriesPage />;
    }

    return (
        <div className="middle-section">
            <UserProfile />
            {content}
        </div>
    );
}

export default MiddleSection;