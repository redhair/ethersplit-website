import React from "react"
import PropTypes from "prop-types"

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

function Button({ children, className, ...rest }) {
  return (
    <button
      className={
        className +
        " px-8 py-4 bg-blue-400 rounded-lg text-white text-2xl font-bold"
      }
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
