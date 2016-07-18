import React from 'react'
import classNames from 'classnames'


export const MegaFooter = ({ children, className, ...other }) => {

    return (
        <footer className={classNames(['mdl-mega-footer',className])} {...other}>
            {children}
        </footer>
    )
}


export const MegaFooterTopSection = ({ children, className, ...other }) => (
    <div className={classNames(['mdl-mega-footer__top-section', className])} {...other}>
        {children}
    </div>
)


export const MegaFooterMiddleSection = ({ children, className, ...other }) => (
    <div className={classNames(['mdl-mega-footer__middle-section', className])} {...other}>
        {children}
    </div>
)


export const MegaFooterBottomSection = ({ children, className, ...other }) => (
    <div className={classNames(['mdl-mega-footer__bottom-section', className])} {...other}>
        {children}
    </div>
)


export const MegaFooterLeftSection = ({ children, className, ...other }) => (
    <div className={classNames(['mdl-mega-footer__left-section', className])} {...other}>
        {children}
    </div>
)


export const MegaFooterRightSection = ({ children, className, ...other }) => (
    <div className={classNames(['mdl-mega-footer__right-section', className])} {...other}>
        {children}
    </div>
)


export const MegaFooterDropDownSection = ({ children, className, ...other }) => (
    <div className={classNames(['mdl-mega-footer__drop-down-section', className])} {...other}>
        {children}
    </div>
)


export const MegaFooterHeading = ({ children, className, ...other }) => (
    <h1 className={classNames(['mdl-mega-footer__heading', className])} {...other}>
        { children }
    </h1>
)


export const FooterHeadingSection = ({ children, className, ...other }) => (
    <div className={classNames(['mdl-logo', className])} {...other}>
        {children}
    </div>
)


export const MegaFooterLinkList = ({ children, className, ...other }) => (
    <ul className={classNames(['mdl-mega-footer__link-list', className])} {...other}>
        {children}
    </ul>
)


export const MegaFooterSocialButton = ({ children, className, ...other }) => (
    <button className={classNames(['mdl-mega-footer__social-btn', className])}>
        {children}
    </button>
)


export const MiniFooter = ({ children, className, ...other }) => (
    <footer className={classNames(['mdl-mini-footer', className])} {...other}>
        {children}
    </footer>
)


export const MiniFooterLeftSection = ({ children, className, ...other }) => (
    <footer className={classNames(['mdl-mini-footer__left-section', className])} {...other}>
        {children}
    </footer>
)


export const MiniFooterRightSection = ({ children, className, ...other }) => (
    <footer className={classNames(['mdl-mini-footer__right-section', className])} {...other}>
        {children}
    </footer>
)


export const MiniFooterLinkList = ({ children, className, ...other }) => (
    <ul className={classNames(['mdl-mini-footer__link-list', className])} {...other}>
        {children}
    </ul>
)


export const MiniFooterSocialButton = ({ children, className, ...other }) => (
    <button className={classNames(['mdl-mini-footer__social-btn', className])} {...other}>
        {children}
    </button>
)