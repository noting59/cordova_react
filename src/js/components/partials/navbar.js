import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import classnames from 'classnames';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false
        };
    }
    handler(e) {
        this.menuShowHide(e);
        this.logout(e);
    }
    menuShowHide(e) {
        this.setState({ menu: !this.state.menu });
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
        this.context.router.push('/');
    }

    render() {
        const { isAuthenticated, user } = this.props;

        const userLinks = (
            <div>
            <li><Link to="/user" onClick={this.menuShowHide.bind(this)}><i className="material-icons">settings</i>User Settings</Link></li>
            <li><Link to="/logout" onClick={this.menuShowHide.bind(this)}><i className="material-icons">reply all</i>Logout</Link></li>
            </div>
        );

        const guestLinks = (
            <div>
            <li><Link to="/login" className="waves-teal waves-effect" onClick={this.menuShowHide.bind(this)}><i className="material-icons">input</i>Login</Link></li>
            <li><Link to="/signup" className="waves-teal waves-effect" onClick={this.menuShowHide.bind(this)}><i className="material-icons">perm_identity</i>Sign Up</Link></li>
            </div>
        );

        return (
            <div>
                <div className="navbar-fixed">
                  <nav>
                    <div className="nav-wrapper indigo">
                        <div className="menu" onClick={this.menuShowHide.bind(this)}>
                            <div className={classnames("line-wrap", { 'toggled': this.state.menu })}>
                                <div className="line top"></div>
                                <div className="line center"></div>
                                <div className="line bottom"></div>
                            </div>
                        </div>
                        <Link className="brand-logo center" to="/">SportShedule</Link>
                    </div>
                  </nav>
                 </div>

                 <div onClick={this.menuShowHide.bind(this)} className={classnames('menu-bar', { 'closed': !this.state.menu })}>
                 <ul className={classnames("side-nav", { 'active': this.state.menu })}>
                   <li>
                     <div className="userView">
                       <div className="background">
                         <img src="img/office.jpg" />
                       </div>
                       <a href="#!user"><img className="circle" src="http://www.gravatar.com/avatar/e6ebd210b486772b8d412ff60c386313" /></a>
                       <a href="#!name"><span className="white-text name">{ user ? user : 'Please login'}</span></a>
                     </div>
                   </li>
                   <li><Link to="/" className="waves-teal waves-effect" onClick={this.menuShowHide.bind(this)}><i className="material-icons">home</i>Home</Link></li>
                   <li><Link to="/club" className="waves-teal waves-effect" onClick={this.menuShowHide.bind(this)}><i className="material-icons">business</i>Clubs</Link></li>

                   <li><div className="divider"></div></li>

                   { isAuthenticated ? userLinks : guestLinks }

                 </ul>
                 </div>
             </div>
        );
    }
}

NavigationBar.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
