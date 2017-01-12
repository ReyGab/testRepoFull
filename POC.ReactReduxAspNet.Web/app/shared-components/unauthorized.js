import React from 'react';
import Helmet from 'react-helmet';

/**
 * Not Found Page
 * 
 * @class NotFound
 * @extends {React.Component}
 */
class Unauthorized extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <Helmet title="Unauthorized" />
             Unauthorized - You are trying to access a resource that is not accessible to you.
        </div>
    );
    }
}

export default Unauthorized;
