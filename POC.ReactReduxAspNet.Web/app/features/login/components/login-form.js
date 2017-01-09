import React from 'react';
import Helmet from 'react-helmet';
import Radium, { StyleRoot } from 'radium';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui'
import { Field, reduxForm } from 'redux-form';
import colorPalette from '../../../util/color-palette';


// validation functions
const required = value => value == null ? '* Required' : undefined
const email    = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined

const styles = {
    formWrapper: {
        backgroundColor: 'white',
        width: '350px',
        height: '400px',
        padding: '20px 20px 20px 20px'
    }
};


/**
 * Login Form Component
 * 
 * @class LoginForm
 * @extends {React.Component}
 */
@reduxForm({
    form: 'loginForm'
})
@Radium
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Login Function
     * 
     * @param {any} event
     * 
     * @memberOf LoginForm
     */
    login(event) {
        if (event && event.preventDefault) {
            event.preventDefault();
        }
        const { loginUser } = this.props;
        const {email, password} = this.refs;

        loginUser(
            {
                email: email.value,
                password: password.value
            });
    }

    /**
     * Render Function
     * 
     * @returns
     * 
     * @memberOf LoginForm
     */
    render() {

        const { handleSubmit } = this.props        

        return (
            <StyleRoot>
                <form style={styles.formWrapper} onSubmit={handleSubmit(this.login.bind(this))} >
                    <Field name="email"
                        component={TextField}
                        hintText="Enter your email"
                        floatingLabelText="Email"
                        fullWidth={true}
                        validate={[required, email]} 
                        ref="email" withRef
                        />

                    <Field name="password"
                        component={TextField}
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        validate={required}
                        fullWidth={true}
                        type="password"
                        ref="password" withRef />

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
