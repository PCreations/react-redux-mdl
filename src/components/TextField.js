import React from 'react'
import cx from 'classnames'


const CssClasses_ = {
    LABEL: 'mdl-textfield__label',
    INPUT: 'mdl-textfield__input',
    ERROR: 'mdl-textfield__error',
    IS_DIRTY: 'is-dirty',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_INVALID: 'is-invalid',
    IS_UPGRADED: 'is-upgraded',
    HAS_PLACEHOLDER: 'has-placeholder',
    HAS_FLOATING_LABEL: 'mdl-textfield--floating-label'
}


class TextField extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            focus: typeof props.autoFocus === "undefined" ? false : props.autoFocus,
            invalid: false,
            value: props.value || ''
        }
        this.onChange = this.onChange.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this._input = undefined
    }

    onChange(e) {
        e.persist()
        const currentRowCount = e.target.value.split('\n').length
        const _onChange = this.props.onChange || ((e) => e)
        if (e.keyCode === 13) {
            if (currentRowCount >= this.props.maxRows) {
                return;
            }
        }
        this.setState(state => ({
            ...state,
            value: event.target.value
        }), () => _onChange(e))
    }

    onFocus(e) {
        e.persist()
        const _onFocus = this.props.onFocus || ((e) => e)
        this.setState(state => ({
            ...state,
            focus: true
        }), () => () => _onFocus(e))
    }

    onBlur(e) {
        e.persist()
        const _onBlur = this.props.onBlur || ((e) => e)
        this.setState(state => ({
            ...state,
            focus: false
        }), () => _onBlur(e))
    }

    componentDidUpdate() {
        if (this.input_.validity) {
            if (!this.input_.validity.valid != this.state.invalid) {
                this.setState(state => ({
                    ...state,
                    invalid: !this.input_.validity.valid
                }))
            }
        }
    }

    render() {
        const {
            id,
            maxRows,
            className,
            placeholder,
            value,
            disabled,
            floatingLabel,
            errorText,
            autoFocus,
            onBlur,
            onFocus,
            onChange,
            ...otherProps
        } = this.props
        const divClassName = cx({
            'mdl-textfield': true,
            'mdl-js-textfield': true,
            [CssClasses_.IS_UPGRADED]: true,
            [CssClasses_.IS_DISABLED]: disabled,
            [CssClasses_.HAS_FLOATING_LABEL]: floatingLabel,
            [CssClasses_.IS_DIRTY]: this.state.value && this.state.value.length > 0,
            [CssClasses_.IS_FOCUSED]: this.state.focus,
            [CssClasses_.IS_INVALID]: this.state.invalid
        })
        const inputClassName = cx({
            [CssClasses_.INPUT]: true
        }, className)
        const labelClassName = cx({
            [CssClasses_.LABEL]: true
        })
        const errorClassName = cx({
            [CssClasses_.ERROR]: true
        })

        return (
            <div className={divClassName} {...otherProps}>
                <input
                    type="text"
                    id={id}
                    ref={(ref) => this.input_ = ref}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onChange={this.onChange}
                    value={this.state.value}
                    className={inputClassName}
                    autoFocus/>
                <label
                    htmlFor={id}
                    className={labelClassName}>
                    {(floatingLabel || this.state.value.length == 0) && placeholder }
                </label>

                {this.state.invalid && this.props.pattern && (
                    <span className={errorClassName}>{ errorText }</span>
                )}
            </div>
        )
    }

}

export default TextField