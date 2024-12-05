import { Component } from "react";

class ErrorBoundary extends Component{
    constructor() {
        super();
        this.state = { error: false };
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    render() {
        if(!this.state.error) return this.props.children;
        else return <p style={{ color: 'red' }}>Error</p>
    }
}

export default ErrorBoundary;