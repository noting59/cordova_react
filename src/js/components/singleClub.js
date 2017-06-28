import React from 'react';

class SingleClub extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">All posts {this.props.routeParams.clubId}</h1>
                </div>
                <div className="col-md-12">
                    This page is only shown for registreted users!
                </div>
            </div>
        );
    }
}

export default SingleClub;
