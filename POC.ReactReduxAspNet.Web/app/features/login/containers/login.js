import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginLayout from '../components/login-layout'
import * as duck from '../duck';

@connect(
    (state) => {
        return {
            error: state.error
        };
    },
    (dispatch) => ({
        actions: bindActionCreators(duck, dispatch)
    })
)
class LoginContainer extends React.Component {
    render() {        
        const { loginUserPending } = this.props.actions;
        return (<LoginLayout loginUserPending={loginUserPending} />);
    }
}
export default LoginContainer;
