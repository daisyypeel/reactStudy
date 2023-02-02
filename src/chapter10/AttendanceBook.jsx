import React from "react";
import { useState } from "react";

const students = [
	{
		id: 1,
		name: "Inje",
	},
	{
		id: 2,
		name: "Steve",
	},
	{
		id: 3,
		name: "Bill",
	},
	{
		id: 4,
		name: "Jeff",
	},
];

function AttendanceBook(props) {
	return (
		<ul>
			{students.map((student) => {
				// return <li key={student.id}>{student.name}</li> // 방법 1
				// return <li key={`student-id-${student.id}`}>{student.name}</li> // 방법 2
			})}

			{/* 방법 3 */}
			{/* {students.map((student, index) => {
				return <li key={index}>{student.name}</li>
			})} */}
		</ul>
	);
}

export default AttendanceBook;