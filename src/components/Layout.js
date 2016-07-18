import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

const Constant_ = {
    MAX_WIDTH: '(max-width: 1024px)',
    TAB_SCROLL_PIXELS: 100,
    RESIZE_TIMEOUT: 100,

    MENU_ICON: '&#xE5D2;',
    CHEVRON_LEFT: 'chevron_left',
    CHEVRON_RIGHT: 'chevron_right'
};

const Keycodes_ = {
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32
};

const Mode_ = {
    STANDARD: 0,
    SEAMED: 1,
    WATERFALL: 2,
    SCROLL: 3
};

const CssClasses_ = {
    CONTAINER: 'mdl-layout__container',
    HEADER: 'mdl-layout__header',
    DRAWER: 'mdl-layout__drawer',
    CONTENT: 'mdl-layout__content',
    DRAWER_BTN: 'mdl-layout__drawer-button',

    ICON: 'material-icons',

    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
    RIPPLE: 'mdl-ripple',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',

    HEADER_SEAMED: 'mdl-layout__header--seamed',
    HEADER_WATERFALL: 'mdl-layout__header--waterfall',
    HEADER_SCROLL: 'mdl-layout__header--scroll',

    FIXED_HEADER: 'mdl-layout--fixed-header',
    OBFUSCATOR: 'mdl-layout__obfuscator',

    TAB_BAR: 'mdl-layout__tab-bar',
    TAB_CONTAINER: 'mdl-layout__tab-bar-container',
    TAB: 'mdl-layout__tab',
    TAB_BAR_BUTTON: 'mdl-layout__tab-bar-button',
    TAB_BAR_LEFT_BUTTON: 'mdl-layout__tab-bar-left-button',
    TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button',
    PANEL: 'mdl-layout__tab-panel',

    HAS_DRAWER: 'has-drawer',
    HAS_TABS: 'has-tabs',
    HAS_SCROLLING_HEADER: 'has-scrolling-header',
    CASTING_SHADOW: 'is-casting-shadow',
    IS_COMPACT: 'is-compact',
    IS_SMALL_SCREEN: 'is-small-screen',
    IS_DRAWER_OPEN: 'is-visible',
    IS_ACTIVE: 'is-active',
    IS_UPGRADED: 'is-upgraded',
    IS_ANIMATING: 'is-animating',

    ON_LARGE_SCREEN: 'mdl-layout--large-screen-only',
    ON_SMALL_SCREEN: 'mdl-layout--small-screen-only'

};


export const LayoutHeader = (props) => {

    const {
        title,
        children,
        scroll,
        waterfall,
        waterfallHideTop,
        transparent,
        seamed,
        ...otherProps
    } = props

    const getClasses = () => {
        return {
            'mdl-layout__header': true,
            'mdl-layout__header--scroll': scroll,
            'mdl-layout__header--waterfall': waterfall,
            'mdl-layout__header--waterfall-hide-top': waterfallHideTop,
            'mdl-layout__header--transparent': transparent,
            'mdl-layout__header--seamed': seamed,
            [CssClasses_.CASTING_SHADOW]: !seamed
        }
    }

    return (
        <header className={classNames(getClasses())} {...otherProps}>
            {props.children}
        </header>
    )
}

LayoutHeader.propTypes = {
    children: React.PropTypes.node.isRequired,
    scroll: React.PropTypes.bool,
    waterfall: React.PropTypes.bool,
    waterfallHideTop: React.PropTypes.bool,
    transparent: React.PropTypes.bool,
    seamed: React.PropTypes.bool
}


export const LayoutHeaderRow = (props) => {

    const {
        children,
        ...otherProps
    } = props

    return <div className='mdl-layout__header-row' {...otherProps}>{children}</div>

}


export const LayoutTitle = (props) => {

    const {
        children,
        ...otherProps
    } = props

    return <span className='mdl-layout-title' {...otherProps}>{children}</span>
}


export const LayoutSpacer = () => <div className='mdl-layout-spacer'/>


export const LayoutNav = (props) => {

    const {
        children,
        ...otherProps
    } = props

    return (
        <nav className='mdl-navigation' {...otherProps}>{children}</nav>
    )

}


export const LayoutNavLink = (props) => {

    const {
        children,
        ...otherProps
    } = props

    return (
        <a className='mdl-navigation__link' {...otherProps}>{children}</a>
    )

}


export const Drawer = (props) => {

    const {
        children,
        className,
        ...otherProps
    } = props

    return <div className={`${className} mdl-layout__drawer`} {...otherProps}>{children}</div>

}


export const DrawerButton = (props) => (
    <div
        aria-expanded={false}
        role='button'
        tabindex={0}
        className={CssClasses_.DRAWER_BTN}
        {...props}>
        <i className={CssClasses_.ICON}>menu</i>
    </div>
)


const LayoutObsfuscator = (props) => <div className={classNames({
    [CssClasses_.IS_DRAWER_OPEN]: true,
    [CssClasses_.OBFUSCATOR]: true
})} {...props} />


export const LayoutContent = (props) => {

    const {
        children,
        ...otherProps
    } = props

    return (
        <main className='mdl-layout__content' {...otherProps}>
            {children}
        </main>
    )
}


export class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Layout'
        this.container_ = null
        this.element_ = null
        this.focusedElement = null
        this.headerComponent_ = null
        this.drawerComponent_ = null
        this.contentComponent_ = null
        this.mode = Mode_.STANDARD
        this.classes = {
            'mdl-layout': true,
            'mdl-layout--fixed-header': props.fixedHeader,
            'mdl-layout--fixed-tabs': props.fixedTabs,
            [CssClasses_.IS_UPGRADED]: true
        },
        this.layoutContainerClasses = {}
        this.headerClasses = {}
        this.tabBarClasses = {}
        this.state = {
            drawerOpened: props.fixedDrawer,
            hasObfuscator: !props.fixedDrawer
        }
    }
    _setChildrenDOMNodes() {
        React.Children.map(this.props.children, (child) => {
            switch (child.type) {
                case LayoutHeader:
                    this.headerComponent_ = child
                    React.Children.map(child.props.children, (headerChild) => {
                        if (headerChild.type == LayoutTabBar) {
                            this.tabBarComponent_ = headerChild
                            this.setState(state => {
                                return {
                                    ...state,
                                    classes: {
                                        ...state.classes,
                                        [CssClasses_.HAS_TABS]: true
                                    }
                                }
                            })
                        }
                    })
                    break
                case Drawer:
                    this.drawerComponent_ = child
                    this.setState(state => {
                        return {
                            ...state,
                            classes: {
                                ...state.classes,
                                [CssClasses_.HAS_DRAWER]: true
                            }
                        }
                    })
                    break
                case LayoutContent:
                    this.contentComponent_ = child
                    break
            }
        })
    }
    _initHeader() {
        if (this.headerComponent_) {
            this._setMode()
            if (this.mode === Mode_.STANDARD) {
                this.headerClasses = {
                    ...this.headerClasses,
                    [CssClasses_.CASTING_SHADOW]: true
                }
                if (this.tabBarComponent_) {
                    this.tabBarClasses = {
                        ...this.tabBarClasses,
                        [CssClasses_.CASTING_SHADOW]: true
                    }
                }
            }
            else if (this.mode === Mode_.WATERFALL) {
                //TODO handle scroll
            }
        }
    }
    _setMode() {
        if (this.headerComponent_.props.waterfall) {
            this.mode = Mode_.WATERFALL
        }
        else if (this.headerComponent_.props.scroll) {
            this.mode = Mode_.SCROLL
            this.layoutContainerClasses = {
                ...this.layoutContainerClasses,
                [CssClasses_.HAS_SCROLLING_HEADER]: true
            }
        }
    }
    _drawerToggleHandler(evt) {
        if (this.props.fixedDrawer) { return; }

        if (evt && (evt.type === 'keydown')) {
            if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
                // prevent scrolling in drawer nav
            evt.preventDefault();
            } else {
                // prevent other keys
                return;
            }
        }

        this.setState(state => {
            return {
            ...state,
            drawerOpened: !state.drawerOpened
            }
        })
    }
    componentDidMount() {
        if (this.element_) {
            const focusedElement = this.element_.querySelector(':focus')
            if (focusedElement) {
                focusedElement.focus()
            }
        }
        this._setChildrenDOMNodes()
        this._initHeader()
    }
    render() {

        const layoutContainerProps = {
            ...this.props,
            className: `${this.props.className} ${classNames(this.layoutContainerClasses)}`
        }

        const self = this

        return (
            <LayoutContainer ref={(ref) => self.container_ = ReactDOM.findDOMNode(ref)} {...layoutContainerProps}>
                <div className={classNames(self.classes)} ref={(ref) => self.element_ = ref}>
                    {React.Children.map(self.props.children, child => {
                        switch (child.type) {
                            case Drawer:
                                return (
                                    <div>
                                        {self.state.drawerOpened ? React.cloneElement(
                                            child, {
                                                ...child.props,
                                                className: `${child.props.className} ${CssClasses_.IS_DRAWER_OPEN}`
                                            }
                                        ) : child}
                                        {!self.state.hasFixedHeader && (
                                            <DrawerButton
                                                onClick={(e) => self._drawerToggleHandler(e)}
                                                onKeyDown={(e) => self._drawerToggleHandler(e)}
                                                style={{ color: 'white' }}>
                                                <i className="material-icons">menu</i>
                                            </DrawerButton>
                                        )}
                                    </div>
                                )
                            case LayoutContent:
                                return self.state.drawerOpened && self.state.hasObfuscator ? (
                                    <div>
                                        {child}
                                        <LayoutObsfuscator
                                            onClick={(e) => self._drawerToggleHandler(e)}
                                            onKeyDown={(e) => self._drawerToggleHandler(e)}/>
                                    </div>
                                ) : child
                            case LayoutHeader:
                                return self.props.fixedHeader ? (
                                    !self.state.drawerOpened ? (
                                        React.cloneElement(
                                            child,
                                            child.props, [
                                                <DrawerButton
                                                    key={'drawer'}
                                                    onClick={(e) => self._drawerToggleHandler(e)}
                                                    onKeyDown={(e) => self._drawerToggleHandler(e)}
                                                    style={{ color: 'white' }}>
                                                    <i className="material-icons">menu</i>
                                                </DrawerButton>,
                                                ...React.Children.toArray(child.props.children)
                                            ]
                                        )
                                    ) : child
                                ) : child
                            default:
                                return child
                        }
                    })}
                </div>
            </LayoutContainer>
        )
    }
}

Layout.propTypes = {
    fixedDrawer: React.PropTypes.bool,
    fixedHeader: React.PropTypes.bool,
    fixedTabs: React.PropTypes.bool
}

Layout.defaultProps = {
    fixedDrawer: false,
    fixedHeader: false,
    fixedTabs: false
}


class LayoutContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'LayoutContainer';
        this.element_ = null
    }
    render() {
        const className = `${CssClasses_.CONTAINER} ${classNames(this.layoutContainerClasses)}`

        return (
            <div className={className} ref={(ref) => this.element_ = ref} {...this.props}>
                {this.props.children}
            </div>
        )
    }
}


export class LayoutTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'LayoutTabBar';
        this.tabBar_ = null
    }
    _scrollTabBar(direction) {
        if (this.tabBar_) {
            this.tabBar_.scrollLeft += direction * Constant_.TAB_SCROLL_PIXELS
            this.forceUpdate()
        }
    }
    render() {
        const { className, children, ...otherProps } = this.props

        return (
            <div className={CssClasses_.TAB_CONTAINER}>
                <LayoutTabBarButton onClick={() => this._scrollTabBar(-1)} left={true} active={this.tabBar_ && this.tabBar_.scrollLeft > 0}/>
                <div className={`${className} ${CssClasses_.TAB_BAR}`} ref={(ref) => this.tabBar_ = ref}>
                    {children}
                </div>
                <LayoutTabBarButton onClick={() => this._scrollTabBar(1)} right={true} active={this.tabBar_ && this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth}/>
            </div>
        )
    }
}


const LayoutTabBarButton = (props) => {

    const { right, left, active, ...otherProps } = props

    const classes = {
        [CssClasses_.TAB_BAR_BUTTON]: true,
        [CssClasses_.IS_ACTIVE]: active,
        [CssClasses_.TAB_BAR_LEFT_BUTTON]: left,
        [CssClasses_.TAB_BAR_RIGHT_BUTTON]: right,
    }

    return (
        <div className={classNames(classes)} {...otherProps}>
            <i className={CssClasses_.ICON}>{(left && Constant_.CHEVRON_LEFT) || (right && Constant_.CHEVRON_RIGHT)}</i>
        </div>
    )
}

LayoutTabBarButton.propTypes = {
    active: React.PropTypes.bool,
    left: React.PropTypes.bool,
    right: React.PropTypes.bool
}


export const LayoutTab = (props) => {

    const {
        className,
        active,
        href,
        ...otherProps
    } = props
    const classes = {
        [CssClasses_.TAB]: true,
        [CssClasses_.IS_ACTIVE]: props.active
    }

    return (
        <a className={`${className} ${classNames(classes)}`} href={href} {...otherProps}>
            {props.children}
        </a>
    )
}

LayoutTab.propTypes = {
    active: React.PropTypes.bool
}

LayoutTab.defaultProps = {
    active: false
}


export const LayoutTabPanel = (props) => {

    const {
        className,
        id,
        ...otherProps
    } = props

    const classes = {
        [CssClasses_.PANEL]: true,
        [CssClasses_.IS_ACTIVE]: props.active
    }

    return (
        <section className={`${className} ${classNames(classes)}`} id={id} {...otherProps}>
            <div className='page-content'>
                {props.children}
            </div>
        </section>
    )

}

LayoutTabPanel.propTypes = {
    active: React.PropTypes.bool
}

LayoutTabPanel.defaultProps = {
    active: false
}
