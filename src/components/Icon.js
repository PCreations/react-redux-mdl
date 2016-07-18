import React from 'react'
import classNames from 'classnames'


const Icon = ({ className, name, ...otherProps }) => {
    const classes = classNames('material-icons', className);

    return <i className={classes} {...otherProps}>{name}</i>;
}

Icon.propTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string.isRequired
}

export default Icon
