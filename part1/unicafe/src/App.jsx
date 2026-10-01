// // 1.6: unicafe step 1
// import { useState } from 'react'

// const App = () => {
// 	const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)

// 	const handleGoodClick = () => {
// 		setGood(good + 1)
// 	}

// 	const handleNeutralClick = () => {
// 		setNeutral(neutral + 1)
// 	}

// 	const handleBadClick = () => {
// 		setBad(bad + 1)
// 	}

// 	return (
// 		<div>
// 		<h1>give feedback</h1>
// 		<button onClick={handleGoodClick}>good</button>
// 		<button onClick={handleNeutralClick}>neutral</button>
// 		<button onClick={handleBadClick}>bad</button>
// 		<h2>statistics</h2>
// 		<p>good {good}</p>
// 		<p>neutral {neutral}</p>
// 		<p>bad {bad}</p>
// 		</div>
// 	)
// }

// export default App

// // 1.7: unicafe step 2
// import { useState } from 'react'

// const App = () => {
// 	const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)
// 	const total = good + neutral + bad

// 	const handleGoodClick = () => {
// 		setGood(good + 1)
// 	}

// 	const handleNeutralClick = () => {
// 		setNeutral(neutral + 1)
// 	}

// 	const handleBadClick = () => {
// 		setBad(bad + 1)
// 	}

// 	return (
// 		<div>
// 		<h1>give feedback</h1>
// 		<button onClick={handleGoodClick}>good</button>
// 		<button onClick={handleNeutralClick}>neutral</button>
// 		<button onClick={handleBadClick}>bad</button>
// 		<h2>statistics</h2>
// 		<p>good {good}</p>
// 		<p>neutral {neutral}</p>
// 		<p>bad {bad}</p>
// 		<p>all {total}</p>
// 		<p>average {total === 0 ? 0 : (good - bad) / total}</p>
// 		<p>positive {total === 0 ? 0 : (good * 100) / total}%</p>
// 		</div>
// 	)
// }

// export default App

// // 1.8: unicafe step 3
// import { useState } from 'react'

// const Statistics = (props) => {
//   return (
// 	<div>
// 		<p>good {props.good}</p>
// 		<p>neutral {props.neutral}</p>
// 		<p>bad {props.bad}</p>
// 		<p>all {props.all}</p>
// 		<p>average {props.average}</p>
// 		<p>positive {props.positive}%</p>
// 	</div>
//   )
// }

// const App = () => {
// 	const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)

// 	const total = good + neutral + bad
// 	const avg = total === 0 ? 0 : (good - bad) / total
// 	const pos = total === 0 ? 0 : (good * 100) / total

// 	const handleGoodClick = () => {
// 		setGood(good + 1)
// 	}

// 	const handleNeutralClick = () => {
// 		setNeutral(neutral + 1)
// 	}

// 	const handleBadClick = () => {
// 		setBad(bad + 1)
// 	}

// 	return (
// 		<div>
// 		<h1>give feedback</h1>
// 		<button onClick={handleGoodClick}>good</button>
// 		<button onClick={handleNeutralClick}>neutral</button>
// 		<button onClick={handleBadClick}>bad</button>
// 		<h2>statistics</h2>
// 		<Statistics
// 			good = {good}
// 			neutral = {neutral}
// 			bad = {bad}
// 			all = {total}
// 			average = {avg}
// 			positive = {pos}
// 			/>
// 		</div>
// 	)
// }

// export default App

// // 1.9: unicafe step 4
// import { useState } from 'react'

// const Statistics = (props) => {
//   return (
// 	<div>
// 		<p>good {props.good}</p>
// 		<p>neutral {props.neutral}</p>
// 		<p>bad {props.bad}</p>
// 		<p>all {props.all}</p>
// 		<p>average {props.average}</p>
// 		<p>positive {props.positive}%</p>
// 	</div>
//   )
// }

// const App = () => {
// 	const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)

// 	const total = good + neutral + bad
// 	const avg = total === 0 ? 0 : (good - bad) / total
// 	const pos = total === 0 ? 0 : (good * 100) / total

// 	const handleGoodClick = () => {
// 		setGood(good + 1)
// 	}

// 	const handleNeutralClick = () => {
// 		setNeutral(neutral + 1)
// 	}

// 	const handleBadClick = () => {
// 		setBad(bad + 1)
// 	}

// 	return (
// 		<div>
// 		<h1>give feedback</h1>
// 		<button onClick={handleGoodClick}>good</button>
// 		<button onClick={handleNeutralClick}>neutral</button>
// 		<button onClick={handleBadClick}>bad</button>
// 		<h2>statistics</h2>
// 		{total === 0 
// 			? <p>No feedback given</p>
// 			: <Statistics
// 				good = {good}
// 				neutral = {neutral}
// 				bad = {bad}
// 				all = {total}
// 				average = {avg}
// 				positive = {pos}
// 				/>
// 		}
// 		</div>
// 	)
// }

// export default App

// // 1.10: unicafe step 5
// import { useState } from 'react'

// const Button = (props) => (
// 	<button onClick={props.onClick}>
// 		{props.text}
//   	</button>
// )

// const StatisticLine = (props) => (
// 	<>
// 		{props.text} {props.value} <br />
// 	</>
// )

// const Statistics = (props) => {
// 	return (
// 		<div>
// 			<StatisticLine text="good" value={props.good} />
// 			<StatisticLine text="neutral" value={props.neutral} />
// 			<StatisticLine text="bad" value={props.bad} />
// 			<StatisticLine text="all" value={props.all} />
// 			<StatisticLine text="average" value={props.average} />
// 			<StatisticLine text="positive" value={props.positive + '%'} />
// 		</div>
//   	)
// }

// const App = () => {
// 	const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)

// 	const total = good + neutral + bad
// 	const avg = total === 0 ? 0 : (good - bad) / total
// 	const pos = total === 0 ? 0 : (good * 100) / total

// 	return (
// 		<div>
// 		<h1>give feedback</h1>
// 		<Button onClick={() => setGood(good + 1)} text="good" />
// 		<Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
// 		<Button onClick={() => setBad(bad + 1)} text="bad" />
// 		<h2>statistics</h2>
// 		{total === 0 
// 			? <p>No feedback given</p>
// 			: <Statistics
// 				good = {good}
// 				neutral = {neutral}
// 				bad = {bad}
// 				all = {total}
// 				average = {avg}
// 				positive = {pos}
// 				/>
// 		}
// 		</div>
// 	)
// }

// export default App

// 1.11: unicafe step 6
import { useState } from 'react'

const Button = (props) => (
	<button onClick={props.onClick}>
		{props.text}
  	</button>
)

const StatisticLine = (props) => (
	<tr>
		<td>{props.text}</td>
		<td>{props.value}</td>
	</tr>
)

const Statistics = (props) => {
	return (
		<table>
			<tbody>
				<StatisticLine text="good" value={props.good} />
				<StatisticLine text="neutral" value={props.neutral} />
				<StatisticLine text="bad" value={props.bad} />
				<StatisticLine text="all" value={props.all} />
				<StatisticLine text="average" value={props.average} />
				<StatisticLine text="positive" value={props.positive + '%'} />
			</tbody>
		</table>
  	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const total = good + neutral + bad
	const avg = total === 0 ? 0 : (good - bad) / total
	const pos = total === 0 ? 0 : (good * 100) / total

	return (
		<div>
		<h1>give feedback</h1>
		<Button onClick={() => setGood(good + 1)} text="good" />
		<Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
		<Button onClick={() => setBad(bad + 1)} text="bad" />
		<h2>statistics</h2>
		{total === 0 
			? <p>No feedback given</p>
			: <Statistics
				good = {good}
				neutral = {neutral}
				bad = {bad}
				all = {total}
				average = {avg}
				positive = {pos}
				/>
		}
		</div>
	)
}

export default App
