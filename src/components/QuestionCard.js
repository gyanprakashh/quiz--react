import React from 'react'

export default function QuestionCard(props) {
    const { id, level, series, questionText, options } = props.content;
    return (
        <>
        <div className="info-wrapper">
					<span>Question No. : {id + 1} </span>
					<span>Level: {level} </span>
					<span>Series Name: {series}</span>
				</div>
				<div className="question">Q. {questionText}</div>
				<div className="options-wrapper">
					<ul>
						<li onClick={e => props.selectedAnswer(e, id)}>
							<span>{options[0]}</span>
						</li>
						<li onClick={e => props.selectedAnswer(e, id)}>
							<span>{options[1]}</span>
						</li>
						<li onClick={e => props.selectedAnswer(e, id)}>
							<span>{options[2]}</span>
						</li>
						<li onClick={e => props.selectedAnswer(e, id)}>
							<span>{options[3]}</span>
						</li>
					</ul>
				</div>
            
        </>
    )
}
