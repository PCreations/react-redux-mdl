import ReactDOM from 'react-dom'
import React from 'react'

import Perf from 'react-addons-perf';
window.Perf = Perf;

import {
    FlatButton,
    RaisedButton,
    FabButton,
    MiniFabButton,
    IconButton,
    Badge,
    Icon,
    Card,
    CardTitle,
    CardMedia,
    CardText,
    CardActions,
    CardMenu,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    List,
    ListItem,
    SubDiv,
    Layout,
    LayoutHeader,
    LayoutHeaderRow,
    LayoutTitle,
    LayoutNav,
    LayoutNavLink,
    LayoutSpacer,
    Drawer,
    DrawerButton,
    LayoutContent,
    LayoutTabBar,
    LayoutTab,
    LayoutTabPanel,
    Grid,
    Cell,
    Tabs,
    TabBar,
    TabLink,
    TabPanel,
    ProgressBar,
    Spinner,
    RippleEffect,
    MegaFooter,
    MegaFooterHeading,
    MegaFooterTopSection,
    MegaFooterMiddleSection,
    MegaFooterBottomSection,
    MegaFooterLeftSection,
    MegaFooterRightSection,
    MegaFooterDropDownSection,
    FooterHeadingSection,
    MegaFooterLinkList,
    MegaFooterSocialButton,
    MiniFooter,
    MiniFooterLeftSection,
    MiniFooterRightSection,
    MiniFooterLinkList,
    MiniFooterSocialButton,
    TextField,
    Checkbox,
    MDLtable,
    MDLthead,
    MDLtbody,
    MDLtd,
    MDLth,
    MDLtr
} from '../lib'


class DemoSimpleDialogHandler extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DemoDialogHandler';
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div style={{ marginTop: '20px' }}>
                <RaisedButton onClick={() => this.setState({ open: true})}>{'Show modal'}</RaisedButton>
                <Dialog open={this.state.open}>
                    <DialogTitle importance={4}>{'MDL Dialog'}</DialogTitle>
                    <DialogContent>{'This is an example of the Material Design Lite dialog component. Please use responsibly.'}</DialogContent>
                    <DialogActions>
                        <RippleEffect>
                            <FlatButton onClick={() => this.setState({ open: false })}>{'close'}</FlatButton>
                        </RippleEffect>
                        <FlatButton disabled>{'Disabled action'}</FlatButton>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

class DemoFullWidthDialogHandler extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DemoFullWidthDialogHandler';
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div style={{ marginTop: '20px' }}>
                <RaisedButton onClick={() => this.setState({ open: true})}>{'Show modal with full width actions'}</RaisedButton>
                <Dialog open={this.state.open}>
                    <DialogContent>
                        {'This is an example of the MDL Dialog being used as a modal. It is using the full width action design intended for use with buttons that do not fit within'}
                        <a href="https://www.google.com/design/spec/components/dialogs.html#dialogs-specs">
                            {'the specified length metrics.'}
                        </a>
                    </DialogContent>
                    <DialogActions fullWidth>
                        <FlatButton onClick={() => this.setState({ open: false })}>{'close'}</FlatButton>
                        <FlatButton disabled>{'Inactive action'}</FlatButton>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


const gridCellStyle = {
    boxSizing: 'border-box',
    backgroundColor: '#BDBDBD',
    height: '200px',
    paddingLeft: '8px',
    paddingTop: '4px',
    color: 'white'
}

const firstGridCellStyle = {
    ...gridCellStyle,
    height: '50px'
}

ReactDOM.render(
    <div>
        <Grid>
            <Cell col={4}>
                <FlatButton>{'flat button'}</FlatButton>
            </Cell>
            <Cell col={4}>
                <RippleEffect>
                    <RaisedButton primary colored accent>{'raised button'}</RaisedButton>
                </RippleEffect>
            </Cell>
            <Cell col={4}>
                <IconButton><i className={'material-icons'}>mood</i></IconButton>
                <RippleEffect>
                    <FabButton colored>{'+'}</FabButton>
                </RippleEffect>
                <RippleEffect>
                    <MiniFabButton>{'+'}</MiniFabButton>
                </RippleEffect>
                <Badge value="4" overlap><span>Inbox</span></Badge>
            </Cell>
        </Grid>
        <Grid>
            <Cell col={5} tablet={8}>
                <Card depth={2} style={{ width: '100%', marginBottom: '10px' }}>
                    <CardTitle style={{
                        color: '#fff',
                        height: '176px',
                        background: 'url("https://getmdl.io/assets/demos/welcome_card.jpg") center / cover'
                    }}>{'Welcome'}</CardTitle>
                    <CardText>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'}</CardText>
                    <CardActions>
                        <RippleEffect>
                            <FlatButton colored>{'Get Started'}</FlatButton>
                        </RippleEffect>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <RippleEffect>
                            <IconButton><i className={'material-icons'}>share</i></IconButton>
                        </RippleEffect>
                    </CardMenu>
                </Card>
            </Cell>
            <Cell col={3} tablet={8}>
                <Card depth={2} style={{
                    width: '100%',
                    height: '320px',
                    marginBottom: '10px'
                }}>
                    <CardTitle style={{
                        height: '199px',
                        color: '#fff',
                        background: 'url("https://getmdl.io/assets/demos/dog.png") bottom right 15% no-repeat #46B6AC'
                    }}>{'Update'}</CardTitle>
                    <CardText>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenan convallis.'}</CardText>
                    <CardActions>
                        <RippleEffect>
                            <FlatButton colored>{'View Updates'}</FlatButton>
                        </RippleEffect>
                    </CardActions>
                </Card>
            </Cell>
            <Cell col={2} tablet={8}>
                <Card depth={2} style={{
                    width: '100%',
                    height: '256px',
                    marginBottom: '10px',
                    background: 'url("https://getmdl.io/assets/demos/image_card.jpg") center / cover'
                }}>
                    <CardTitle style={{ WebkitFlexGrow: 1, msFlexPositive: 1, flexGrow: 1 }}/>
                    <CardActions style={{
                        height: '52px',
                        padding: '16px',
                        background: 'rgba(0, 0, 0, 0.2)'
                    }}><span style={{
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: 500
                    }}>{'Image.jpg'}</span></CardActions>
                </Card>
            </Cell>
            <Cell col={2} tablet={8}>
                <Card depth={2} style={{
                    width: '100%',
                    height: '256px',
                    background: '#3E4EB8',
                    marginBottom: '10px'
                }}>
                    <CardTitle importance={4} style={{
                        marginTop: 0,
                        color: '#fff',
                        WebkitFlexGrow: 1,
                        msFlexPositive: 1,
                        flexGrow: 1,
                        alignItems: 'flex-start'
                    }} textTitle={false}>
                        {'Featured event:'}<br/>
                        {'May 24, 2016'}<br/>
                        {'7-11pm'}
                    </CardTitle>
                    <CardActions style={{
                        display: 'flex',
                        boxSizing: 'border-box',
                        alignItems: 'center',
                        color: '#fff'
                    }}>
                        <RippleEffect>
                            <FlatButton style={{ color: '#fff' }} colored>{'Add to calendar'}</FlatButton>
                        </RippleEffect>
                        <div className='mdl-layout-spacer'/>
                        <i className={'material-icons'} style={{ paddingRight: '10px' }}>event</i>
                    </CardActions>
                </Card>
            </Cell>
        </Grid>

        <Grid>
            <Cell col={6}><DemoSimpleDialogHandler /></Cell>
            <Cell col={6}><DemoFullWidthDialogHandler /></Cell>
        </Grid>

        {/* Transparent header */}
        <Grid>
            <Cell col={12}>
                <Layout style={{
                    background: 'url("https://getmdl.io/assets/demos/transparent.jpg") center / cover',
                    width: '100%',
                    height: '300px'
                }}>
                    <LayoutHeader style={{
                        color: 'white'
                    }} transparent>
                        <LayoutHeaderRow>
                            <LayoutTitle>{'Title'}</LayoutTitle>
                            <LayoutSpacer/>
                            <LayoutNav>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            </LayoutNav>
                        </LayoutHeaderRow>
                    </LayoutHeader>
                    <Drawer>
                        <LayoutTitle>{'Title'}</LayoutTitle>
                        <LayoutNav>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                        </LayoutNav>
                    </Drawer>
                    <LayoutContent />
                </Layout>
            </Cell>
        </Grid>

        {/* Fixed drawer, no header */}
        <Grid>
            <Cell col={12}>
                <Layout style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: '300px'
                }} fixedDrawer>
                    <Drawer>
                        <LayoutTitle>{'Title'}</LayoutTitle>
                        <LayoutNav>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                        </LayoutNav>
                    </Drawer>
                    <LayoutContent />
                </Layout>
            </Cell>
        </Grid>

        {/* Fixed header */}
        <Grid>
            <Cell col={12}>
                <Layout style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: '300px'
                }} fixedHeader>
                    <LayoutHeader style={{
                        color: 'white'
                    }}>
                        <LayoutHeaderRow>
                            <LayoutTitle>{'Title'}</LayoutTitle>
                            <LayoutSpacer/>
                            <LayoutNav>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            </LayoutNav>
                        </LayoutHeaderRow>
                    </LayoutHeader>
                    <Drawer>
                        <LayoutTitle>{'Title'}</LayoutTitle>
                        <LayoutNav>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                        </LayoutNav>
                    </Drawer>
                    <LayoutContent />
                </Layout>
            </Cell>
        </Grid>

        {/* Fixed header and drawer */}
        <Grid>
            <Cell col={12}>
                <Layout style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: '300px'
                }} fixedHeader={true} fixedDrawer>
                    <LayoutHeader style={{
                        color: 'white'
                    }}>
                        <LayoutHeaderRow>
                            <LayoutTitle>{'Title'}</LayoutTitle>
                            <LayoutSpacer/>
                            <LayoutNav>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                                <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            </LayoutNav>
                        </LayoutHeaderRow>
                    </LayoutHeader>
                    <Drawer>
                        <LayoutTitle>{'Title'}</LayoutTitle>
                        <LayoutNav>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                            <LayoutNavLink href>{'Link'}</LayoutNavLink>
                        </LayoutNav>
                    </Drawer>
                    <LayoutContent />
                </Layout>
            </Cell>
        </Grid>

        {/* Scrollable tabs */}
        <Grid>
            <Cell col={12}>
                <Layout style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: '300px'
                }} fixedHeader>
                    <LayoutHeader style={{
                        color: 'white'
                    }}>
                        <LayoutHeaderRow>
                            <LayoutTitle>{'Title'}</LayoutTitle>
                        </LayoutHeaderRow>
                        <LayoutTabBar>
                            <LayoutTab href="#scroll-tab-1" active>{'Tab 1'}</LayoutTab>
                            <LayoutTab href="#scroll-tab-2">{'Tab 2'}</LayoutTab>
                            <LayoutTab href="#scroll-tab-3">{'Tab 3'}</LayoutTab>
                            <LayoutTab href="#scroll-tab-4">{'Tab 4'}</LayoutTab>
                            <LayoutTab href="#scroll-tab-5">{'Tab 5'}</LayoutTab>
                            <LayoutTab href="#scroll-tab-6">{'Tab 6'}</LayoutTab>
                            <LayoutTab href="#scroll-tab-7">{'Tab 7'}</LayoutTab>
                            <LayoutTab href="#scroll-tab-8">{'Tab 8'}</LayoutTab>
                            <LayoutTab href="#scroll-tab-9">{'Tab 9'}</LayoutTab>
                        </LayoutTabBar>
                    </LayoutHeader>
                    <Drawer>
                        <LayoutTitle>{'Title'}</LayoutTitle>
                    </Drawer>
                    <LayoutContent>
                        <LayoutTabPanel id={'scroll-tab-1'}/>
                        <LayoutTabPanel id={'scroll-tab-2'}/>
                        <LayoutTabPanel id={'scroll-tab-3'}/>
                        <LayoutTabPanel id={'scroll-tab-4'}/>
                        <LayoutTabPanel id={'scroll-tab-5'}/>
                        <LayoutTabPanel id={'scroll-tab-6'}/>
                    </LayoutContent>
                </Layout>
            </Cell>
        </Grid>
        {/* RESPONSIVE GRID */}
        <Grid>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
            <Cell col={1} style={firstGridCellStyle}>1</Cell>
        </Grid>
        <Grid>
            <Cell col={4} style={gridCellStyle}>4</Cell>
            <Cell col={4} style={gridCellStyle}>4</Cell>
            <Cell col={4} style={gridCellStyle}>4</Cell>
        </Grid>
        <Grid>
            <Cell col={6} style={gridCellStyle}>6</Cell>
            <Cell col={4} style={gridCellStyle}>4</Cell>
            <Cell col={2} style={gridCellStyle}>2</Cell>
        </Grid>
        <Grid>
            <Cell col={6} tablet={8} style={gridCellStyle}>{'6 (8 tablet)'}</Cell>
            <Cell col={4} tablet={6} style={gridCellStyle}>{'4 (6 tablet)'}</Cell>
            <Cell col={2} phone={4} style={gridCellStyle}>{'2 (4 phone)'}</Cell>
        </Grid>

        {/* TABS */}
        <Grid>
            <Cell col={4} offsetDesktop={4} offsetTablet={2}>
                <div style={{ textAlign: 'left', display: 'inline-block', width: '100%' }}>
                    <Tabs defaultActive={'targaryens-panel'} ripple>
                        <TabBar>
                            <TabLink href="#starks-panel">{'Starks'}</TabLink>
                            <TabLink href="#lannisters-panel">{'Lannisters'}</TabLink>
                            <TabLink href="#targaryens-panel">{'Targaryens'}</TabLink>
                        </TabBar>
                        <TabPanel id="starks-panel">
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Eddard</li>
                                <li>Catelyn</li>
                                <li>Robb</li>
                                <li>Sansa</li>
                                <li>Brandon</li>
                                <li>Arya</li>
                                <li>Rickon</li>
                            </ul>
                        </TabPanel>
                        <TabPanel id="lannisters-panel">
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Tywin</li>
                                <li>Cersei</li>
                                <li>Jamie</li>
                                <li>Tyrion</li>
                            </ul>
                        </TabPanel>
                        <TabPanel id="targaryens-panel">
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Viserys</li>
                                <li>Daenerys</li>
                            </ul>
                        </TabPanel>
                    </Tabs>
                </div>
            </Cell>
        </Grid>

        {/* Simple List */}
        <Grid>
            <Cell col={4} offsetDesktop={4} tablet={8}>
                <List>
                    <ListItem>
                        <SubDiv type='primary'>{'Bryan Cranston'}</SubDiv>
                    </ListItem>
                    <ListItem>
                        <SubDiv type='primary'>{'Aaron Paul'}</SubDiv>
                    </ListItem>
                    <ListItem>
                        <SubDiv type='primary'>{'Bob Odenkirk'}</SubDiv>
                    </ListItem>
                </List>
            </Cell>
        </Grid>

        {/* List Icons */}
        <Grid>
            <Cell col={4} offsetDesktop={4}>
                <List>
                    <ListItem>
                        <SubDiv type='primary'>
                            <SubDiv type='icon'>person</SubDiv>
                            {'Bryan Cranston'}
                        </SubDiv>
                    </ListItem>
                    <ListItem>
                        <SubDiv type='primary'>
                            <SubDiv type='icon'>person</SubDiv>
                            {'Aaron Paul'}
                        </SubDiv>
                    </ListItem>
                    <ListItem>
                        <SubDiv type='primary'>
                            <SubDiv type='icon'>person</SubDiv>
                            {'Bob Odenkirk'}
                        </SubDiv>
                    </ListItem>
                </List>
            </Cell>
        </Grid>

        {/* List avatars and actions */}
        <Grid>
            <Cell col={4} offsetDesktop={4}>
                <List>
                    <ListItem>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Bryan Cranston'}
                        </SubDiv>
                        <SubDiv type='action' href="#">
                            <Icon name={'star'}/>
                        </SubDiv>
                    </ListItem>
                    <ListItem>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Aaron Paul'}
                        </SubDiv>
                        <SubDiv type='action' href="#">
                            <Icon name={'star'}/>
                        </SubDiv>
                    </ListItem>
                    <ListItem>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Bob Odenkirk'}
                        </SubDiv>
                        <SubDiv type='action' href="#">
                            <Icon name={'star'}/>
                        </SubDiv>
                    </ListItem>
                </List>
            </Cell>
        </Grid>

        {/* List avatars and controls */}
        <Grid>
            <Cell col={4} offsetDesktop={4}>
                <List>
                    <ListItem>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Bryan Cranston'}
                        </SubDiv>
                        <SubDiv type='secondary' href="#">
                            <RaisedButton colored>{'edit'}</RaisedButton>
                        </SubDiv>
                        <SubDiv type='action' href="#">
                            <Checkbox/>
                        </SubDiv>
                    </ListItem>
                    <ListItem>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Aaron Paul'}
                        </SubDiv>
                        <SubDiv type='action' href="#">
                            <Checkbox/>
                        </SubDiv>
                    </ListItem>
                    <ListItem>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Bob Odenkirk'}
                        </SubDiv>
                        <SubDiv type='action' href="#">
                            <Checkbox/>
                        </SubDiv>
                    </ListItem>
                </List>
            </Cell>
        </Grid>

        {/* Two Line List with secondary info and action */}
        <Grid>
            <Cell col={4} offsetDesktop={4}>
                <List>
                    <ListItem nLine={2}>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Bryan Cranston'}
                            <SubDiv type='subTitle'>{'62 Episodes'}</SubDiv>
                        </SubDiv>
                        <SubDiv type='secondary'>
                            <SubDiv type='info'>{'Actor'}</SubDiv>
                            <SubDiv type='action' href="#">
                                <Icon name={'star'}/>
                            </SubDiv>
                        </SubDiv>
                    </ListItem>
                    <ListItem nLine={2}>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Aaron Paul'}
                            <SubDiv type='subTitle'>{'62 Episodes'}</SubDiv>
                        </SubDiv>
                        <SubDiv type='secondary'>
                            <SubDiv type='action' href="#">
                                <Icon name={'star'}/>
                            </SubDiv>
                        </SubDiv>
                    </ListItem>
                    <ListItem nLine={2}>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Bob Odenkirk'}
                            <SubDiv type='subTitle'>{'62 Episodes'}</SubDiv>
                        </SubDiv>
                        <SubDiv type='secondary'>
                            <SubDiv type='action' href="#">
                                <Icon name={'star'}/>
                            </SubDiv>
                        </SubDiv>
                    </ListItem>
                </List>
            </Cell>
        </Grid>

        {/* Three Line List with secondary info and action */}
        <Grid>
            <Cell col={6} offsetDesktop={3}>
                <List>
                    <ListItem nLine={3}>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Bryan Cranston'}
                            <SubDiv type='textBody'>
                                {'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.'}
                            </SubDiv>
                            <SubDiv type='subTitle'>{'62 Episodes'}</SubDiv>
                        </SubDiv>
                        <SubDiv type='secondary'>
                            <SubDiv type='action' href="#">
                                <Icon name={'star'}/>
                            </SubDiv>
                        </SubDiv>
                    </ListItem>
                    <ListItem nLine={3}>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Aaron Paul'}
                            <SubDiv type='textBody'>
                                {'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.'}
                            </SubDiv>
                            <SubDiv type='subTitle'>{'62 Episodes'}</SubDiv>
                        </SubDiv>
                        <SubDiv type='secondary'>
                            <SubDiv type='action' href="#">
                                <Icon name={'star'}/>
                            </SubDiv>
                        </SubDiv>
                    </ListItem>
                    <ListItem nLine={3}>
                        <SubDiv type='primary'>
                            <SubDiv type='avatar'>person</SubDiv>
                            {'Bob Odenkirk'}
                            <SubDiv type='textBody'>
                                {'Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".'}
                            </SubDiv>
                            <SubDiv type='subTitle'>{'62 Episodes'}</SubDiv>
                        </SubDiv>
                        <SubDiv type='secondary'>
                            <SubDiv type='action' href="#">
                                <Icon name={'star'}/>
                            </SubDiv>
                        </SubDiv>
                    </ListItem>
                </List>
            </Cell>
        </Grid>

        <Grid>
            <Cell col={4} offsetDesktop={4}><ProgressBar progress={44}/></Cell>
        </Grid>

        <Grid>
            <Cell col={4} offsetDesktop={4}><ProgressBar indeterminate/></Cell>
        </Grid>

        <Grid>
            <Cell col={4} offsetDesktop={4}><ProgressBar progress={33} buffer={87}/></Cell>
        </Grid>

        <Grid>
            <Cell col={2} offsetDesktop={4}><Spinner active/></Cell>
            <Cell col={2}><Spinner active singleColor/></Cell>
        </Grid>

        <Grid>
            <Cell col={6}>
                <TextField id={'test'} placeholder={'Text...'} />
            </Cell>
            <Cell col={6}>
                <TextField
                    id={'test'}
                    placeholder={'Text...'}
                    pattern={"-?[0-9]*(\.[0-9]+)?"}
                    errorText={'Input is not a number!'}
                    floatingLabel/>
            </Cell>
        </Grid>

        <Grid>
            <Cell col={6}>
                <Checkbox id={'checkbox-1'} label={'Checkbox'} checked/>
            </Cell>
            <Cell col={6}>
                <Checkbox id={'checkbox-2'} label={'Checkbox'} />
            </Cell>
        </Grid>

        <Grid>
            <Cell col={4} offsetDesktop={4}>
                <MDLtable>
                    <MDLthead>
                        <MDLtr>
                            <MDLth nonNumeric>{'Material'}</MDLth>
                            <MDLth>{'Quantity'}</MDLth>
                            <MDLth>{'Unit price'}</MDLth>
                        </MDLtr>
                    </MDLthead>
                    <MDLtbody>
                        <MDLtr>
                            <MDLtd nonNumeric>{'Acrylic (Transparent)'}</MDLtd>
                            <MDLtd>{250}</MDLtd>
                            <MDLtd>{'$2.90'}</MDLtd>
                        </MDLtr>
                        <MDLtr selected>
                            <MDLtd nonNumeric>{'Plywood (Birch)'}</MDLtd>
                            <MDLtd>{50}</MDLtd>
                            <MDLtd>{'$1.25'}</MDLtd>
                        </MDLtr>
                        <MDLtr>
                            <MDLtd nonNumeric>{'Laminate (Gold on Blue)'}</MDLtd>
                            <MDLtd>{10}</MDLtd>
                            <MDLtd>{'$12.35'}</MDLtd>
                        </MDLtr>
                    </MDLtbody>
                </MDLtable>
            </Cell>
        </Grid>

        <Grid>
            <Cell col={12}>
                <MegaFooter>
                    <MegaFooterTopSection>
                        <MegaFooterLeftSection>
                            <MegaFooterSocialButton/>
                            <MegaFooterSocialButton/>
                            <MegaFooterSocialButton/>
                        </MegaFooterLeftSection>
                        <MegaFooterRightSection>
                            <a href="#">Introduction</a>
                            <a href="#">App Status Dashboard</a>
                            <a href="#">Terms of Service</a>
                        </MegaFooterRightSection>
                    </MegaFooterTopSection>
                    <MegaFooterMiddleSection>
                        <MegaFooterDropDownSection>
                            <MegaFooterHeading>
                                {'Learning and Support'}
                            </MegaFooterHeading>
                            <MegaFooterLinkList>
                                <li><a href="#">Resource Center</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">Learn with Google</a></li>
                                <li><a href="#">Small Business Community</a></li>
                                <li><a href="#">Think Insights</a></li>
                            </MegaFooterLinkList>
                        </MegaFooterDropDownSection>
                        <MegaFooterDropDownSection>
                            <MegaFooterHeading>
                                {'Just for Developers'}
                            </MegaFooterHeading>
                            <MegaFooterLinkList>
                                <li><a href="#">Google Developers</a></li>
                                <li><a href="#">AdWords API</a></li>
                                <li><a href="#">AdWords Scipts</a></li>
                                <li><a href="#">AdWords Remarketing Tag</a></li>
                            </MegaFooterLinkList>
                        </MegaFooterDropDownSection>
                    </MegaFooterMiddleSection>
                    <MegaFooterBottomSection>
                        <FooterHeadingSection>
                            {'More Information'}
                        </FooterHeadingSection>
                        <MegaFooterLinkList>
                            <li><a href="#">Help</a></li>
                          <li><a href="#">Privacy and Terms</a></li>
                        </MegaFooterLinkList>
                    </MegaFooterBottomSection>
                </MegaFooter>
            </Cell>
        </Grid>

        <Grid>
            <Cell col={12}>
                <MiniFooter>
                    <MiniFooterLeftSection>
                        <FooterHeadingSection>
                            {'More Information'}
                        </FooterHeadingSection>
                        <MiniFooterLinkList>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Privacy and Terms</a></li>
                            <li><a href="#">User Agreement</a></li>
                        </MiniFooterLinkList>
                    </MiniFooterLeftSection>
                    <MiniFooterRightSection>
                        <MiniFooterSocialButton/>
                        <MiniFooterSocialButton/>
                        <MiniFooterSocialButton/>
                    </MiniFooterRightSection>
                </MiniFooter>
            </Cell>
        </Grid>
    </div>,
    document.getElementById('app')
);