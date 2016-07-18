import React from 'react'
import classNames from 'classnames'


const getClasses = (props) => {
    return {
        'mdl-button': true,
        'mdl-button--raised': props.type == 'raised',
        'mdl-button--fab': props.type == 'fab' || props.type == 'miniFab',
        'mdl-button--mini-fab': props.type == 'miniFab',
        'mdl-button--icon': props.type == 'icon',
        'mdl-button--colored': props.colored,
        'mdl-button--primary': props.primary,
        'mdl-button--accent': props.accent,
    }
}


const Button = (props) => {

    const {
        disabled,
        ...otherProps
    } = props

    return (
        <button className={classNames(getClasses(props))} disabled={disabled} {...otherProps}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    type: React.PropTypes.oneOf(['flat','raised','fab','miniFab','icon']).isRequired,
    colored: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    accent: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    disabled: React.PropTypes.bool
}

Button.defaultProps = {
    disabled: false
}

Button.displayName = 'Button'


const { type, ...typedButtonPropTypes } = Button.propTypes

export const FlatButton = (props) => {

    props = {
        ...props,
        type: 'flat'
    }

    return (
        <Button {...props} />
    )
}

FlatButton.propTypes = {
    ...typedButtonPropTypes
}

FlatButton.defaultProps = {
    ...Button.defaultProps
}

FlatButton.displayName = 'FlatButton'


export const RaisedButton = (props) => {

    props = {
        ...props,
        type: 'raised'
    }

    return (
        <Button {...props} />
    )
}

RaisedButton.propTypes = {
    ...typedButtonPropTypes
}

RaisedButton.defaultProps = {
    ...Button.defaultProps
}

RaisedButton.displayName = 'RaisedButton'


export const FabButton = (props) => {

    props = {
        ...props,
        type: 'fab'
    }

    return (
        <Button {...props} />
    )
}

FabButton.propTypes = {
    ...typedButtonPropTypes
}

FabButton.defaultProps = {
    ...Button.defaultProps
}

FabButton.displayName = 'FabButton'


export const MiniFabButton = (props) => {

    props = {
        ...props,
        type: 'miniFab'
    }

    return (
        <Button {...props} />
    )
}

MiniFabButton.propTypes = {
    ...typedButtonPropTypes
}

MiniFabButton.defaultProps = {
    ...Button.defaultProps
}

MiniFabButton.displayName = 'MiniFabButton'


export const IconButton = (props) => {

    props = {
        ...props,
        type: 'icon'
    }

    return (
        <Button {...props} />
    )
}

IconButton.propTypes = {
    ...typedButtonPropTypes
}

IconButton.defaultProps = {
    ...Button.defaultProps
}

IconButton.displayName = 'IconButton'
