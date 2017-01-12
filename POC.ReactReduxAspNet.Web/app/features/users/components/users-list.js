import React from 'react';
import Helmet from 'react-helmet';
import Radium, { StyleRoot } from 'radium';
import colorPalette from '../../../util/color-palette';

const styles = {
    layoutWrapper: {
        backgroundColor: colorPalette.mainBgColor,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'

    }
};

@Radium
class UserList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {userList} = this.props;
        return (
            <StyleRoot>
                <Helmet title="User List" />
                <div style={styles.layoutWrapper}>
                    <h1>List of Users</h1>
                    <ul>
                        {
                            userList.map(function (user) {
                                return <li key={user.id}>{user.fullname}</li>
                            })
                        }
                    </ul>
                </div>
            </StyleRoot>
        );
    }
}
export default UserList;
