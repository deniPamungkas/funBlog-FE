import PropTypes from "prop-types";
import "./button.scss";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.className} flex justify-center items-center`}
      onClick={props.onClick}
      type={props.type}
      name={props.name}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.any,
  type: PropTypes.any,
};

export default Button;
