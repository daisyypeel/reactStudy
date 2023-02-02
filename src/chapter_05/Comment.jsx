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
	imageContainer: {},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	contentContainer: {
		maßrginLeft: 8,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	nameText: {
		color: "#000",
		fontSize: 16,
		fontWeight: "bold",
	},
	commentText: {
		color: "#000",
		fontSize: 16,
	},
};

// 댓긍을 단 사람과 댓글 내용을 함께 보여주기 위한 코드
function Comment(props) {
	return(
		<div style={styles.wrapper}>
			<div style={styles.imageContainer}>
				<img src="http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
					style={styles.image} />
			</div>

			<div style={styles.contentContainer}>
				{/* <span style={styles.nameText}>홍길동</span>
				<span style={styles.nameText}>제가 만든 컴포넌트입니다.</span> */}
				<span style={styles.nameText}>{props.name}</span>
				<span style={styles.nameText}>{props.comment}</span>
			</div>
		</div>
	)
}


// function Comment(props) {
// 	return (
// 		<div>
// 			<h1>제가 만든 첫 컴포넌트입니다.</h1>
// 		</div>
// 	);
// }

export default Comment;





