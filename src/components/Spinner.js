import React from 'react'
import classNames from 'classnames'


const Constant_ = {
    MDL_SPINNER_LAYER_COUNT: 4
}


const CssClasses_ = {
    MDL_SPINNER_LAYER: 'mdl-spinner__layer',
    MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',
    MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',
    MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',
    MDL_SPINNER_LEFT: 'mdl-spinner__left',
    MDL_SPINNER_RIGHT: 'mdl-spinner__right'
}


const Layer = ({ index }) => {

    const classes = {
        [CssClasses_.MDL_SPINNER_LAYER]: true,
        [`${CssClasses_.MDL_SPINNER_LAYER}-${index}`]: true
    }

    const leftClipperClasses = {
        [CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER]: true,
        [CssClasses_.MDL_SPINNER_LEFT]: true
    }

    const rightClipperClasses = {
        [CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER]: true,
        [CssClasses_.MDL_SPINNER_RIGHT]: true
    }

    const SpinnerCircle = () => <div className={CssClasses_.MDL_SPINNER_CIRCLE}/>


    return (
        <div className={classNames(classes)}>
            <div className={classNames(leftClipperClasses)}>
                <SpinnerCircle/>
            </div>
            <div className={CssClasses_.MDL_SPINNER_GAP_PATCH}>
                <SpinnerCircle/>
            </div>
            <div className={classNames(rightClipperClasses)}>
                <SpinnerCircle/>
            </div>
        </div>
    )
}

const Spinner = ({ className, active, singleColor, ...otherProps }) => {

    const classes = {
        'mdl-spinner': true,
        'is-active': active,
        'is-upgraded': true,
        'mdl-spinner--single-color': singleColor
    }

    return (
        <div className={classNames(classes, className)} {...otherProps}>
            {Array(Constant_.MDL_SPINNER_LAYER_COUNT).fill(0).map((l,i) => <Layer key={i} index={i+1}/>)}
        </div>
    )

}

export default Spinner