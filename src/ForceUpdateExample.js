import React, { Component } from 'react';

class ForceUpdateExample extends React.Component {
    constructor(props){
        /**
         * 반드시 써주어야 한다.
         */
        super(props);

        this.loading = true;
        this.formData = 'no data';
        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData, 4000);

    }
    handleData(){
        const data = 'new data';
        //상태 변경
        this.loading = false;
        this.formData = data + this.formData;
        this.forceUpdate();
    };
    render(){
        return(
            <div>
                {/*상태 데이터는 this.state로 접근 가능 */}
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
            </div>
        );
    }
}
export default ForceUpdateExample;