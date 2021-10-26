import React, { Component } from 'react'
import './App.css'
import FragmentDemo from './components/FragmentDemo'
import 	Image from './components/Image'


class App extends Component {
	render() {
		return (
			<div className="App">
					<Image />
				{/* <Counter
					render={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}>
				</Counter>
				<Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter> */}
				{/* <ClickCounter name='Vishwas' /> */}
				{/* <HoverCounter /> */}
				{/* <ParentComp /> */}
				{/* <Hero heroName="Batman" />
				<Hero heroName="Superman" />
				<ErrorBoundary>
					<Hero heroName="Joker" />
				</ErrorBoundary> 
        <ComponentC />*/}
			</div>
		)
	}
}

export default App