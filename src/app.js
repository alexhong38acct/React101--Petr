import React from 'react';
import PropTypes from 'prop-types';

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buyItems: ['milk', 'bread', 'fruit']
		}
	}

	render() {
		// 	Destructuring Way
		const {buyItems} = this.state;
		return (
			<div>
				<h1>Shopping List</h1>
				{
					// 	this.state.buyItems.map( item => {
					
					// 	Destructured Way
					buyItems.map( item => {
						return <p key={item}>{item}</p>
					})
				}
			</div>
		)
	}
}







// const Headline = () => {
// 	return <h1 className="title">Welcome to the React World.</h1>
// }
// const Greeting = (props) => {
// 	//  Normal way
// 	// 	return <p>You will love it {props.name} ({props.age})!</p>
	
// 	// 	Destructuring props way
// 	const {name, age} = props;
// 	return <p>You will love it {name} ({age})!</p>
// }
// Greeting.propTypes = {
// 	name: PropTypes.string,
// 	age: PropTypes.number.isRequired
// }

// 	Stateless Component Way
//  const App = () => {
// 	return (
// 		<div>
// 			<Headline />
// 			<Greeting name="Petr" age={25} />
// 		</div>
// 	)
// }

//  Class Component Way
// export class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Headline />
// 				<Greeting name="Petsr" age={25} />
// 			</div>
// 		)
// 	}
// }

// export default App;


























