import React from 'react'
import classNames from 'classnames'

const getCardClasses = (depth) => {
    let classes = {
        'mdl-card': true
    }
    if (depth) {
        classes = {
            ...classes,
            [`mdl-shadow--${depth}dp`]: true
        }
    }
    return classes
}

export const CardTitle = (props) => {

    const {
        importance,
        textTitle,
        style,
        children,
        className,
        ...otherProps
    } = props
    const title = React.createElement(
        `h${importance}`, {
            ...otherProps,
            className: classNames({
                'mdl-card__title-text': textTitle
            })
        },
        children
    )

    return (
        <div className='mdl-card__title' style={style} {...otherProps}>
            {title}
        </div>
    )

}

CardTitle.propTypes = {
    importance: React.PropTypes.oneOf([1,2,3,4,5,6]),
    textTitle: React.PropTypes.bool
}

CardTitle.defaultProps = {
    importance: 2,
    textTitle: true
}


export const CardMedia = (props) => {

    return (
        <div className='mdl-card__media' {...props}>{props.children}</div>
    )

}


export const CardText = (props) => {

    return (
        <div className='mdl-card__supporting-text' {...props}>{props.children}</div>
    )

}


export const CardActions = (props) => {

    const className = classNames({
        'mdl-card__actions': true,
        'mdl-card--border': props.border
    })

    return (
        <div className={className} {...props}>{props.children}</div>
    )

}

CardActions.propTypes = {
    border: React.PropTypes.bool
}

CardActions.defaultProps = {
    border: true
}


export const CardMenu = (props) => {

    return (
        <div className='mdl-card__menu' {...props}>{props.children}</div>
    )

}


export const Card = (props) => {

    const {
        depth,
        ...otherProps
    } = props

    const className = classNames({
        ...otherProps.className,
        ...getCardClasses(depth)
    })

    return (
        <div className={className} {...otherProps}>{props.children}</div>
    )

}

Card.propTypes = {
    depth: React.PropTypes.oneOf([2,3,4,6,8,16])
}
