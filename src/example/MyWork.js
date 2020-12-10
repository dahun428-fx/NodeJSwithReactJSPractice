import React, { Component } from 'react';

class MyWork extends Component{
    static defaultProps = {
        name: '작품명이 없습니다.'
    }
    render(){
        return(
            <div>작품명은 <b>{this.props.name}</b> 입니다.</div>
        );
    }
}
export default MyWork;