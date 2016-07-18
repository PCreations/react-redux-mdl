import React from 'react'
import classNames from 'classnames'

const getClasses = (props) => {
    return {
        'mdl-badge': true,
        'mdl-badge--no-background': props.noBackground,
        'mdl-badge--overlap': props.overlap
    }
}

const Badge = (props) => {

    const {
        ['className']: childClassName,
        ...otherChildProps
    } = props.children.props

    const finalClassName = classNames({
        ...childClassName,
        ...getClasses(props)
    })

    return React.cloneElement(props.children, {
        ...otherChildProps,
        ['className']: finalClassName,
        ['data-badge']: props.value
    })

}

Badge.propTypes = {
    value: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
    noBackground: React.PropTypes.bool,
    overlap: React.PropTypes.bool
}

Badge.defaultProps = {
    noBackground: false,
    overlap: false
}

export default Badge