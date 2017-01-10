import React from 'react';
import Helmet from 'react-helmet';
import Radium, { StyleRoot } from 'radium';
import colorPalette from '../../../util/color-palette';
import Header from './header';

const styles = {
    layoutWrapper: {
        backgroundColor: colorPalette.mainBgColor,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

@Radium
class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('Main Page Render');
        return (
            <StyleRoot>
                <div style={styles.layoutWrapper}>
                    <Helmet title="Main Page" />
                    <Header/>
                    <h1>Main Page</h1>
                </div>
            </StyleRoot>
        );
    }
}
export default MainPage;
