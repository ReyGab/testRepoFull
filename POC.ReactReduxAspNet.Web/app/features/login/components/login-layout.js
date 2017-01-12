import React from 'react';
import Helmet from 'react-helmet';
import Radium, { StyleRoot } from 'radium';
import colorPalette from '../../../util/color-palette';
import LoginForm from './login-form';

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
class LoginLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { loginUser, loginRequestPending } = this.props;
        return (
            <StyleRoot>
                <div style={styles.layoutWrapper}>
                    <Helmet title="Login Page" />
                    <h1>ToDo App Login Page</h1>
                    <LoginForm loginUser={loginUser} loginRequestPending={loginRequestPending} />
                </div>
            </StyleRoot>
        );
    }
}
export default LoginLayout;
