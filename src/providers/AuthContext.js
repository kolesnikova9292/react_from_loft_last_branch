import react, {Component} from react;

const {Provider, Consumer: AuthConsumer} = react.createContext('');

class AuthProvider extends Component{
    state = {
        isAuthorized: false,
    }

    login = () =>{
        this.setState({isAuthorized: true});
    }

    logout = () =>{
        this.setState({isAuthorized: false});
    }

    render(){
        const {children} = this.props;
        const {isAuthorized} = this.state;
        return(
        <Provider value = {{isAuthorized, login = this.login, logout = this.logout}}>{children}</Provider>
        )
    }
}

function authHoc(WrappedComponent){
    return class extends Component{
        static displayName = 'authHoc';
        render(){
            return <AuthConsumer>
                {
                    contextProps => (<WrappedComponent {...contextProps} {...props}/>)
                }
            </AuthConsumer>
        }
    }
}

export { AuthConsumer, AuthProvider, authHoc }