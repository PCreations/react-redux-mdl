import React from 'react'
import cx from 'classnames'
import withHandlers from 'recompose/withHandlers'
import lifecycle from 'recompose/lifecycle'
import withState from 'recompose/withState'
import mapProps from 'recompose/mapProps'
import compose from 'recompose/compose'

const Constant_ = {
    TINY_TIMEOUT: 0.001
}

const CssClasses_ = {
    INPUT: 'mdl-checkbox__input',
    BOX_OUTLINE: 'mdl-checkbox__box-outline',
    FOCUS_HELPER: 'mdl-checkbox__focus-helper',
    TICK_OUTLINE: 'mdl-checkbox__tick-outline',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_CHECKED: 'is-checked',
    IS_UPGRADED: 'is-upgraded'
}


const Checkbox = ({
    id,
    checked,
    focus,
    disabled,
    label,
    onChange,
    onFocus,
    onBlur,
    onMouseUp,
    ...otherProps
}) => {
    const labelClassName = cx({
        'mdl-checkbox': true,
        'mdl-js-checkbox': true,
        [CssClasses_.IS_UPGRADED]: true,
        [CssClasses_.IS_DISABLED]: disabled,
        [CssClasses_.IS_CHECKED]: checked,
        [CssClasses_.IS_FOCUSED]: focus
    })
    const inputClassName = cx({
        [CssClasses_.INPUT]: true,
    })

    let input_ = undefined

    return (
        <label
            htmlFor={id}
            className={labelClassName}
            onMouseUp={(e) => onMouseUp(e, input_)}>
            <input
                type='checkbox'
                id={id}
                ref={ref => input_ = ref}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={(e) => onBlur(e, input_)}
                className={inputClassName}
                checked={checked}
                {...otherProps}/>
            {label && <span className='mdl-checkbox__label'>{label}</span>}
            <span className={CssClasses_.FOCUS_HELPER}/>
            <span className={CssClasses_.BOX_OUTLINE}>
                <span className={CssClasses_.TICK_OUTLINE}></span>
            </span>
        </label>
    )
}

const enhance = (CheckboxComponent) => (
    class CheckboxContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                checked: typeof props.checked == "undefined" ? false : props.checked,
                focus: false
            }
            this.onChange = this.onChange.bind(this)
            this.onFocus = this.onFocus.bind(this)
            this.onBlur = this.onBlur.bind(this)
            this.onMouseUp = this.onMouseUp.bind(this)
        }
        onChange(e) {
            e.persist()
            const _onChange = this.props.onChange || ((e) => e)
            this.setState(state => ({
                ...state,
                checked: e.target.checked
            }), () => _onChange(e))
        }
        onFocus(e) {
            e.persist()
            const _onFocus = this.props.onFocus || ((e) => e)
            this.setState(state => ({
                ...state,
                focus: true
            }), () => _onFocus(e))
        }
        onBlur(e, input) {
            e.persist()
            const _onBlur = this.props.onBlur || ((e) => e)
            this.setState(state => ({
                ...state,
                focus: false
            }), () => _onBlur(e))
            window.setTimeout(() => input.blur(), Constant_.TINY_TIMEOUT)
        }
        onMouseUp(e, input) {
            e.persist()
            const _onMouseUp = this.props.onMouseUp || ((e) => e)
            this.setState(state => ({
                ...state,
                focus: false
            }), () => _onMouseUp(e))
            window.setTimeout(() => input.blur(), Constant_.TINY_TIMEOUT)
        }
        componentWillReceiveProps(newProps) {
            if (this.props.checked != newProps.checked) {
                this.setState(state => ({
                    ...state,
                    checked: newProps.checked
                }))
            }
        }
        render() {
            const {
                checked,
                onChange,
                onFocus,
                onBlur,
                onMouseUp,
                ...otherProps
            } = this.props
            return <CheckboxComponent
                    checked={this.state.checked}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onMouseUp={this.onMouseUp}
                    {...otherProps}/>
        }
    }
)

export default enhance(Checkbox)