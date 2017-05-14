import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Preloader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isLoading } = this.props.ajax;

        return (
            <div className={classnames('preloader-wrapper big', { 'active': isLoading })}>
                <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
             </div>
        );
    }
}

Preloader.propTypes = {
    ajax: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        ajax: state.ajaxRequest
    };
}

export default connect(mapStateToProps)(Preloader);
