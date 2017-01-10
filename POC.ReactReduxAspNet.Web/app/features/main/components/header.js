import React from 'react';
import Helmet from 'react-helmet';
import Radium, { StyleRoot } from 'radium';
import colorPalette from '../../../util/color-palette';

@Radium
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <StyleRoot>
                <div>                    
                    <h1>Header</h1>
                </div>
            </StyleRoot>
        );
    }
}
export default Header;
