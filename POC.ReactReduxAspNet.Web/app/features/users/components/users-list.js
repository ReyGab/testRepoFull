import React from 'react';
import Helmet from 'react-helmet';
import Radium, { StyleRoot } from 'radium';
import colorPalette from '../../../util/color-palette';

const styles = {
    layoutWrapper: {
        backgroundColor: colorPalette.mainBgColor,
        minHeight: '100vh',
        display:'flex',
        alignItems: 'center'

    }
};

@Radium
class UserList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('User List')
        return (
            <StyleRoot>
                <Helmet title="User List" />
                <div style={styles.layoutWrapper}>
                   <p>Hello</p>
                </div>
            </StyleRoot>
        );
    }
}
export default UserList;
