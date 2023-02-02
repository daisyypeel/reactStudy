import React from "react";
import Comment from "./Comment";


const comments = [
	{
		name: "아무개",
		comment: "안녕하세요, 테스트1입니다.",
	},
	{
		name: "홍길동",
		comment: "안녕하세요, 테스트2입니다.",
	},
	{
		name: "석삼이",
		comment: "안녕하세요, 테스트3입니다.",
	},
]

// default 상태
// function CommentList(props) {
// 	return (
// 		<div>
// 			{/* <Comment /> -> commonJSX에 props를 설정해주지 않았을 때 */}

// 			<Comment name={"아무개"} comment={"안녕하세요. 테스트1입니다."} /> {/* commonJSX에 props를 설정해주었을 때 */}
// 			<Comment name={"홍길동"} comment={"안녕하세요. 테스트2입니다."} />
// 		</div>
// 	);
// }


// comment 데이터를 별도의 객체로 분리하기
function CommentList(props) {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment name={comment.name} comment={comment.comment} />
				);
			})}
		</div>
	);
}


export default CommentList;

