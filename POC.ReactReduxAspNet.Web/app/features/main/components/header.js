import React from 'react';
import Helmet from 'react-helmet';
import Radium, { StyleRoot } from 'radium';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AccountBoxIcon from 'material-ui/svg-icons/action/account-box';
import ExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';


import colorPalette from '../../../util/color-palette';

const styles = {
    headerWrapper: {
        backgroundColor: colorPalette.primaryColor,
        boxShadow: '1px 2px 10px rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px',
        width: '100%',
        zIndex: '20',
        minWidth: '1280px',
        position: 'fixed',
        '@media (max-width: 1024px)': {
            position: 'absolute'
        },
        leftItemsWrapper: {
            display: 'flex',
            marginLeft: '10px',
            alignItems: 'center',
        },
        rightItemsWrapper: {
            display: 'flex',
            marginRight: '10px',
            alignItems: 'center',
        }
    }
}


@Radium
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerPopoverShown: false,
            headerLogoutDialogShown: false
        };
    }

    showHeaderPopover = (event) => {
        event.preventDefault();
        this.setState({ headerPopoverShown: true, popoverEl: event.currentTarget });

    }

    closeHeaderPopover = () => {
        this.setState({ headerPopoverShown: false });
    }

    showLogoutDialog = () => {
        this.setState({ headerLogoutDialogShown: true, headerPopoverShown: false });

    };

    closeLogoutDialog = () => {
        this.setState({ headerLogoutDialogShown: false });
    };

    logoutCurrentUser = () => {
        const {logoutCurrentUser} = this.props;
        logoutCurrentUser();
    }

    render() {
        const {currentUser} = this.props;

        const dialogActions = [
            <FlatButton
                label="No"
                primary={true}
                onTouchTap={this.closeLogoutDialog}
                />,
            <FlatButton
                label="Yes"
                primary={true}
                onTouchTap={this.logoutCurrentUser}
                />
        ];


        return (
            <StyleRoot>
                <header style={styles.headerWrapper}>
                    <div style={styles.headerWrapper.leftItemsWrapper}>
                        <div>
                            <img src='/public/imgs/bizbox-logo.png' style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div style={styles.headerWrapper.rightItemsWrapper}>
                        <div>
                            <div>{currentUser.userName}</div>
                            <div>{`${currentUser.firstName} ${currentUser.lastName}`}</div>
                        </div>
                        <IconButton onTouchTap={this.showHeaderPopover}>
                            <MoreVertIcon color={colorPalette.white} />
                            <Popover
                                open={this.state.headerPopoverShown}
                                anchorEl={this.state.popoverEl}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                                onRequestClose={this.closeHeaderPopover}
                                animation={PopoverAnimationVertical}
                                >
                                <Menu>
                                    <MenuItem primaryText="My Account"
                                        leftIcon={<AccountBoxIcon />}
                                        />
                                    <Divider />
                                    <MenuItem
                                        onTouchTap={this.showLogoutDialog}
                                        primaryText="Logout"
                                        leftIcon={<ExitToAppIcon />}
                                        />
                                </Menu>
                            </Popover>
                        </IconButton>
                    </div>
                </header>
                <Dialog
                    actions={dialogActions}
                    modal={false}
                    open={this.state.headerLogoutDialogShown}
                    onRequestClose={this.closeLogoutDialog}
                    >
                    Are you sure you want to logout?
        </Dialog>
            </StyleRoot>
        );
    }
}
export default Header;
