import React from 'react'
import classNames from 'classnames'


export const Grid = (props) => {

    const { noSpacing, ...otherProps } = props

    const getClasses = () => {
        return {
            'mdl-grid': true,
            'mdl-grid--no-spacing': noSpacing
        }
    }

    return (
        <div className={(classNames(getClasses()))} {...otherProps} >
            {props.children}
        </div>
    )

}

Grid.propTypes = {
    noSpacing: React.PropTypes.bool,
}

Grid.defaultProps = {
    noSpacing: false
}


export const Cell = (props) => {

    const {
        col,
        desktop,
        tablet,
        phone,
        offset,
        offsetDesktop,
        offsetTablet,
        offsetPhone,
        order,
        orderDesktop,
        orderTablet,
        orderPhone,
        hideDesktop,
        hideTablet,
        hidePhone,
        stretch,
        align,
        ...otherProps
    } = props

    const getClasses = () => {
        return {
            'mdl-cell': true,
            [`mdl-cell--${col}-col`]: typeof col !== 'undefined',
            [`mdl-cell--${desktop}-col-desktop`]: typeof desktop !== 'undefined',
            [`mdl-cell--${tablet}-col-tablet`]: typeof tablet !== 'undefined',
            [`mdl-cell--${phone}-col-phone`]: typeof phone !== 'undefined',
            [`mdl-cell--${offset}-offset`]: typeof offset !== 'undefined',
            [`mdl-cell--${offsetDesktop}-offset-desktop`]: typeof offsetDesktop !== 'undefined',
            [`mdl-cell--${offsetTablet}-offset-tablet`]: typeof offsetTablet !== 'undefined',
            [`mdl-cell--${offsetPhone}-offset-phone`]: typeof offsetPhone !== 'undefined',
            [`mdl-cell--order-${order}`]: typeof order !== 'undefined',
            [`mdl-cell--order-${orderDesktop}-desktop`]: typeof orderDesktop !== 'undefined',
            [`mdl-cell--order-${orderTablet}-tablet`]: typeof orderTablet !== 'undefined',
            [`mdl-cell--order-${orderPhone}-phone`]: typeof orderPhone !== 'undefined',
            'mdl-cell--hide-desktop': typeof hideDesktop !== 'undefined',
            'mdl-cell--hide-tablet': typeof hideTablet !== 'undefined',
            'mdl-cell--hide-phone': typeof hidePhone !== 'undefined',
            'mdl-cell--stretch': stretch,
            'mdl-cell--top': align === 'top',
            'mdl-cell--middle': align === 'middle',
            'mdl-cell--bottom': align === 'bottom',
        }
    }

    return <div className={classNames(getClasses())} {...otherProps}>{props.children}</div>

}

Cell.propTypes = {
    col: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
    desktop: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
    tablet: React.PropTypes.oneOf([1,2,3,4,5,6,7,8]),
    phone: React.PropTypes.oneOf([1,2,3,4]),
    offset: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11]),
    offsetDesktop: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11]),
    offsetTablet: React.PropTypes.oneOf([1,2,3,4,5,6,7]),
    offsetPhone: React.PropTypes.oneOf([1,2,3]),
    order: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,12]),
    orderDesktop: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
    orderTablet: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
    orderPhone: React.PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
    hideDesktop: React.PropTypes.bool,
    hideTablet: React.PropTypes.bool,
    hidePhone: React.PropTypes.bool,
    stretch: React.PropTypes.bool,
    align: React.PropTypes.oneOf(['top','middle','bottom'])
}

Cell.defaultProps = {
    col: 4,
    stretch: true
}