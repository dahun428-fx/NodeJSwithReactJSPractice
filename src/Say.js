import React, {Component, useState} from 'react';

/**
 * 클래스형 컴포넌트 / 함수형 컴포넌트 든 간에 state 값을 바꾸어야 하는 경우 
 * setState, useState를 통해 전달받은 Setter 함수를 사용해야한다.
 * state로 배열이나 객체를 업데이트 해야하는 경우 배열이나 객체의 사본을 만들고 그 사본에 값을 업데이트 한후, 
 * 그 사본의 상태를 setState혹은 세터 함수를 통해 업데이트 합니다.
 * 
 * 객체에 대한 사본을 만들때는 spread 연산자라 불리는 '...' 을 사용하여 처리하고, 배열에 대한 사본을 만들 떄는
 * 배열의 내장 함수들을 사용합니다.
 * 
 * props 는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트 할 수 있습니다.
 * 
 * 부모 컴포넌트 state 를 자식 컴포넌트의 props 로 전달하고 자식 컴포넌트에서 특정 이벤트가 발생할 떄 
 * 부모 컴포넌트의 메소드를 호출하면 props 도 유동적으로 사용할 수 있습니다.
 * 
 */
const Say = () =>{
    /**
     * message라고하는 이름의 속성,
     * 속성 값은 empty useState('');
     * 변경하는 메소드는 setMessage로 지정
     * constructor(props){
        super(props);
            this.state = {
                number : 0
            }
        } 로 하지 않아도 된다.
     */
    // const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage(`안녕하세요`);
    const onClickLeave = () => setMessage(`안녕히 가세요~`);

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>

    );
}
export default Say;