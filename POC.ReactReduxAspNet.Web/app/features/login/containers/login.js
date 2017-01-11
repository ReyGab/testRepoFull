import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginLayout from '../components/login-layout'
import * as duck from '../duck';
import checkIfUserHasSession from '../../../util/auth';

@connect(
    (state) => state.loginReducer,
    (dispatch) => ({ actions: bindActionCreators(duck, dispatch) })
)
class LoginContainer extends React.Component {
    componentWillMount() {
        checkIfUserHasSession();
    }
    
    render() {
        const { loginUser } = this.props.actions;
        const { loginError, loginRequestPending } = this.props;
        return (<LoginLayout loginUser={loginUser} loginError={loginError} loginRequestPending={loginRequestPending} />);
    }
}
export default LoginContainer;
