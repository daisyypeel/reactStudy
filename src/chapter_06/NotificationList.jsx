import React from "react";
import Notification from "./Notification";


const reservedNotifications = [
	{
		id: 1, // 생명주기함수 실행 시 로그에 중복되어 나와 알아보기 힘들어서 준 값
		message: "안녕하세요, 테스트1입니다.",
	},
	{
		id: 2,
		message: "안녕하세요, 테스트2입니다.",
	},
	{
		id: 3,
		message: "안녕하세요, 테스트3입니다.",
	},
];

var timer;

class NotificationList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notifications: [],
		};
	}

	componentDidMount() { // 1초마다 정해진 작업 수행
		const { notifications } = this.state;
		timer = setInterval(() => {
			if (notifications.length < reservedNotifications.length) {
				const index = notifications.length;
				notifications.push(reservedNotifications[index]);
				this.setState({ // state를 업데이트하기위해 씀
					notifications: notifications,
				});
			} else {
				this.setState({
					notifications: [], //알림추가가 끝나면 notifications 배열 비우기
				});
				clearInterval(timer);
			}
		}, 1000);
	}

	render() {
		return (
			<div>
				{this.state.notifications.map((notification) => {
					return (
						// <Notification message={notification.message} />
						<Notification
							key={notification.id} //리액트 앨리먼트를 구분하기위한 고유의 값, map를 사용할 때 필수.
							id={notification.id}
							message={notification.message}
						/> // 생명주기함수 실습, notification props에 값을 전달
					);
				})}
			</div>
		);
	}
}

export default NotificationList;






