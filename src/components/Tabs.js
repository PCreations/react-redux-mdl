import React from 'react'
import RippleEffect from './Ripple'


export class Tabs extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            activeTabId: props.defaultActive
        }
    }
    tabClickHandlerFactory(id) {
        return (e) => {
            e.preventDefault()
            this.setState({
                activeTabId: id
            })
        }
    }
    getPanelIdFromLink(href) {
        return href.split('#')[1]
    }
    render() {
        const self = this

        return (
            <div className='mdl-tabs is-upgraded' {...self.props}>
                {React.Children.map(self.props.children, (child, index) => {
                    if (child.type == TabBar) {
                        return React.cloneElement(child, {}, React.Children.map(child.props.children, (link) => {
                            const id = self.getPanelIdFromLink(link.props.href)
                            return self.props.ripple ? (
                                <RippleEffect>
                                    {React.cloneElement(link, {
                                        onClick: self.tabClickHandlerFactory(id),
                                        active: self.state.activeTabId === id
                                    })}
                                </RippleEffect>
                            ) : (
                                React.cloneElement(link, {
                                    onClick: self.tabClickHandlerFactory(id),
                                    active: self.state.activeTabId === id
                                })
                            )
                        }))
                    }
                    if (child.type == TabPanel) {
                        const { id } = child.props
                        const active = self.state.activeTabId === id
                        return active && React.cloneElement(child, { active: true })
                    }
                })}
            </div>
        )
    }
}

Tabs.propTypes = {
    defaultActive: React.PropTypes.string.isRequired,
    ripple: React.PropTypes.bool
}

Tabs.defaultProps = {
    ripple: true
}


export const TabBar = (props) => <div className='mdl-tabs__tab-bar' {...props}>{props.children}</div>


export const TabLink = ({ active, ...props }) => {
    return (
        <a className={`mdl-tabs__tab${active ? ' is-active' : ''}`} {...props}>{props.children}</a>
    )
}


export const TabPanel = ({ active, ...props }) => (
    <div className={`mdl-tabs__panel${active ? ' is-active' : ''}`} {...props}>{props.children}</div>
)