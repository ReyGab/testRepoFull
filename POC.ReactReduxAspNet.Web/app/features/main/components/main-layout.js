import React from 'react';
import Helmet from 'react-helmet';
import Radium, { StyleRoot } from 'radium';
import colorPalette from '../../../util/color-palette';
import Header from './header';

const styles = {
    layoutWrapper: {
        backgroundColor: colorPalette.mainBgColor,
    }
};

@Radium
class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('Main Page Render');
        const { currentUser} = this.props; //Props
        const {logoutCurrentUser} = this.props; //Actions
        return (
            <StyleRoot>
                <div style={styles.layoutWrapper}>
                    <Header logoutCurrentUser={logoutCurrentUser} currentUser={currentUser} />
                </div>
            </StyleRoot>
        );
    }
}
export default MainLayout;
