// // 1.12: anecdotes step 1
// import { useState } from 'react'

// const Button = (props) => (
// 	<button onClick={props.onClick}>
// 		{props.text}
//   	</button>
// )

// const App = () => {
// 	const anecdotes = [
// 		'If it hurts, do it more often.',
// 		'Adding manpower to a late software project makes it later!',
// 		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
// 		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
// 		'Premature optimization is the root of all evil.',
// 		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// 		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
// 		'The only way to go fast, is to go well.'
// 	]
	
// 	const [selected, setSelected] = useState(Math.floor(Math.random() * 8))

// 	return (
// 		<div>
// 			{anecdotes[selected]}
// 			<p><Button onClick={() => setSelected((selected + Math.floor(Math.random() * 7) + 1) % 8)} text="next anecdote" /></p>
// 		</div>
// 	)
// }

// export default App

// // 1.13: anecdotes step 2
// import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//     'The only way to go fast, is to go well.'
//   ]

//   const [selected, setSelected] = useState(Math.floor(Math.random() * 8))

//   const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

//   const handleVote = () => {
//     const copy = [...votes]
//     copy[selected] += 1
//     setVotes(copy)
//   }

//   const handleNext = () => {
//     const index = (selected + Math.floor(Math.random() * 7) + 1) % 8
//     setSelected(index)
//   }

//   return (
//     <div>
//       <p>{anecdotes[selected]}</p>
//       <p>has {votes[selected]} votes</p>

//       <Button onClick={handleVote} text="vote" />
//       <Button onClick={handleNext} text="next anecdote" />
//     </div>
//   )
// }

// export default App

// // 1.14: anecdotes step 3
import { useState } from 'react'

const Button = (props) => (
	<button onClick={props.onClick}>
		{props.text}
	</button>
)

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	]

	const [selected, setSelected] = useState(Math.floor(Math.random() * 8))

	const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

	const handleVote = () => {
		const copy = [...votes]
		copy[selected] += 1
		setVotes(copy)
	}

	const handleNext = () => {
		const index = (selected + Math.floor(Math.random() * 7) + 1) % 8
		setSelected(index)
	}

	const max = Math.max(...votes)
	const maxIndex = votes.indexOf(max);

	return (
		<div>
			<h2>Anecdote of the day</h2>
			<p>{anecdotes[selected]}</p>
			<p>has {votes[selected]} votes</p>

			<Button onClick={handleVote} text="vote" />
			<Button onClick={handleNext} text="next anecdote" />

			<h2>Anecdote with most votes</h2>
			<p>{anecdotes[maxIndex]}</p>
			<p>has {max} votes</p>
		</div>
	)
}

export default App
