import PropTypes from 'prop-types';

function Button(props) {
    return <button onClick={props.event}>{props.text}</button>;

}

Button.propTypes = {
    text: PropTypes.string
};

export default Button;