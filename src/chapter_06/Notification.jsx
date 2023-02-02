import React from "react";


const styles = {
	wrapper: {
		margin: 8,
		padding: 8,
		display: "flex",
		flexDirection: "row",
		border: "1px solid grey",
		borderRadius: 16,
	},
	messageText: {
		color: "#000",
		fontSize: 16,
	},
};

class Notification extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}


	// 생명주기함수 사용하기
	componentDidMount() { // 컴포넌트가 마운트 된 이후에 호출
		// console.log("componentDidMount() called.");
		console.log(`${this.props.id} componentDidMount() called.`) // 로그를 id와 함께 출력하도록 수정함.
	}

	componentDidUpdate() { // 컴포넌트가 업데이트 된 이후에 호출
		// console.log("componentDidMount() called.");
		console.log(`${this.props.id} componentDidUpdate() called.`)
	}

	componentDidMount() { // 컴포넌트가 언마운트 되기 전에 호출
		// console.log("componentDidMount() called.");
		console.log(`${this.props.id} componentDidUnmount() called.`)
	}


	render() {
		return (
			<div style={styles.wrapper}>
				<span style={styles.messageText}>
					{this.props.message}
				</span>
			</div>
		)
	}
}


export default Notification;







