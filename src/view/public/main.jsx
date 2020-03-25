import React, { Component } from 'react';

import { renderRoutes } from 'react-router-config'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: props.route.routes
        }
    }


    render() {
        return (
            <div>
                <div>main</div>
                {renderRoutes(this.state.route)}
            </div>
        )
    }
}

export default Main;