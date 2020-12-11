/**
 * Javascript Xml JSX 를 사용하기 위해 react를 import 해야한다.
 */
import React, {Component, Fragment} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDel from './CustomerDel';
/**
 * EntityComponent 개념
 * Class 형 Component ---> React의 Component를 상속받아야 한다.
 */
class Customer extends React.Component{
/**
 * 반드시 있어야하는 render 함수
 */
render(){
    return (
    /**
     * 최상위 element는 반드시 하나여야한다.
       모든 태그는 닫는 태그가 반드시 있어야한다.
        this.props로 Customer Componet 객체에 직접 접근하여 값을 출력한다.
        {}를 사용하여 값에 접근한다.
    */
        <TableRow>
		    <TableCell> {this.props.id}</TableCell>		 
		    <TableCell><img src={this.props.image} width="70" height="70" alt="profile" /></TableCell>
			<TableCell><h2>{this.props.name}({this.props.id})</h2></TableCell>
			<TableCell><p>{this.props.birthday}</p></TableCell>
            <TableCell><p>{this.props.gender}</p></TableCell>
            <TableCell><p>{this.props.job}</p></TableCell>
            <TableCell><CustomerDel stateRefresh={this.props.stateRefresh} 
                                    id={this.props.id}/>
            </TableCell>
            
		 </TableRow>

    );
}

}
/**
 * 컴포넌트를 사용하기 위해서 export 해주어야한다.
 */
export default Customer;