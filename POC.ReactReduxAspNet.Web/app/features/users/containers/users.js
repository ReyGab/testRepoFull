import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UsersList from '../components/users-list'
import * as duck from '../duck';
import LoadingScreen from '../../../shared-components/loading-screen';
import Radium, { StyleRoot } from 'radium';

@connect(
    (state) => state.userReducer,
    (dispatch) => ({ actions: bindActionCreators(duck, dispatch) })
)
@Radium
class UsersContainer extends React.Component {

    componentWillMount() {
        const {getUserList} = this.props.actions;
        const {currentUser} = this.props;
        getUserList();
    }

    render() {
        const { getUserListRequestPending, userList } = this.props;
        return (
            <StyleRoot>
                {
                    getUserListRequestPending ? <LoadingScreen /> : <UsersList userList={userList}/>
                }
            </StyleRoot>
        );
    }
}
export default UsersContainer;
