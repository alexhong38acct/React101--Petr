
import React from 'react';
import PropTypes from 'prop-types';

const Headline = () => {
	return <h1 className="title">Welcome to the React World.</h1>
}

const Greeting = (props) => {
	const {name, age} = props;				// destructuring props
	return <p>You will love it {name} ({age})!</p>
	// return <p>You will love it {props.name} ({props.age})!</p>
}

// 	Stateless Component : App
export const App = () => {
	return (
		<div>
			<Headline />
			<Greeting name="Petr" age={25} />
		</div>
	)
}


Greeting.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired
}




// export default App;