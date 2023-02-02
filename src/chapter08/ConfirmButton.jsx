
// class component로 생성하기(현재 많이 사용하지 않음)

// import React from "react";

// class ConfirmButton extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			isConfirmed: false,
// 		};

// 		/* bind 사용했을 때
// 		this.handleConfirm = this.handleConfirm.bind(this); */
// 	}

// 	// class fields syntax 사용했을 때
// 	handleConfirm = () => {
// 		this.setState((prevState) => ({
// 			isConfirmed: !prevState.isConfirmed,
// 		}));
// 	}

// 	// handleConfirm()이라는 event handler 생성(bind 사용할 때)
// 	// handleConfirm() {
// 	// 	this.setState((prevState) => ({
// 	// 		isConfirmed: !prevState.isConfirmed,
// 	// 	}));
// 	// }

// 	render() {
// 		return (
// 			<button
// 				onClick={this.handleConfirm}
// 				disabled={this.state.isConfirmed}
// 			>
// 				{this.state.isConfirmed ? "확인됨" : "확인하기"}
// 			</button>
// 		);
// 	}
// }

// export default ConfirmButton;


// 함수 컴포넌트로 생성하기

import React, { useState } from "react";

function ConfirmButton(props) {
	const [isConfirmed, setIsConfirmed] = useState(false);

	const handleConfirm = () => {
		setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
	};

	return (
		<button onClick={handleConfirm} disabled={isConfirmed}>
			{isConfirmed ? "확인됨" : "확인하기"}
		</button>
	)
}

export default ConfirmButton;

















