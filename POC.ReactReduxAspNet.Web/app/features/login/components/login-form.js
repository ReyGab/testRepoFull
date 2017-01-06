import React from 'react';
import Helmet from 'react-helmet';
import Radium, { StyleRoot } from 'radium';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import colorPalette from '../../../util/color-palette';

const styles = {
    formWrapper: {
        backgroundColor: 'white',
        width: '350px',
        height: '400px',
        padding: '20px 20px 20px 20px'
    }
};

@Radium
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    login(event) {
        if (event && event.preventDefault) {
            event.preventDefault();
        }
        const { loginUserPending } = this.props;
        const {email, password, notificationSystem} = this.refs;

        loginUserPending();
    }

    render() {
        return (
            <StyleRoot>
                <form style={styles.formWrapper} onSubmit={this.login.bind(this)} >
                    <TextField
                        hintText="Enter your email"
                        floatingLabelText="Email"
                        fullWidth={true}
                        ref="email"
                        />

                    <TextField
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        fullWidth={true}
                        type="password"
                        ref="password"
                        />

                    <RaisedButton
                        type="submit"
                        label="Login"
                        fullWidth={true}
                        primary={true}
                        />
                </form>
            </StyleRoot>
        );
    }
}
export default LoginForm;
