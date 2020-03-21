import React, {Component} from 'react';
import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
    state = {
        hasErrored: false
    };

    static getDerivedStateFromError(error) {
        return {hasErrored: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log('error! something went wrong', error, errorInfo);
    }

    render() {
        return this.state.hasErrored ? (
            <div className='error-image-overlay'>
                <div className='error-image-container'
                     style={{backgroundImage: `url('https://i.imgur.com/yW2W9SC.png')`}}/>
                <span className='error-image-text'>
                    Sorry this page is broken
                </span>
            </div>
        ) : this.props.children;
    }
}

export default ErrorBoundary;