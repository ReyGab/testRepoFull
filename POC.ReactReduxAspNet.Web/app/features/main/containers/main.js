import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainLayout from '../components/main-layout'
import * as duck from '../duck';
import checkIfUserHasSession from '../../../util/auth';
import LoadingScreen from '../../../shared-components/loading-screen';
import Radium, { StyleRoot } from 'radium';
@connect(
    (state) => state.mainPageReducer,
    (dispatch) => ({ actions: bindActionCreators(duck, dispatch) })
)
@Radium
class MainContainer extends React.Component {
    componentWillMount() {
        const {getCurrentUserInfo} = this.props.actions;
        checkIfUserHasSession();
        getCurrentUserInfo();
    }

    render() {
        const { logoutCurrentUser } = this.props.actions;
        const { currentUserInfoRequestPending, currentUser } = this.props;
        return (
            <StyleRoot>
            {
                currentUserInfoRequestPending ?
                <LoadingScreen />:
                <MainLayout currentUser={currentUser} logoutCurrentUser={logoutCurrentUser} childRoutes={this.props.children}/>
            }
            </StyleRoot>
        );
    }
}
export default MainContainer;
