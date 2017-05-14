import React from 'react';
import { Link } from 'react-router';

class ClubsPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">All clubs</h1>
                </div>
                <div className="col-md-12">
                    This page is only shown for registreted users!
                </div>
            </div>
        );
    }
}

export default ClubsPage;
