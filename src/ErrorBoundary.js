import React, {Component} from 'react';

class ErroBoundary extends Component{
    state = {
        error:false
    }
    componentDidCatch(err,info){
        this.setState({
            err:true
        });
        console.log({err,info})
    }
    render(){
        if(this.state.error ) {
            return (<div>에러가 발생했습니다.</div>) 
        }
        return this.props.children;
    }
}
exports default ErroBoundary;