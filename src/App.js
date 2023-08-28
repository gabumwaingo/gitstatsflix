import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MiddleSection from './components/Middlesection';
import Footer from './components/Footer';
import RepositoriesPage from './components/RepositoriesPage'; // Import my RepositoriesPage component
import StatsPage from './components/StatsPage'; // Import my StatsPage component
import CollaborationPage from './components/CollaborationPage'; // Import  CollaborationPage component

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Navigation />
                <Switch>
                    <Route path="/repositories">
                        <RepositoriesPage />
                    </Route>
                    <Route path="/stats">
                        <StatsPage />
                    </Route>
                    <Route path="/collaboration">
                        <CollaborationPage />
                    </Route>
                    {/* Add a default route */}
                    <Route path="/">
                        <RepositoriesPage />
                    </Route>
                </Switch>
                <MiddleSection />
                <Footer />
            </div>
        </Router>
    );
}

export default App;