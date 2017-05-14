import React from 'react';
import { Link } from 'react-router';
import { getAllClubs } from '../actions/clubsAction';
import { connect } from 'react-redux';
import map from 'lodash/map';

class ClubsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clubs: {},
            search: ''
        };
    }

    onChange(e) {
        this.setState({ search: e.target.value });
    }

    clubList(obj) {
        const list = map(obj.clubs, (obj) => {
                if (obj.name.toLowerCase().indexOf(this.state.search.toLowerCase()) === -1 ) {
                    return;
                } else {
                    return <li className="collection-item"><div>{obj.name}<Link to={`/club/${obj.id}`} className="secondary-content"><i className="material-icons">send</i></Link></div></li>
                }
            }
        );
        return (
            <ul className="collection with-header">
                <li className="collection-header"><h4>{obj.gname}</h4></li>
                { list }
            </ul>
        );
    }

    componentWillMount() {
        this.props.getAllClubs().then(
            (res) => {
                this.setState({ clubs: res.data })
            },
            (err) => {

            }
        );
    }

    render() {
        const clubsList = map(this.state.clubs, (obj) =>
            this.clubList(obj)
        );
        return (
            <div>
                <div className="container">
                    <div className="col s12 center-align">
                        <div className='row'>
                          <div className='col s12'>
                          </div>
                        </div>
                        <h3>Clubs</h3>
                        <input onChange={this.onChange.bind(this)} type="text" placeholder="Search for clubs" name="search" className="form-container__input"/>
                    </div>

                    {clubsList}

                </div>
            </div>
        );
    }
}

ClubsPage.propTypes = {
    getAllClubs: React.PropTypes.func.isRequired
};

export default connect(null, { getAllClubs })(ClubsPage);
