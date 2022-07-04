import React, { useState } from 'react';

import './quizStyles.css'

export default function Quiz() {
	const questions = [
		{
			questionText: 'Столица франции?',
			answerOptions: [
				{ answerText: 'Нью-Йорк', isCorrect: false },
				{ answerText: 'Лондон', isCorrect: false },
				{ answerText: 'Париж', isCorrect: true },
				{ answerText: 'Дублин', isCorrect: false },
			],
		},
		{
			questionText: 'Глава Tesla?',
			answerOptions: [
				{ answerText: 'Джефф Безос', isCorrect: false },
				{ answerText: 'Илон Маск', isCorrect: true },
				{ answerText: 'Билл Гейтс', isCorrect: false },
				{ answerText: 'Тони Старк', isCorrect: false },
			],
		},
		{
			questionText: 'Какая компания создала айфон?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Сколько книнг в Гарри Поттере?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currQuestion, setCurrQuestion] = useState(0)
	const [showRezult, setShowRezult] = useState(false)
	const [finalrez, setFinalrez] = useState(0)

	const AnsewerBtnHandler = (a) => {

		if (a) {
			setFinalrez(finalrez + 1)
			console.log(1);
		}

		if (currQuestion + 1 < questions.length) {
			setCurrQuestion(currQuestion + 1)
		} else {
			setShowRezult(true)
		}
	}

	return <div className="quizW">
		<div className='quiz-wrap'>
			{showRezult ? <div className='score-section'>You scored {finalrez} out of {questions.length}</div> :
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currQuestion].answerOptions.map((answer) => <button key={answer.answerText} onClick={() => AnsewerBtnHandler(answer.isCorrect)}>{answer.answerText}</button>)}
					</div>
				</>
			}
		</div>
	</div>

} 