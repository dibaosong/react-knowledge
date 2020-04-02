import React from 'react'
/**
 * 异步加载模块
 * @param loadComponent
 */
export const asyncComponent = loadComponent => (
    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Component: null
            }
        }

        UNSAFE_componentWillMount() {
            if (this.hasLoadedComponent()) {
                return
            }

            loadComponent()
                //  取到module的default作为组件，因为我们导出组件的时候使用的是 export default
                //  export default = (const default = Module ; export default )  所以导出的名称是default
                .then(module => module.default)
                .then((Component) => {
                    this.setState({Component})
                })
                .catch((err) => {
                    console.error(`Cannot load component in <AsyncComponent />`);
                    throw err
                })
        }

        hasLoadedComponent() {
            return this.state.Component !== null
        }

        render() {
            const {Component} = this.state;
            return (Component) ? <Component {...this.props} /> : null
        }
    }
)