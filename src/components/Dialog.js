import React from 'react'
import dialogPolyfill from 'dialog-polyfill'
import classNames from 'classnames'


export const DialogTitle = (props) => {

    const {
        importance,
        style,
        children,
        className,
        ...otherProps
    } = props

    return React.createElement(
        `h${importance}`, {
            ...otherProps,
            className: 'mdl-dialog__title'
        },
        children
    )

}

DialogTitle.propTypes = {
    importance: React.PropTypes.oneOf([1,2,3,4,5,6])
}

DialogTitle.defaultProps = {
    importance: 2
}


export const DialogContent = (props) => {

    return (
        <div className='mdl-dialog__content'>{props.children}</div>
    )

}

export const DialogActions = (props) => {

    const className = classNames({
        'mdl-dialog__actions': true,
        'mdl-dialog__actions--full-width': props.fullWidth
    })

    return (
        <div className={className}>{props.children}</div>
    )

}

DialogActions.propTypes = {
    fullWidth: React.PropTypes.bool
}

DialogActions.defaultProps = {
    fullWidth: false
}


export class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dialog';
        this._dialog = null
        this._neverOpened = true /* we do not use state here since it's not relative to rendering */
    }
    componentDidMount() {
        if (this._dialog) {
            dialogPolyfill.registerDialog(this._dialog)
            this._handleDialog()
        }
    }
    componentDidUpdate() {
        this._handleDialog()
    }
    _handleDialog() {
        if (this.props.open === true) {
            this._dialog && this._dialog.showModal()
            this._neverOpened = false
        } else {
            this._dialog && !this._neverOpened && this._dialog.close()
        }
    }
    render() {
        return (
            <dialog className='mdl-dialog' ref={(dialog) => this._dialog = dialog}>
                {this.props.children}
            </dialog>
        )
    }
}

Dialog.propTypes = {
    open: React.PropTypes.bool
}
