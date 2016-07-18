import React from 'react'
import classNames from 'classnames'


export const List = ({ children, ...otherProps }) => <ul className='mdl-list' {...otherProps}>{children}</ul>

export const ListItem = ({ children, nLine, ...otherProps }) => {

    const classes = {
        'mdl-list__item': true,
        'mdl-list__item--two-line': nLine == 2,
        'mdl-list__item--three-line': nLine === 3,
    }

    return <li className={classNames(classes)} {...otherProps}>{children}</li>
}

ListItem.propTypes = {
    nLine: React.PropTypes.oneOf([2,3])
}


export const SubDiv = ({ children, type, ...otherProps }) => {

    const classes = {
        'mdl-list__item-primary-content': type === 'primary',
        'mdl-list__item-secondary-content': type === 'secondary',
        'mdl-list__item-avatar': type === 'avatar',
        'mdl-list__item-icon': type === 'icon',
        'material-icons': type === 'icon' || type === 'avatar',
        'mdl-list__item-secondary-info': type === 'info',
        'mdl-list__item-secondary-action': type === 'action',
        'mdl-list__item-text-body': type === 'textBody',
        'mdl-list__item-sub-title': type === 'subTitle',
    }

    let element = type === 'action' ? 'a' : 'span'
    if (type === 'avatar' || type === 'icon') {
        element = 'i'
    }
    return React.createElement(
        element, {
            ...otherProps,
            className: classNames(classes)
        },
        children
    )

}

SubDiv.propTypes = {
    type: React.PropTypes.oneOf([
        'primary',
        'secondary',
        'avatar',
        'icon',
        'info',
        'action',
        'subTitle',
        'textBody'
    ])
}