import {loginUser} from './duck.js';
import sinon from 'sinon';
import {expect} from 'chai';
import {resolvedPromise} from '../../util/test-helper';

describe('Login - Actions', () => {
    
    describe('loginUser()', () => {

        const dispatch = sinon.spy();

        it('should login user successfully', () => {
            // Arrange
            const credentials = {
                email: 'juan@example.ph',
                password: 'abcdE123'
            };
            const dispatch = sinon.spy();
            const client = {post: () => {}};
            client.post = sinon.stub().returns(resolvedPromise(null));


            // Act
            loginUser(credentials)(dispatch, {}, {client});


            // Assert
            return Promise.resolve().then(() => {
                expect(dispatch.calledWith({
                    type: 'LOGIN_USER_SUCCESS'
                })).to.be.true;
            });
        });


    });

});
