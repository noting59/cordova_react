import React from 'react';
import SignupForm from './signupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component {
    render() {
        const { userSignupRequest, addFlashMessage } = this.props;
        return (
            <div className="container form-container">
                <div className='row'>
                  <div className='col s12'>
                  </div>
                </div>
                <h5 className="center-align indigo-text">Join our community!</h5>

                <div className="col s12">
                    <SignupForm userSignupRequest={userSignupRequest} addFlashMessage = {addFlashMessage}/>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}

export default connect( null, { userSignupRequest, addFlashMessage })(SignupPage);
