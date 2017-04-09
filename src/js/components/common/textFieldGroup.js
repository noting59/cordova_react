import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, placeholder, error, type, onChange }) => {
    return (
        <div className={classnames("input-field col s12", { 'has-error': error })}>
            <input
                id={field}
                onChange={onChange}
                value={value}
                type={type}
                name={field}
                placeholder={placeholder}
                className={classnames("validate form-container__input", { 'invalid': error })}
            />

            {error && <span className="help-block">{error}</span>}
        </div>

    );
}

TextFieldGroup.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;
